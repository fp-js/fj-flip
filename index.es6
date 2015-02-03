export default (fn) => function(...args) { 
  var params = [].slice.call(args, 0);
  params = params.slice(1, 2)
         .concat(params.slice(0, 1))
         .concat(params.slice(2));
  return fn.apply(null, params);
};
