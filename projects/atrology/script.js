const zodiacSigns = [
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius"
];
// Based on Date, size 31
const compliments = [
  "The stars say your energy attracts success.",
  "Your zodiac aura is naturally magnetic.",
  "The universe has blessed you with strong intuition.",
  "You shine brighter than your ruling planet.",
  "Your cosmic energy inspires everyone around you.",
  "The constellations align in your favor.",
  "Your birth chart radiates confidence.",
  "Your celestial energy brings peace wherever you go.",
  "The universe rewards your kind heart.",
  "Your zodiac sign gives you incredible resilience.",
  "You have the wisdom of the ancient stars.",
  "Your aura is glowing with positive vibrations.",
  "The cosmos is guiding you toward greatness.",
  "Your planetary alignment attracts abundance.",
  "Your spirit is written among the stars.",
  "The moon amplifies your inner strength.",
  "Your horoscope predicts endless opportunities.",
  "You carry the energy of a true leader.",
  "The universe admires your determination.",
  "Your zodiac gifts make you truly unique.",
  "Your star sign fills you with natural charm.",
  "The galaxies are cheering for your dreams.",
  "Your cosmic journey is filled with good fortune.",
  "The stars admire your courage.",
  "Your celestial path is destined for success.",
  "Your positive energy lights up every constellation.",
  "The planets smile upon your ambitions.",
  "Your soul vibrates in harmony with the universe.",
  "You were born under lucky stars.",
  "Your destiny sparkles with endless possibilities.",
  "The universe is always rooting for you."
];

const victimCardCompliments = [
  "You're always there for others, but they rarely show up for you.",
  "You give your best to everyone, yet people often take it for granted.",
  "Your kindness is often mistaken for weakness.",
  "You care deeply, even when no one notices.",
  "You forgive people who would never do the same for you.",
  "You deserve the same loyalty that you give to others.",
  "You always put others first, even when you're hurting.",
  "People rely on your heart but forget to protect it.",
  "You have a habit of making everyone feel special, but few return the favor.",
  "You sacrifice your own peace just to keep others happy.",
  "Your efforts often go unnoticed, but they matter.",
  "You keep checking on everyone else, while no one checks on you.",
  "You stay kind, even after people disappoint you.",
  "You carry more emotional weight than anyone realizes.",
  "You're the person people remember when they need help, not when they celebrate.",
  "You see the good in people, even when they don't deserve it.",
  "You give second chances to people who wouldn't give you one.",
  "Your heart is too genuine for this world sometimes.",
  "You deserve people who appreciate you as much as you appreciate them.",
  "One day, someone will value everything you've been giving to the wrong people."
];

const recommendations = [
  "Take a small step toward your biggest goal today.",
  "Trust your intuition before making important decisions.",
  "Spend more time with people who genuinely support you.",
  "Let go of things you can't control.",
  "Focus on progress, not perfection.",
  "Take a break and recharge your energy.",
  "Start your morning without checking social media.",
  "Express gratitude for three things today.",
  "Say no to something that drains your energy.",
  "Learn one new skill this week.",
  "Drink more water and take care of your body.",
  "Spend at least 15 minutes outdoors today.",
  "Write down your thoughts instead of overthinking them.",
  "Reconnect with an old friend or family member.",
  "Take a chance on an opportunity you've been avoiding.",
  "Listen more than you speak today.",
  "Organize one area of your room or workspace.",
  "Don't compare your journey to someone else's.",
  "Celebrate even your smallest achievements.",
  "Set one realistic goal for tomorrow.",
  "Be patient—good things often take time.",
  "Protect your peace by setting healthy boundaries.",
  "Forgive yourself for past mistakes and move forward.",
  "Trust the timing of your life.",
  "Spend less time worrying about others' opinions.",
  "Read a few pages of a book today.",
  "Follow your curiosity—it may lead to something amazing.",
  "Smile more; your energy influences those around you.",
  "Believe in yourself even when things feel uncertain.",
  "Remember that every challenge is preparing you for something greater."
];

const predictions = [
  "A pleasant surprise is coming your way soon.",
  "Someone will appreciate your efforts more than you expect.",
  "A new opportunity will appear when you least expect it.",
  "Good news is closer than you think.",
  "Your patience will soon pay off.",
  "An important conversation will bring clarity.",
  "A small decision today will lead to a big reward later.",
  "Someone from your past may reconnect with you.",
  "Your confidence will attract the right people.",
  "A lucky coincidence will work in your favor.",
  "Financial opportunities are on the horizon.",
  "A stressful situation will resolve itself sooner than expected.",
  "You'll discover a hidden talent or passion.",
  "A meaningful friendship will grow stronger.",
  "Your hard work will finally get recognized.",
  "Unexpected luck will brighten your day.",
  "The next chapter of your life will bring exciting changes.",
  "You'll receive help from someone you didn't expect.",
  "A wish you've quietly held onto is moving closer to reality.",
  "The universe is aligning events in your favor."
];

const form = document.getElementById("astroForm");

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);

  const text = `Hi ${name} ${surname}, Your Zodiac sign is ${zodiacSigns[month-1]}. ${compliments[day-1]}. ${victimCardCompliments[year%20]}. ${recommendations[day*month%30]}. ${predictions[(name.length*surname.length)%20]}`;

  document.getElementById('result').textContent = text;
})