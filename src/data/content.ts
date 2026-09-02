export const girlfriendName = 'Anu';

export const storyMilestones = [
  { label: 'Two strangers', detail: 'Neither of us looking for anything.' },
  { label: 'A game', detail: 'Of all places, that\u2019s where you found me.' },
  { label: 'Conversations', detail: 'That kept going long after they should\u2019ve ended.' },
  { label: 'Late-night calls', detail: 'Where the timezone stopped mattering.' },
  { label: 'Something real \u2764', detail: 'And somehow, here we are.' },
];

export const whySpecialCards = [
  {
    title: 'Your caring nature',
    body: 'Tumhe meri chhoti-chhoti baatein yaad rehti hain. Main kabhi casually kuch bol deta hoon, shayad uss waqt mujhe khud bhi yaad nahi rehta ki maine kya kaha tha… but tumhe yaad rehta hai. Phir jab tum weeks baad wahi baat mention karti ho, mujhe realize hota hai ki tum meri baaton ko actually sunti ho. Aur honestly, mujhe yeh bahut special lagta hai.',
  },
  {
    title: 'Your loyalty',
    body: 'Distance easy nahi hota. Kabhi kabhi darr lagta hai ki itni doori kahin cheezein change na kar de. But tumne mujhe kabhi aisa feel nahi hone diya. Tumne kabhi mujhe doubt nahi karne diya ki main tumhari life mein kahan stand karta hoon. Chahe hum kitne bhi door ho, tumne mujhe hamesha close feel karway',
  },
  {
    title: 'Your romantic side',
    body: 'Tumhari little things mujhe sabse zyada hit karti hain. Ek random text, bina reason mera haal poochna, goodnight bolna, ya bas achanak keh dena ki tumhe meri yaad aa rahi thi. Tumhare liye shayad yeh normal ho, but mere liye nahi. Tumhari ek chhoti si message bhi kabhi kabhi mera poora mood change kar deti hai.',
  },
  {
    title: 'The way you understand me',
    body: 'Tumhare saath mujhe khud ko baar-baar explain karne ki zarurat nahi padti. Main chup hoon toh tum samajh jaati ho. Mera mood off hai toh tum notice kar leti ho. Main koi baat aadhi bolke chhod deta hoon toh tum somehow samajh jaati ho ki main actually kya kehna chahta tha. It feels good to be understood without having to explain everything.',
  },
  {
    title: 'The way you calmly accept me',
    body: 'Main perfect nahi hoon. Kabhi galti karta hoon, kabhi stupid behave karta hoon, kabhi unnecessarily difficult bhi ho jaata hoon. But tum meri ek galti ko meri poori personality nahi bana deti. Tum gussa hoti ho, baat karti ho, samjhati ho… but tum bas chhod ke nahi chali jaati. Tum mere saath rehkar cheezein solve karti ho. Aur honestly, that makes me value you even more.',
  },
  {
    title: 'Your presence',
    body: "Aur shayad sabse simple reason… mujhe tumhara kuch special karna bhi zaroori nahi lagta. Bas yeh sochna ki duniya mein kahin tum ho, apni life mein busy ho… aur phir bhi uss life mein se thoda sa time mere liye nikaalti ho — mujhe genuinely lucky feel karwata hai.Tumhe shayad yeh sab chhoti-chhoti cheezein lagti hongi. But mere liye, yahi chhoti cheezein hain jo mujhe baar-baar yaad dilati hain ki I found someone really special. And I'm glad that someone is you.",
  },
];

export const littleThings = [
  { front: 'A kiss from you', back: 'Even imagined, even far away \u2014 it\u2019s the softest thought I carry through the day.' },
  { front: 'Your caring nature', back: 'The way you ask "did you eat?" like it\u2019s the most important question in the world. To me, it kind of is.' },
  { front: 'Your loyalty', back: 'I never have to wonder. That peace is rarer than people admit.' },
  { front: 'Our phone calls', back: 'Some of my favorite hours have had absolutely nothing happening in them \u2014 just your voice, and me, listening.' },
  { front: 'The way you make me feel special', back: 'Like I\u2019m not just someone you talk to. Like I\u2019m someone you chose, on purpose, again and again.' },
  { front: 'Your romantic side', back: 'You\u2019d probably deny how romantic you are. I have receipts.' },
];

export const anuLoves = [
  { emoji: '\u{1F33A}', label: 'Hibiscus', message: 'Bold and a little wild \u2014 exactly the flower I\u2019d pick if I had to describe you in one.' },
  { emoji: '\u{1F5A4}', label: 'Black', message: 'Your favorite color and somehow it still doesn\u2019t manage to be as elegant as you make it look.' },
  { emoji: '\u{1F436}', label: 'Dogs', message: 'You light up talking about them the same way I light up talking about you. I\u2019ve noticed.' },
  { emoji: '\u{1F37D}\uFE0F', label: 'Chole Bhature', message: 'One day I\u2019m sitting across from you while you eat this. That\u2019s the plan. That\u2019s always been the plan.' },
];

export interface Letter {
  id: number;
  title: string;
  preview: string;
  body: string[];
  signature?: string;
}

