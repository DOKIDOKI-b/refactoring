interface PhotoType {
  title?: string;
  location: string;
  date: Date;
  url: string;
}

interface PersonType {
  name: string;
  photo: PhotoType;
  title?: string;
}

const photo = {
  title: '멋진 내 모습',
  location: '한강',
  date: new Date(),
  url: 'http://instagram.com/myNickName',
};

const renderPhoto = (aPhoto: PhotoType) => {
  return `<img src="${aPhoto.url}" />`;
};

const emitPhotoData = (aPhoto: PhotoType) => {
  const result = [];
  result.push(`<p>위치: ${aPhoto.location}</p>`);
  result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);
  return result.join('\n');
};

const renderPerson = (person: PersonType) => {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(`<p>제목: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
};

const photoDiv = (person: PhotoType) => {
  [
    '<div>',
    `<p>제목: ${person.title}</p>`,
    emitPhotoData(person),
    '</div>',
  ].join('\n');
};

console.log('** renderPerson **\n', renderPerson({ name: '현영', photo }));
console.log('\n** photoDiv **\n', photoDiv(photo));
