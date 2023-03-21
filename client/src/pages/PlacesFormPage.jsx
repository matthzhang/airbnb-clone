import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import AccountNav from "../AccountNav";
import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";

export default function PlacesFormPage() {
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCehckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);
    const [redirect, setRedirect] = useState(false);

    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }

    function inputDescription(text) {
        return (
            <p className="text-gray-500 gext-sm">{text}</p>
        );
    }

    function preInput(header, description){
        return (
            <div>
                {inputHeader(header)}
                {inputDescription(description)}
            </div>
        );
    }

    async function addNewPlace(ev){
        ev.preventDefault();
        await axios.post('/places', {
            title, address, addedPhotos, 
            description, perks, extraInfo, 
            checkIn, checkOut, maxGuests
        });

        setRedirect(true);
    }

    if(redirect){
        return <Navigate to={'/account/places'} />
    }

    return (
        <div>
            <AccountNav />
            <form onSubmit={addNewPlace}>
                {preInput('Title', 'Title for your location, Should be short and catchy.')}
                <input type="text" 
                    value={title} 
                    onChange={ev => setTitle(ev.target.value)} 
                    placeholder="Title, for example: My Apartment" 
                />
                {preInput('Address', 'Address to this place')}
                <input type="text" 
                    value={address} 
                    onChange={ev => setAddress(ev.target.value)} 
                    placeholder="Address" 
                />
                {preInput('Photos', 'More = Better')}
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
                {preInput('Description', 'Description of this place')}
                <textarea 
                    value={description} 
                    onChange={ev => setDescription(ev.target.value)}
                />
                {preInput('Perks', 'Select all perks')}
                <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    <Perks selected={perks} 
                        onChange={setPerks}
                    />
                </div>
                {preInput('Extra Info', 'House rules, etc.')}
                <textarea 
                    value={extraInfo} 
                    onChange={ev => setExtraInfo(ev.target.value)}
                />
                {preInput('Check in/Check out times', 'Add check in/out times, include time window for cleaning')}
                <div className="grid gap-2 sm:grid-cols-3">
                    <div>
                        <h3 className="mt-2 -mb-1">Check in time</h3>
                        <input type="text" 
                            value={checkIn} 
                            onChange={ev => setCheckIn(ev.target.value)} 
                            placeholder="14"
                        />
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">Check out time</h3>
                        <input type="text" 
                            value={checkOut} 
                            onChange={ev => setCehckOut(ev.target.value)} placeholder="14"
                        />
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">Max number of guests</h3>
                        <input type="number"
                            value={maxGuests} 
                            onChange={ev => setMaxGuests(ev.target.value)}
                        />
                    </div>
                </div>
                <button className="primary my-4">Save</button>
            </form>
        </div>
    )
}