export const letters: Letter[] = [
  {
    id: 1,
    title: 'For My Anu',
    preview: 'On how you walked into my life uninvited and never left.',
    body: [
      "Maine tumhe kabhi plan nahi kiya tha. Sach kahun toh tum meri kisi list mein nahi thi, na hi main uss din kisi ko dhoond raha tha jab humne pehli baar baat karni start ki thi.Aur phir bhi… pata nahi kaise, tum meri life ke sabse important logon mein se ek ban gayi. Itne unexpected way mein tum meri life mein aayi, jiski maine kabhi imagine bhi nahi kiya tha.Kabhi kabhi main sochta hoon ki humara milna kitna unlikely tha. Kitni saari chhoti-chhoti cheezein, random decisions aur coincidences ek saath align hue honge… tab jaake tum mujhe mili. Aur main bas itna lucky tha ki main tumhare liye woh insaan ban saka jiske saath tum rukna chahti thi.Aur honestly… mujhe khushi hai ki woh sab choices align hui.Mujhe khushi hai ki tum meri life mein aayi.Mujhe khushi hai ki woh tum thi.",
    ],
  },
  {
    id: 2,
    title: 'The Way I Feel',
    preview: 'On ordinary days that became less ordinary because of you.',
    body: [
      'Meri day ka ek version aisa bhi ho sakta hai jisme tum nahi ho… aur honestly, mujhe uss version ke baare mein sochna bhi pasand nahi hai.',
      'Tumhare paas na jaane kaise ek talent hai — tum ek bilkul normal, boring se Tuesday ko bhi special bana deti ho. Shaam ko tumhari call, kaam ke beech tumhara ek random message, ya jab sab kuch thoda overwhelming lag raha ho tab tumhari awaaz… pata nahi kaise, but tumhari presence har normal din ko thoda better bana deti hai.',
      'Main shayad yeh tumhe enough nahi bolta, isliye aaj simply bol raha hoon — tumhara pyaar mere liye koi chhoti cheez nahi hai.Main notice karta hoon tum mujhe kaise care karti ho. Main un chhoti-chhoti cheezon ko yaad rakhta hoon. Aur shayad tumhe realize bhi nahi hai, but tum jis tarah meri life ka part ban gayi ho, usne mere days ko completely change kar diya hai.Tum sirf meri life ka ek part nahi ho… tum meri life ke normal days ko bhi worth remembering bana deti ho.I don\u2019t say this enough, so let me say it plainly: your affection is not a small thing to me. I notice it. I hold onto it. It changes the shape of my days more than you probably know.',
    ],
  },
  {
    id: 3,
    title: 'What You Mean To Me',
    preview: 'On caring, loyalty, understanding \u2014 and what they add up to.',
    body: [
      'Main easily un saari cheezon ki list bana sakta hoon jo tum mere liye karti ho. But honestly, main uske baare mein baat nahi karna chahta.',

      'Main baat karna chahta hoon uss insaan ki jo tum un sab cheezon ke peeche ho — jo bina soche care karti ho, bina kahe loyal rehti ho, aur mujhe itna easily samajh leti ho ki kabhi kabhi mujhe baad mein realize hota hai tum mere liye kitna kuch carry karti ho.',

      'Yeh tum kabhi-kabhi nahi karti. Yeh bas tumhara nature hai. Aur pata hi nahi chala kab tum meri happiness ka itna important part ban gayi.',

      'Tum sirf meri life mein koi important person nahi bani… tum meri life ko better feel karwane ki wajah ban gayi ho.',
    ],
  },
  {
    id: 4,
    title: 'My Promise',
    preview: 'No fake promises. Just what\u2019s actually true.',
    body: [
      'I’m not going to promise ki sab kuch hamesha easy rahega, ya distance kabhi difficult nahi lagega. Kabhi lagega, aur main tumse jhootha promise nahi karna chahta. Tum usse better deserve karti ho.',
      'But ek cheez main honestly promise kar sakta hoon — jo main tumhare liye feel karta hoon, woh real hai. Sirf tumhara birthday hai isliye nahi, ya achha lagta hai bolne mein isliye nahi. I genuinely mean it.',
      'Main tumhe choose karta rahunga. Tumhare liye show up karta rahunga, tumhari care karta rahunga aur tumhe appreciate karta rahunga — sirf easy days mein nahi, difficult days mein bhi. Because you’re worth choosing, every single time.',
    ],
  },
  {
    id: 5,
    title: 'Always & Forever',
    preview: 'The longest letter. Read it last.',
    body: [
      'I want to be honest about the distance, kyunki pretend karna ki yeh matter nahi karta, hum dono ke liye unfair hoga. It does. Kuch nights zyada difficult hoti hain, aur kabhi-kabhi tumhari yaad sirf "I miss talking to you" wali nahi hoti. I just miss having you near me.',

      'Kabhi sochta hoon kaisa hota agar bas haath badhaun aur tum actually mere paas ho. Na call, na screen… bas tum, mere saamne, itni close ki mujhe tumhe imagine na karna pade.',

      'But despite all that, main jo humne build kiya hai usse kisi easier cheez ke liye trade nahi karunga. Tumne mujhe samajhna choose kiya — meri easy-to-love wali side bhi, aur woh parts bhi jinke liye thodi extra patience chahiye. Aur tumne kabhi mujhe un cheezon ke liye less feel nahi karwaya.',

      'That means a lot to me. Log itni easily kisi ko accept nahi karte, but tumne kiya hai… consistently, itni door rehkar bhi, bina kisi reason ke.',

      'So tumhare birthday par, chahe abhi hum kitni bhi door hain, main bas tumhe yeh clearly batana chahta hoon — I love having you in my life. I love that you exist, that you chose me, aur kahin door baithkar tum abhi yeh padh rahi ho… aur hopefully thoda sa smile bhi kar rahi ho.',

      'Always and forever. Distance chahe jitna bhi ho, I’m yours.',
    ],
    signature: 'radhika ayush mishra',
  },
];

export const finalMessage = {
  title: 'Before You Go...',
  paragraphs: [
    'Anu,',
    'if there is one thing I want you to remember from this little corner of the internet, it\u2019s this:',
    'You mean so much to me. More than I probably manage to say. More than distance can change. More than a birthday message could ever explain.',
    'I love you.',
  ],
  closing: 'Happy Birthday, Anu.',
};
