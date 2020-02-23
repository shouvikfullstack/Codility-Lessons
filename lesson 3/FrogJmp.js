function solution(X, Y, D){
  if(X<1 || Y<1 || D<1) return 0;
  if(X>1000000000 || Y > 1000000000 || D > 1000000000) return 0;
  if(X>Y) return 0;
  let distance = Y-X;
  return Math.ceil(distance/D);
}