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

const photo = { title: '멋진 내 모습', location: '한강', date: new Date(), url: 'http://instagram.com/myNickName' };

export function emitPhotoData(aPhoto: PhotoType) {
  return [
    `<p>제목: ${aPhoto.title}</p>`,
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
  ].join('\n');
}

export function renderPerson(person: PersonType) {
  return [`<p>${person.name}</p>`, `<img src="${person.photo.url}" />`, emitPhotoData(person.photo)].join('\n');
}

export function photoDiv(person: PhotoType) {
  return `<div>
            ${emitPhotoData(person)}
         </div>`;
}

console.log('** renderPerson **\n', renderPerson({ name: '현영', photo }));
console.log('\n** photoDiv **\n', photoDiv(photo));
