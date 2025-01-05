/*
Author: Hello (World)
cacheWithTimeLimit.js (c) 2025
Desc: joku
Created:  2025-01-03T20:46:38.198Z
Modified: !date!
*/
class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const currentTime = Date.now();
        const existing = this.cache.get(key);
        const isUnexpired = existing && existing.expiration > currentTime;

        this.cache.set(key, {
            value,
            expiration: currentTime + duration
        });

        return !!isUnexpired;
    }

    get(key) {
        const currentTime = Date.now();
        const entry = this.cache.get(key);

        if (entry && entry.expiration > currentTime) {
            return entry.value;
        }

        this.cache.delete(key);
        return -1;
    }

    count() {
        const currentTime = Date.now();
        let count = 0;

        for (const [key, entry] of this.cache.entries()) {
            if (entry.expiration > currentTime) {
                count++;
            } else {
                this.cache.delete(key);
            }
        }

        return count;
    }
}


