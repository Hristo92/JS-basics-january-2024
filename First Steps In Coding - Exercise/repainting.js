function repainting(input) {
  let naylon = Number(input[0]);
  let litersPaint = Number(input[1]);
  let litersThinner = Number(input[2]);
  let totalHours = Number(input[3]);

  let totalNylon = naylon + 2;
  let totalLitersPaint = litersPaint + litersPaint * 0.1;

  let naylonCost = totalNylon * 1.5;
  let paintCost = totalLitersPaint * 14.5;
  let thinnerCost = litersThinner * 5;

  let totalCostForMaterials = naylonCost + paintCost + thinnerCost + 0.4;

  let workersPayPerHour = totalCostForMaterials * 0.3;

  let totalCostForWorkers = workersPayPerHour * totalHours;

  let totalCost = totalCostForMaterials + totalCostForWorkers;

  console.log(totalCost);
}
repainting(["5 ", "10 ", "10 ", "1 "]);
