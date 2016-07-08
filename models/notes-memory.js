'use strict';

let notes = [];
const Note = require('./Note');

exports.update = exports.create = (key, title, body) => {
    return new Promise((resolve, reject) => {
        notes[key] = new Note(key, title, body);
        resolve(notes[key]);
    });
};

exports.read = (key) => {
    return new Promise((resolve, reject) => {
        if (notes[key]) {
            resolve(notes[key]);
        }
        else {
            reject(`Note ${key} does not exist`);
        }
    });
};

exports.destroy = (key) => {
    return new Promise((resolve, reject) => {
        if (notes[key]) {
            delete notes[key];
            resolve();
        }
        else {
            reject(`Note ${key} does not exist`);
        }
    });
};

exports.keylist = () => {
    return new Promise((resolve, reject) => {
        resolve(Object.keys(notes))
    });
};

exports.count = () => {
    return new Promise((resolve, reject) => {
        resolve(notes.length)
    });
};