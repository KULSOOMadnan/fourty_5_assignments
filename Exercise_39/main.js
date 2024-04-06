"use strict";
function makeAlbum(albumTitle, artistName, track) {
    let album = {
        albumtitle: albumTitle, artistname: artistName,
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
let musicAlbum = makeAlbum("TERE BIN ", " BY SHANI Arshaid", 4);
let musicAlbum2 = makeAlbum("TU HAIN KAHA", " BY ZYAN");
let musicAlbum3 = makeAlbum("ZINDAGI GULZAR HAIN OST", " BY HADIQAA KIANI", 6);
console.log(musicAlbum);
console.log(musicAlbum2);
console.log(musicAlbum3);
