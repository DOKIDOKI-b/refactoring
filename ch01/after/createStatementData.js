class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    throw new Error("서브클래스에서 처리되도록 설계되었습니다.");
  }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    super(aPerformance, aPlay);
  }

  get amount() {
    let result = 40000;
    if (this.performance.audience > 30)
      result += 1000 * (this.performance.audience - 30);
    return result;
  }
}

class ComedyCalculator extends PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    super(aPerformance, aPlay);
  }

  get amount() {
    let result = 30000;
    if (this.performance.audience > 20)
      result += 10000 + 500 * (this.performance.audience - 20);
    result += 300 * this.performance.audience;
    return result;
  }

  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}

const createStatementData = (invoice, plays) => {
  const playFor = (aPerformance) => plays[aPerformance.playID];

  const totalVolumeCredits = (data) =>
    data.performances.reduce((total, p) => total + p.volumeCredits, 0);

  const totalAmount = (data) =>
    data.performances.reduce((total, p) => total + p.amount, 0);

  const createPerformanceCalculator = (aPerformance, plays) => {
    switch (plays.type) {
      case "tragedy": {
        return new TragedyCalculator(aPerformance, plays);
      }
      case "comedy": {
        return new ComedyCalculator(aPerformance, plays);
      }
      default: {
        throw new Error(`알 수 없는 장르 ${plays.type}`);
      }
    }
  };

  const enrichPerformance = (aPerformance) => {
    const calculator = createPerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );

    const result = { ...aPerformance };
    result.play = playFor(result);
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;

    return result;
  };

  const statementData = {
    customer: invoice.customer,
    performances: invoice.performances.map(enrichPerformance),
  };
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  statementData.totalAmount = totalAmount(statementData);

  return statementData;
};

export default createStatementData;
