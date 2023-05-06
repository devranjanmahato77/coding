
function solution(D) {
    const weeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const result = {};
  
    for (const day of weeks) {
      result[day] = 0;
    }
  
    for (const dateStr in D) {
      const value = D[dateStr];
      const date = new Date(dateStr);
      const dayOfWeek = weeks[(date.getDay() - 1 + 7) % 7];
  
      result[dayOfWeek] += value;
    }
  
    for (let i = 0; i < weeks.length; i++) {
      const day = weeks[i];
      if (result[day] === 0) {
        const prevDay = weeks[(i - 1 + 7) % 7];
        const nextDay = weeks[(i + 1) % 7];
        result[day] = Math.round((result[prevDay] + result[nextDay]) / 2);
      }
    }
  
    return result;
  }
  

//   const input = {'2020-01-01':4, '2020-01-02': 4, '2020-01-03': 6, '2020-01-04': 8, '2020-01-05': 2, '2020-01-06': -6, '2020-01-07': 2, '2020-01-08': -2}
// //   const input = {'2020-01-01':6, '2020-01-04': 12, '2020-01-05': 14, '2020-01-06': 2, '2020-01-07':4}
//   const output = solution(input);
  
//   console.log(output);