const checkAir = (samples, threshold) => {
  let countOfDirty = 0;
  for (const el of samples) {
    if (el === 'dirty') {
      countOfDirty++;
    }
  }
  if ((countOfDirty / samples.length) > threshold) {
    return 'Polluted';
  } 
  return 'Clean';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))