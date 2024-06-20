function pipesInPool(input) {
  let v = Number(input[0]);
  let p1 = Number(input[1]);
  let p2 = Number(input[2]);
  let h = Number(input[3]);

  let totalVolumePerHour = p1 + p2;
  let totalVolume = totalVolumePerHour * h;
  let currentDebit = (totalVolume / v) * 100;
  let firstPipe = p1 * h;
  let secondPipe = p2 * h;
  let firstPipePercent = (firstPipe / totalVolume) * 100;
  let secondPipePercent = (secondPipe / totalVolume) * 100;
  if (totalVolume > v) {
    let litersMore = totalVolume - v;
    console.log(
      `For ${h} hours the pool overflows with ${litersMore.toFixed(2)} liters.`
    );
  } else {
    console.log(
      `The pool is ${currentDebit.toFixed(
        2
      )}% full. Pipe 1: ${firstPipePercent.toFixed(
        2
      )}%. Pipe 2: ${secondPipePercent.toFixed(2)}%.`
    );
  }
}
pipesInPool(["1000", "100", "120", "3"]);
