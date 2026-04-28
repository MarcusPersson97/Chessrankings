const player = require("./playerSchema");
const mongoose = require("mongoose");
const DbConnection = require("./db");

DbConnection.RunDb();

const players = [
{
  name: "Magnus Carlsen",
  country: "Norway",
  rating: 2840,
  title: "GM",
  peakRating: 2882,
  style: "Universal"
},
{
  name: "Hikaru Nakamura",
  country: "USA",
  rating: 2810,
  title: "GM",
  peakRating: 2816,
  style: "Aggressive"
},
{
  name: "Fabiano Caruana",
  country: "USA",
  rating: 2795,
  title: "GM",
  peakRating: 2844,
  style: "Positional"
},
{
  name: "Vincent Keymer",
  country: "Germany",
  rating: 2776,
  title: "GM",
  peakRating: 2776,
  style: "Solid"
},
{
  name: "Arjun Erigaisi",
  country: "India",
  rating: 2775,
  title: "GM",
  peakRating: 2780,
  style: "Dynamic"
},
{
  name: "Alireza Firouzja",
  country: "France",
  rating: 2762,
  title: "GM",
  peakRating: 2804,
  style: "Creative"
},
{
  name: "R Praggnanandhaa",
  country: "India",
  rating: 2761,
  title: "GM",
  peakRating: 2761,
  style: "Tactical"
},
{
  name: "Anish Giri",
  country: "Netherlands",
  rating: 2760,
  title: "GM",
  peakRating: 2798,
  style: "Positional"
},
{
  name: "Wei Yi",
  country: "China",
  rating: 2754,
  title: "GM",
  peakRating: 2763,
  style: "Attacking"
},
{
  name: "Gukesh Dommaraju",
  country: "India",
  rating: 2754,
  title: "GM",
  peakRating: 2787,
  style: "Sharp"
},
{
  name: "Wesley So",
  country: "USA",
  rating: 2753,
  title: "GM",
  peakRating: 2822,
  style: "Solid"
},
{
  name: "Viswanathan Anand",
  country: "India",
  rating: 2743,
  title: "GM",
  peakRating: 2817,
  style: "Universal"
},
{
  name: "Richard Rapport",
  country: "Hungary",
  rating: 2741,
  title: "GM",
  peakRating: 2776,
  style: "Unorthodox"
},
{
  name: "Leinier Dominguez",
  country: "USA",
  rating: 2738,
  title: "GM",
  peakRating: 2793,
  style: "Positional"
},
{
  name: "Maxime Vachier-Lagrave",
  country: "France",
  rating: 2734,
  title: "GM",
  peakRating: 2819,
  style: "Aggressive"
},
{
  name: "Ding Liren",
  country: "China",
  rating: 2734,
  title: "GM",
  peakRating: 2816,
  style: "Solid"
},
{
  name: "Nodirbek Abdusattorov",
  country: "Uzbekistan",
  rating: 2732,
  title: "GM",
  peakRating: 2771,
  style: "Dynamic"
},
{
  name: "Le Quang Liem",
  country: "Vietnam",
  rating: 2731,
  title: "GM",
  peakRating: 2743,
  style: "Positional"
},
{
  name: "Shakhriyar Mamedyarov",
  country: "Azerbaijan",
  rating: 2730,
  title: "GM",
  peakRating: 2820,
  style: "Aggressive"
},
{
  name: "Levon Aronian",
  country: "USA",
  rating: 2729,
  title: "GM",
  peakRating: 2830,
  style: "Creative"
}
];

async function seed(){

    try {
        await player.deleteMany();
        await player.insertMany(players);
        console.log("data added successfully");
    } 
    
    catch (error) {
        console.error(error);   
    }

    finally{
        DbConnection.CloseDb();
    }

}

seed();