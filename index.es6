export default (fn) => function(...args) { 
  args = args.slice(1, 2)
         .concat(args.slice(0, 1))
         .concat(args.slice(2));
  return fn.apply(null, args);
};
