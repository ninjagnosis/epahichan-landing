import type { Term } from '../types';

const term: Term = {
  slug: 'bikram-sambat',
  term: 'Bikram Sambat',
  full: 'Bikram Sambat calendar (BS)',
  aka: ['BS date', 'BS calendar', 'Vikram Samvat', 'Nepali calendar', 'विक्रम संवत्', 'बिक्रम सम्वत'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'Bikram Sambat (BS): Nepal’s calendar and BS to AD dates',
  description: 'Bikram Sambat (BS) is Nepal’s official calendar. How BS years and months work, how BS differs from AD and why BS dates matter on IDs and forms.',
  short: 'Bikram Sambat (BS), विक्रम संवत्, is Nepal’s official calendar. Its years run about 56 to 57 years ahead of the Gregorian (AD) calendar, and its new year falls in mid-April.',
  body: [
    'Almost every official document in Nepal carries a date in Bikram Sambat: citizenship certificates, land records, court papers and the National ID. Business software, by contrast, usually stores dates in the Gregorian calendar, which is why BS and AD conversion shows up in so many forms.',
    'The calendar is also called the Nepali calendar or Vikram Samvat. Its first month is Baisakh, which starts in mid-April.',
  ],
  sections: [
    {
      id: 'structure',
      h: 'How the calendar is built',
      p: [
        'BS has twelve months: Baisakh, Jestha, Ashadh, Shrawan, Bhadra, Ashwin, Kartik, Mangsir, Poush, Magh, Falgun and Chaitra. Months have between 29 and 32 days, and the length of each month changes from year to year. There is no simple formula, which is why conversion uses published lookup tables.',
      ],
    },
    {
      id: 'bs-to-ad',
      h: 'BS to AD conversion',
      p: [
        'BS is ahead of AD by about 56 years and 8 to 9 months. A BS date from Baisakh to Poush falls 57 years earlier in AD, and Magh to Chaitra dates fall 56 years earlier, but month starts do not line up exactly. For example, Ashwin 2083 BS is in October 2026 AD, and 14 January 2025 AD was Magh 1, 2081 BS.',
        'Always convert with a table, not by subtracting 57. The result can be off by a year or a month, and on an ID check a wrong date means a no match.',
      ],
    },
    {
      id: 'ids',
      h: 'Why it matters on IDs',
      p: [
        'The date of birth on a [citizenship certificate](/glossary/citizenship-certificate) and on the [National ID](/glossary/national-id-card) is recorded in BS. When a service checks a [NIN](/glossary/nin), the date of birth to send is the BS one.',
      ],
    },
    {
      id: 'software',
      h: 'Handling BS dates in software',
      p: [
        'Store the BS date as the person gave it, as a year, month and day, and keep AD only as a convenience. Validate the day against the month length for that year. Do not assume the date will round-trip through AD, because of edge cases at month ends.',
      ],
    },
    {
      id: 'checking-a-bs-date-by-hand',
      h: 'Checking a BS date by hand',
      p: [
        'Say a customer’s date of birth on her citizenship certificate is 2050 Baisakh 10. Baisakh is the first month and starts in mid-April, so this falls in April 1993 AD: 2050 minus 57 is 1993. A date in Falgun 2050 would be in February or March 1994, because Falgun comes after the AD new year and 2050 minus 56 is 1994.',
        'Month lengths are why you cannot compute the exact day. Baisakh 2083 began on 14 April 2026, but in other years the new year falls on 13 April or 14 April. Month lengths vary between 29 and 32 days from year to year, and the published calendar tables, not a formula, decide each one. For a form that accepts BS input, offer a month picker and a day range that follows the table for that year.',
      ],
    },
    {
      id: 'common-mistakes',
      h: 'Common mistakes',
      p: [
        'Typing the AD year into a BS field, for example 1993 for a BS date of birth, is the most common. Software can catch it, because a BS date of birth for an adult living today lies roughly between 1960 and 2085. Another mistake is mixing Devanagari and Latin digits. Some forms accept only one, and the ID check API expects Devanagari digits for the date.',
        'A third mistake is swapping day and month, since BS months have names and numbers that people write in different orders. Show the month by name in confirmations so a customer can spot an error before it becomes a no match.',
      ],
    },
    {
      id: 'why-month-lengths-differ',
      h: 'Why month lengths differ',
      p: [
        'A converter source describes the calendar as solar, with each month beginning when the sun enters a sign of the sidereal zodiac. Other sources call it lunisolar, so the sources conflict, and what matters in practice is the published table. Month lengths run from 29 to 32 days. One reference lists Baisakh as 30 or 31 days, Jestha and Ashadh as 31 or 32, and Kartik and Mangsir as 29 or 30.',
        'For 2083 BS, the converter’s table gives Baisakh and Jestha 31 days each and Asar 32. The year began on 14 April 2026. Tables like this exist for 1970 to 2090 BS in that converter, so a program should load a table for the range it needs, not compute lengths.',
      ],
    },
    {
      id: 'a-worked-conversion',
      h: 'A worked conversion',
      p: [
        'Take 14 April 2026, the first day of 2083. Baisakh 1, 2083 is therefore 14 April 2026, and Baisakh 31 is 14 May 2026 if the month has 31 days. Jestha 1 follows on 15 May. That is how you move from BS to AD: find the AD date of the first of the month, then add days within it.',
        'The reverse works the same way. Find the BS month that contains your AD date, and count days from its first day. Doing this by table avoids the year-off-by-one errors that creep in when people subtract 56 or 57 years.',
      ],
    },
    {
      id: 'bs-dates-in-forms-and-databases',
      h: 'BS dates in forms and databases',
      p: [
        'Store the BS date as three numbers, not as text, and validate it against the month table. Keep the original Devanagari or Latin input only if you need to show it back. Offer the month as a name, since the same digits can read differently in different orders.',
        'When you must show both calendars, label them. A column headed only “date” is a common source of mix-ups between BS and AD in reports, and the mix-up can be a whole 56 or 57 years, which makes a person look like a toddler or a centenarian.',
      ],
    },
    {
      id: 'epahichan',
      h: 'BS dates and ePahichan',
      p: [
        'The ePahichan [ID check API](/products/id-check-api) takes the date of birth in Bikram Sambat, along with NIN, name and gender, and answers match or no match.',
      ],
    },
  ],
  faq: [
    { q: 'What is Bikram Sambat?', a: 'It is Nepal’s official calendar, विक्रम संवत्, used on government documents and IDs.' },
    { q: 'How many years is BS ahead of AD?', a: 'About 56 to 57 years, depending on the month. The new year starts in mid-April.' },
    { q: 'What year is it in BS now?', a: 'Ashwin 2083 BS falls in October 2026 AD, so 2083 BS began in April 2026.' },
    { q: 'Can I convert BS to AD by subtracting 57?', a: 'No. Months do not line up, so use a conversion table.' },
    { q: 'Which calendar does the National ID use?', a: 'Dates of birth are recorded in Bikram Sambat.' },
  ],
  related: ['nin', 'national-id-card', 'citizenship-certificate', 'kyc'],
  product: 'id-check-api',
};

export default term;
