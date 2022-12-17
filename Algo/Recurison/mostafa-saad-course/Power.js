const Power = (a, b) => {
    const helper = (a, b) => {
        if (b == 0) return 1;
        let val = helper(a, Math.trunc(b/ 2));
        return b % 2 == 0 ? val * val : val * val * a;
    };

    return b > 0 ? helper(a, b) :1/ helper(a, b);
};

//  get a^b

console.log(Power(2,5))
