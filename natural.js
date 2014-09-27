function trainSugarCoater () {
  appearanceClassifier.addDocument('', 'appearance');
  appearanceClassifier.addDocument('', 'not appearance');
  genderClassifier.addDocument('', 'dude');
  genderClassifier.addDocument('', 'chick');
}

function initializeResponses () {
  responses = [
    "I love your shabby chic aesthetic!",
    "Maybe you can take me thrift shopping sometime?  You're so good at it.",
    "It's great that you wore that.  You are so comfortable in your own skin.",
    "You just never let working with smart people intimidate you.  I think that's so brave.",
    "I admire you for not giving in to the pressure to botox.",
    "You're only ___?  You seem so mature for your age.",
    "You watch a lot of reality tv, right?  Maybe you \"can help me understand this...",
    "You are so knowledgeable about reality TV and pop culture.",
    "I defer to your experience.  Of course, you are much closer to these things than I am.",
    "Was that blouse another street find?  Your dedication to recycling is so inspiring.  I love how you are saving the planet one outfit at a time.",
    "My cousin is a little slow.  You know the one. He went to your college, I think?",
    "My cousin, you know, the slow one?  He has really unique taste.  Can you help me with gift ideas for him?",
    "You just don't care what other people think.  I really admire that about you.",
    "It's so cool how you don't care what poeple think of you.",
    "You're so good at not letting what other people say about you bother you.  I really admire that.",
    "I love how you just don't care.",
    "Dude, that's cool that you decided to date a smart girl.  Everybody's so hung up on looks.",
    "Are you an only child?",
    "Are you an actress?",
    "Have you ever thought of growing a beard?",
    "It's so great that you have so much time to spend on facebook.  I always see you on there.",
    "It's great how you are willing to stretch yourself and do things that don't come naturally to you.",
    "We all admire how hard you try.",
    "When are you due!?",
    "It's so exciting that your wife is pregnant.",
    "It's great that you posted that selfie. I love how unvain you are.",
    "Wow, you really remind me of my mother.  (Leave hanging and unclarified the question of whether your mother is an unspeakably heinous human being.)",
    "Wow, you really remind me of my  mother.  Before she went into therapy.",
    "Wow, you look good in make up!",
    "This looks good.  I don't know what they were talking about.",
    "Are you tired?  You look tired.",
    "Give candbar twelve pack as gift.",
    "Give diet candy as gift",
    "Walk or drive very slowly in front of person.  Smile and waive when they pass.",
    "Regift gift back to person who gave it to you...in different wrapping paper.",
    "Regift something you received from this person to a third person...in their presence.",
    "Start offering candy  or desert and then stop midway.  \"Oh, I'm sorry.  You're dieting, right?  Nevermind.\""
  ];
}

function getAppearanceIndex (line) {
  return appearanceClassifier.classify(line);
}

function getGender (line) {
  return genderClassifier.classify(line);
}