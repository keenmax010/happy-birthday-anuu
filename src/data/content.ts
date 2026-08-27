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
    body: 'You check on me on days I don\u2019t even ask you to. You remember things I mention once, in passing, and bring them up weeks later like they mattered. They did. You made them matter.',
  },
  {
    title: 'Your loyalty',
    body: 'Distance tests people. It hasn\u2019t tested us the way I thought it might, because you\u2019ve never once made me doubt where I stand with you.',
  },
  {
    title: 'Your romantic side',
    body: 'The little things you do without being asked \u2014 the messages, the way you say goodnight \u2014 they land harder than you probably realize.',
  },
  {
    title: 'The way you understand me',
    body: 'I don\u2019t have to explain myself twice. You just get it \u2014 the mood, the silence, the joke I didn\u2019t finish. You fill in the rest correctly, every time.',
  },
  {
    title: 'The way you calmly accept me',
    body: 'Even when I mess up. Even when I\u2019m difficult. You don\u2019t leave, you don\u2019t punish me for it. You just stay, and talk it through with me.',
  },
  {
    title: 'Your presence',
    body: 'Not what you do. Not what you say. Just you, existing, being somewhere in the world and choosing to spend your time on me.',
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
      'I didn\u2019t plan for you. That\u2019s the truth of it \u2014 you weren\u2019t on any list, weren\u2019t something I was looking for the day we started talking.',
      'And yet here you are, somehow one of the most important people in my life, having arrived through the most unlikely door I could\u2019ve imagined.',
      'I think about that sometimes \u2014 how easily this could not have happened. How many small, unremarkable choices had to line up for you to find me, and for me to be someone worth staying for.',
      'I\u2019m glad they lined up. I\u2019m glad it was you.',
    ],
  },
  {
    id: 2,
    title: 'The Way I Feel',
    preview: 'On ordinary days that became less ordinary because of you.',
    body: [
      'There\u2019s a version of my day that exists without you in it, and I don\u2019t like thinking about that version very much.',
      'You have this way of making an unremarkable Tuesday feel like it mattered \u2014 a call in the evening, a message in the middle of my work, your voice when I needed a break from everything else.',
      'I don\u2019t say this enough, so let me say it plainly: your affection is not a small thing to me. I notice it. I hold onto it. It changes the shape of my days more than you probably know.',
    ],
  },
  {
    id: 3,
    title: 'What You Mean To Me',
    preview: 'On caring, loyalty, understanding \u2014 and what they add up to.',
    body: [
      'It would be easy to list the things you do for me. But that\u2019s not really what I want to talk about.',
      'I want to talk about who you are underneath the things you do \u2014 someone caring almost by instinct, loyal without needing to be asked to be, and so quietly understanding that I sometimes don\u2019t notice how much you\u2019re carrying for me until later.',
      'That\u2019s not something you do occasionally. It\u2019s something you are, consistently, in a way that\u2019s become part of my own happiness without me fully realizing when that happened.',
      'You didn\u2019t just become someone I care about. You became part of what makes my life feel good.',
    ],
  },
  {
    id: 4,
    title: 'My Promise',
    preview: 'No fake promises. Just what\u2019s actually true.',
    body: [
      'I\u2019m not going to promise you that everything will always be easy, or that distance won\u2019t sometimes be genuinely hard, because I\u2019d be lying, and you deserve better than a pretty lie.',
      'What I can promise is smaller than that, and truer: what I feel for you is real. Not performed, not convenient, not said because it\u2019s your birthday and it sounds nice.',
      'I\u2019ll keep choosing you. I\u2019ll keep showing up for you, caring for you, and appreciating you \u2014 not because it\u2019s easy, but because you\u2019re worth choosing, on the hard days and the easy ones both.',
    ],
  },
  {
    id: 5,
    title: 'Always & Forever',
    preview: 'The longest letter. Read it last.',
    body: [
      'I want to be honest about the distance, because pretending it doesn\u2019t exist would be unfair to both of us. It\u2019s there. Some nights it\u2019s heavier than others, and there are moments I miss you in a way that doesn\u2019t translate well into words \u2014 not "I miss talking to you," but something closer to missing the physical fact of you being near.',
      'I think about what it would be like to just reach over and have you actually there. Not a call. Not a screen. You, in the room, close enough that I don\u2019t have to imagine it.',
      'But here\u2019s the other half of that honesty: I wouldn\u2019t trade what we\u2019ve built for something easier. You chose to understand me \u2014 the parts of me that are simple to love, and the parts that take more patience than they should. You chose to accept those parts too, without making me feel small for having them.',
      'That\u2019s not a small thing. People don\u2019t do that easily, and you\u2019ve done it consistently, from far away, with nothing forcing you to.',
      'So on your birthday, across whatever distance separates us right now, I want you to know this clearly: I love your presence in my life. I love that you exist, that you chose me, and that somewhere out there, you\u2019re reading this and \u2014 I hope \u2014 smiling a little.',
      'Always and forever, however far apart, I\u2019m yours.',
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
