interface Photo {
  title: string;
  location: string;
  date: Date;
  url: string;
}

interface Person {
  name: string;
  photo: Photo;
}

interface OutputStream {
  res: string;
  write(text: string): void;
}

export function previousDateFromNow(days: number) {
  return new Date(Date.now() - 1000 * 60 * 60 * 24 * days);
}

export function recentDateCutoff() {
  return previousDateFromNow(3);
}

export function renderPhoto(outStream: OutputStream, aPhoto: Photo) {
  outStream.write(`<img src="${aPhoto.url}" />`);
}

export function emitPhotoData(outStream: OutputStream, photo: Photo) {
  outStream.write(`<p>제목: ${photo.title}</p>`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>`);
  outStream.write(`<p>위치: ${photo.location}</p>`);
}

export function listRecentPhotos(outStream: OutputStream, photos: Array<Photo>) {
  photos
    .filter(photo => photo.date > recentDateCutoff())
    .forEach(photo => {
      outStream.write('<div>\n');
      emitPhotoData(outStream, photo);
      outStream.write('</div>\n');
    });
}

export function renderPerson(outStream: OutputStream, person: Person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}

const photos: Array<Photo> = [
  { title: '멋진 내 얼굴', location: '대전', date: previousDateFromNow(0), url: 'http://fakegram.co.kr/me' },
  // ... (and so on for other photos)
];

const outstream: OutputStream = {
  res: '',
  write(text: string): void {
    this.res += text;
  },
};

outstream.write('** renderPerson **\n');
renderPerson(outstream, { name: '현영', photo: photos[0] });
outstream.write('\n\n** listRecentPhotos **\n');
listRecentPhotos(outstream, photos);
console.log(outstream.res);
