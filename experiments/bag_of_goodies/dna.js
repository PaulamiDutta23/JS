function x(y, amplitude, wavelength) {
  return amplitude + Math.floor(amplitude * Math.sin(y * wavelength));
}

function dnaPair(config) {
  const x1 = config[0];
  const x2 = config[1];
  const l = config[2];
  const r = config[3];
  return ' '.repeat(x1) + l + '='.repeat(x2 - x1) + r;
}

function dnaStrand(strandLength, amplitude, wavelength) {
  const pairs = [];
  for (let i = 0; i < strandLength; i++) {
    const k1 = x(i, amplitude, wavelength);
    const k2 = x(i + amplitude, amplitude, wavelength);
    let config = k1 < k2 ? [k1, k2, '🟡', '🔵'] : [k2, k1, '🟡', '🔵'];
    pairs.push(dnaPair(config));
  }

  return pairs;
}

function main(args) {
  const strandLength = +args[0] || 40;
  const amplitude = +args[1] || 10;
  const wavelength = +args[2] || 0.2;
  const strand = dnaStrand(strandLength, amplitude, wavelength);
  console.log(strand.join('\n'));
}

main(Deno.args);