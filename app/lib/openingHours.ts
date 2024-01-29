const daysofWeek = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
};
const openingHours = [
  {
    day: daysofWeek.MONDAY,
    open: 9,
    close: 24,
  },
  {
    day: daysofWeek.TUESDAY,
    open: 9,
    close: 21,
  },
  {
    day: daysofWeek.WEDNESDAY,
    open: 9,
    close: 21,
  },
  {
    day: daysofWeek.THURSDAY,
    open: 9,
    close: 21,
  },
  {
    day: daysofWeek.FRIDAY,
    open: 9,
    close: 24,
  },
  {
    day: daysofWeek.SATURDAY,
    open: 9,
    close: 24,
  },
  {
    day: daysofWeek.SUNDAY,
    open: 9,
    close: 20,
  },
];

export function isRestaurantOpen() {
    const today = new Date();
    const currentDay = today.getDay();
    const currentHour = today.getHours();

    const openingHoursToday = openingHours.find(
        (openingHour) => openingHour.day === currentDay
    );

    if (
        openingHoursToday &&
        currentHour >= openingHoursToday.open &&
        currentHour < openingHoursToday.close
    ) {
        return true;
    } else {
        return false;
    }
}

