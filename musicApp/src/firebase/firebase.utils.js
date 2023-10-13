import {initializeApp} from "firebase/app";
import { getFirestore, doc, getDoc, setDoc , collection} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCibWl6KAXTAP7R1Oc65P3jcgwDso_lLXE",
    authDomain: "musicapp-54af8.firebaseapp.com",
    projectId: "musicapp-54af8",
    storageBucket: "musicapp-54af8.appspot.com",
    messagingSenderId: "945180736329",
    appId: "1:945180736329:web:f38065c798278aaaabf898",
    measurementId: "G-HE38DR4RSD"
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const firestore = getFirestore();

// Create operation
export const createMusic = async (musicData) => {
    const {title, artist, genre, duration, releaseDate, album, coverArtUrl, audioFileUrl} = musicData;
    try {
        const musicData = {
            title: title,
            artist: artist,
            genre: genre,
            duration: duration,
            releaseDate: releaseDate,
            album: album,
            coverArtUrl: coverArtUrl,
            audioFileUrl: audioFileUrl
        };

        const musicRef = doc(collection(db, 'music'));
        await setDoc(musicRef, musicData);
        return musicRef.id;
    } catch (error) {
        console.error('Error creating music:', error);
        throw new Error('An error occurred while creating the music.');
    }
};

  
  // Read operation
export const getMusicById = async (musicId) =>  {
    try {
      const musicRef = doc(db, 'music', musicId);
      const musicSnapshot = await getDoc(musicRef);
      if (musicSnapshot.exists()) {
        return { id: musicSnapshot.id, ...musicSnapshot.data() };
      } else {
        throw new Error('Music not found.');
      }
    } catch (error) {
      console.error('Error retrieving music:', error);
      throw new Error('An error occurred while retrieving the music.');
    }
  }
  
  // Update operation
export const updateMusic= async (musicId, musicData) => {
    try {
      const musicRef = doc(db, 'music', musicId);
      await setDoc(musicRef, musicData, { merge: true });
      return musicId;
    } catch (error) {
      console.error('Error updating music:', error);
      throw new Error('An error occurred while updating the music.');
    }
  }
  
  // Delete operation
export const  deleteMusic = async (musicId) => {
    try {
      const musicRef = doc(db, 'music', musicId);
      await deleteDoc(musicRef);
      return musicId;
    } catch (error) {
      console.error('Error deleting music:', error);
      throw new Error('An error occurred while deleting the music.');
    }
  }


  //fetching all the musics
  export const getAllMusic = async () => {
    try {
      const musicSnapshot = await getDocs(collection(db, 'music'));
      const musicList = [];
  
      musicSnapshot.forEach((musicDoc) => {
        const musicData = musicDoc.data();
        const music = {
          id: musicDoc.id,
          ...musicData
        };
        musicList.push(music);
      });
  
      return musicList;
    } catch (error) {
      console.error('Error fetching music:', error);
      throw new Error('An error occurred while fetching the music.');
    }
  };