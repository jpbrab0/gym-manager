module.exports = {
  age(timestamp) {
    const today = new Date();
    const birthday = new Date(timestamp);

    let age = today.getFullYear() - birthday.getFullYear();
    const month = today.getMonth() - birthday.getMonth();

    if (month < 0 || (month == 0 && today.getDate() <= birthday.getDate())) {
      age--;
    }

    return age;
  },

  date(timestamp) {
    const date = new Date(timestamp);

    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`,
      format:`${day}/${month}/${year}`
    };
  },

  blood(type) {
    let rh = type[type.length - 1];
    let blood = type.slice(0, type.length - 1);

    rh == 1 ? (rh = "+") : (rh = "-");

    return blood + rh;
  },
};
