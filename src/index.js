#!/usr/bin/env node

import weather from './lib/weather';

const args = process.argv.slice(2);

dictionary(args[0])
    .then(console.log)
    .catch(console.error);
