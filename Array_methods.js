const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400},
];

//возвращает сумму только положительных данных
const getPositiveIncomeAmount = (data) => {
    const newArr = data.filter(obj => obj.amount>=0);
    const sum = newArr.reduce((sum, current) => sum + current.amount, 0);
    console.log(sum);
    return sum;
};
getPositiveIncomeAmount(funds);

//возвращает сумму
const getTotalIncomeAmount = (data) => {
    const res = data.reduce((sum, current) => sum + current.amount, 0);
    console.log(res);
    return res;
};
getTotalIncomeAmount(funds);