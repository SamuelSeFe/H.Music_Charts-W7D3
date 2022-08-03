import React, { useState, useEffect } from 'react';
import MusicList from "../components/MusicList";

const MusicContainer = () => {

    const [songs, setSongs] = useState([]);
    const [genre, setGenre] = useState("");

    useEffect(() => {
        getGenres();
    }, []);

    const onSelect = function(event){
        setGenre(event.target.value)
        console.log(genre)
    };

    useEffect(() => {
        getGenres();
    }, [genre]);

    const getGenres = function() {
        if (genre === "all" || genre === ""){
            fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))

        } else if (genre === "rock"){
            fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json")
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))

        }else if (genre === "dance"){
            fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json")
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))

        }else if (genre === "country"){
            fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json")
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
        }};

    return (
        <div className="main-container">
            <select onChange={onSelect}>
                <option value="all">All</option>
                <option value="rock">Rock</option>
                <option value="dance">Dance</option>
                <option value="country">Country</option>

            </select>
            <MusicList songs={songs} />
        </div>
    )
};

export default MusicContainer;