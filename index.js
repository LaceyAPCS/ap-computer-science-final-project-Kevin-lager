/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.  It's intended to be used at an MLH Localhost
 * Workshop.
 *
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/mlh/mlh-localhost-hacking-with-alexa
 **/



'use strict';

// TODO: replace with facts about yourself
var handlers = {
  'LaunchRequest': function () {this.emit(':tell', "No intent with that name."); 
  },
  
  // Adventure start point
  'startAdventure': function() {this.response.speak("Welcome to The Adventure of Bill Bean!" + 
    " To respond, please say one, two, or three. Billy Bean enters a lunch room and looks around." +
    " Does Bean, One, get food, two, join the army, or three, leave.").listen("What choice do you pick.");
    this.emit(':responseReady');
  },
  
  //****Choice one/ first set of choices. uses 4-9****
  'choiceOne': function() {this.response.speak("Bean goes to the lunch line to get food." +
    " In the process, he notices that his shoe is untied. Does Bean, four, tie it, or five, leave it?").listen("What choice do you pick.");
    this.emit(':responseReady');
  },
    //Choice 4
    'choiceFour': function() {
      this.response.speak("After tying his shoe, Bean walks over to the lunch table and notices people rolling dice." +
      " Overhearing them, he realizes it is a bet, where rolling a 3 wins, but a 1, 2, 4, 5, or 6 will loose. "
      + "Does Bean, six, join them, or seven, ignore them?").listen("What choice do you pick.");
      this.emit(':responseReady');
    },
      
      //Code goes here if user chooses option six
      'choiceSix': function() {
          if (rollDice() == 3) {
            this.response.speak("Bean wins! A pink slip is signed and Bean ends up getting a car when he only wanted lunch.");
            this.emit(':responseReady');
          }
          else {
            this.response.speak("Unfortunately for Billy boy, he has to give up his watch, glasses, and lunch. Not only did Bean not eat,"
            + " but he was embarrassed in public. The only thing left for him to do is walk on home, clueless as to how long hes been gone.");
            this.emit(':responseReady');
          }
      },
      //Option 7
      'choiceSeven': function() {
        this.response.speak("Since Bean decided to ignore the others, a stranger decides to sit down with him."
        + " Bean and the stranger talk. Bean soon finds he is a missing convict and finds that his wallet was stolen."
        + " Does Bean, eight, chase him, or nine, do nothing").listen("What choice do you pick");
        this.emit(':responseReady');
      },
        //option 8
        'choiceEight': function() {
          this.response.speak("Bean chases down the suspect and ends up confronting him and knocking him out." 
          + "The cops arrive and Bean got his wallet back and became the town hero!");
          this.emit(':responseReady');
        },
        //option 9
        'choiceNine': function() {
          this.response.speak(basicGameEnding());
          this.emit(':responseReady');
        },
      
  //Choice 5. uses 10-15
  'choiceFive': function() {this.response.speak("Bean gets his food, but ultimately trips and falls on his trip to the table." +
    " Someone asks to help him. Does Bean, ten, deny help, or eleven, accept help?").listen("What choice do you pick.");
    this.emit(':responseReady');
  },
    //Choice 10
    'choiceTen': function() {
      this.response.speak("Beans refusal of help makes everyone suspicious since he freaked out. As a result the cops were called on him." 
      + " Does Bean, twelve, run, or 13, allow himself to be arrested.").listen("What is your choice");
      this.emit(':responseReady');
    },
      //Choice 12
      'choiceTwelve': function() {
        this.response.speak("You run through the alley way and see a police helicopter sweeping through ahead. Do you, 14, turn left, or 15 hide.").listen("Choice?");
        this.emit(':responseReady');
      },
        //Choice 14
        'choiceFourteen': function() {
          this.response.speak("Bean finds himself a taxi driver who is willing to hide him and take him away to somewhere safe." +
          " Bean successfully escapes and now lives a life on the run.");
          this.emit(':responseReady');
        },
        
        //Choice 15
        'choiceFifteen': function() {
          this.response.speak(basicGameEnding());
          this.emit(':responseReady');
        },
      
      //Choice 13
      'choiceThirteen': function() {
        this.response.speak(basicGameEnding());
        this.emit(':responseReady');
      },
  
  //Choice two/ second set of choices 16-
  'choiceTwo': function() {this.response.speak("Bean joins the army and soon finds himself storming the beaches in a war." + 
    " Bean reaches the beach and has two options, sixteen, go left, or seventeen, go right.").listen("What choice do you pick.");
    this.emit(':responseReady');
  },
    //Choice 16
    'choiceSixteen': function() {
      this.response.speak("By going to the left, Bean finds a wounded soldier who is begging for his help."
      + " Does Bean, eighteen, leave him, or nineteen, help him.").listen("What choice do you pick.");
      this.emit(':responseReady');
    },
      
      //Choice 18
      'choiceEighteen': function() {
        this.response.speak("As a result of leaving the soldier behind, Bean finds himself deep within enemy lines," 
        + " but is able to cause massive damage and create a flank on the enemy."
        + " The war pushes on. Does bean, 20, join, or 21, go back to base?").listen("What choice do you pick.");
        this.emit(':responseReady');
      },
        
        //Choice 20
        'choiceTwenty': function() {
          this.response.speak("Bean pushes forward, and the army is now dominating the enemy. They eventually reach a truce, causing the battle to end.");
          this.response.speak(badWarEnding());
          this.emit(':responseReady');
        },
        
        //Choice 21
        'choiceTwentyOne': function() {
          this.response.speak(badWarEnding());
          this.emit(':responseReady');
        },
      
      //Choice 19
      'choiceNineteen': function() {
        this.response.speak("Bean leans down next to the fallen soldier."
        + " Does he, 22, attempt to heal his wounds, or 23, carry him out.").listen("What choice do you pick.");
        this.emit(':responseReady');
      },
      
        //Choice 22
        'choiceTwentyTwo': function() {
          if (fiftyFifty() == 1 ) {
            this.response.speak("You successfully healed the soldier and are considered a savior for it." 
            + " He is able to make it back to the front lines and live another day.");
            this.emit(':responseReady');
          }
          else {
            this.response.speak("Healing has failed. The soldier is now profusely bleeding.");
            this.response.speak(goodWarEnding());
            this.emit(':responseReady');
          }
        },
      
      //Choice 23
      'choiceTwentyThree': function() {
        this.response.speak(goodWarEnding());
        this.emit(":responseReady");
      },
    
    //Choice 17
    'choiceSeventeen': function() {
      this.response.speak("By going to the right, Billy soon realizes how he is alone and becoming surrounded."
      + " Bean begins to realize that there is no escape in his future. Does Bean, 24, fight, or 25 surrender.").listen("What choice do you pick.");
      this.emit(":responseReady");
    },
      
      //Choice 24
      'choiceTwentyFour': function() {
        this.response.speak("Bean tries valliantly to fight, but there are too many."
        + " Backup does not arrive in time. Bean is now taken hostage. The enemies want information."
        + " Does Bean, 26, give information, or 27, refuse.").listen("what is your choice");
        this.emit(":responseReady");
      },
      
        //Choice 26
        'choiceTwentySix': function() {
          this.response.speak("Bill spills the beans and now the enemy knows what their plans are." 
          + " They launch a counterattack and the tide of war changes, all because Bill wanted to save himself.");
          this.emit(":responseReady");
        },
        
        //Choice 27
        'choiceTwentySeven': function() {
          this.response.speak("As a result of holding out information, the enemies get mad and stick around too long."
          + " Backup arrives and Bean is saved from his doom.");
          this.emit(":responseReady");
        },
      
      //Choice 25
      'choiceTwentyFive': function() {
        this.response.speak(basicGameEnding());
        this.emit(":responseReady");
      },
  
  //Choice three/ third set of choices 28-70
  'choiceThree': function() {this.response.speak("Upon going outside, Bean notices a man sitting alone at a bench." + 
    " Does Bean, 28, talk to him, or 29, leave him?").listen("What choice do you pick.");
    this.emit(':responseReady');
  },
  
    //Choice 28
    'choiceTwentyEight': function() {
      this.response.speak("Bean talks to the man and the man says," 
      + " 'Hello good sir, how are you? Would you like to make a quik 1000 dollars?' Does Bean, 30, ask how, or 31, ignore?").listen("What choice do you pick?");
      this.emit(':responseReady');
    },
    
      //Choice 30
      'choiceThirty': function() {
      this.response.speak("The man says, 'Alright, Mr. Bean, I need you to deliver this package to my informant."
      + " It is full of top secret information and you cannot open it without the special key. Can I trust you?' Does bean, 32, accept, or 33 deny?").listen("What choice do you pick?");
      this.emit(':responseReady');
      },
      
        //Choice 32
        'choiceThirtyTwo': function() {
        this.response.speak("Bean reflects on himself while walking and realizes"
        + " that he can turn the package in to the police. Does Bean, 34, continue, or 35, turn it in?").listen("What choice do you pick?");
        this.emit(':responseReady');
        },
        
          //Choice 34
          'choiceThirtyFour': function() {
          this.response.speak("He continues on and eventually reaches his destination."
          + " Bean delivers the package and the man gives Bean his reward on the spot."
          + " Bean has the option of walking on or asking what is in the package."
          + " Does Bean, 36, move on, or 37 ask further?").listen("What choice do you pick");
          this.emit(':responseReady');
          },
          
            //Choice 36
            'choiceThirtySix': function() {
              this.response.speak("Bean went home 1000 dollars richer and was finally able to eat.");
              this.emit(':responseReady');
            },
          
            //Choice 37
            'choiceThirtySeven': function() {
              this.response.speak("The man was at first taken back by the request, but decided to do a coin flip." 
              + " If he wins, Bean looses his 1000 dollars."
              + " If Bean wins, he keeps his money and views the package. Does Bean, 38, play, or 39, walk away?").listen("What choice do you pick?");
              this.emit(':responseReady');
            },
          
              //Choice 38
              'choiceThirtyEight': function() {
                if (fiftyFifty() == 1) {
                  this.response.speak("Bean reads the message to find that the building next to his house has 100 thousand dollars hiding in it."
                  + " He rushes him and beats his now opponent and is now rich.");
                  this.emit(':responseReady');
                }
                else {
                  this.response.speak("Bean lost all of his money and now goes home, still hungry from not eating before.");
                  this.emit(':responseReady');
                }
              },
            
              //Choice 39
              'choiceThirtyNine': function() {
                this.response.speak("Bean looks at his winnings and sees that hes already ahead."
                + " He heads home content with what he has, eats, and forgets about the box within the next day.");
                this.emit(':responseReady');
              },
            
          //Choice 35
          'choiceThirtyFive': function() {
            this.response.speak("Bean takes off sprinting to the police station and the police arrest the two who he was working for."
            + " It was revealed that the money that they were passing around was stolen. Bean learns of the location."
            + " Does he, 40, attempt to beat the cops, or 41, go home.").listen("What choice do you pick?");
            this.emit(':responseReady');
          },
          
            //Choice 40
            'choiceFourty': function() {
              if (fiftyFifty() == 1) {
                this.response.speak("Bean made it before the cops could catch him or get to the location."
                + " Bean grabs the money and runs, now 100 thousand dollars richer, but living a life as a fugitive.");
                this.emit(':responseReady');
              }
              else {
                this.response.speak("The cops beat Bean to the location and arrest him on the spot, giving him 5 years in prison");
                this.emit(':responseReady');
              }
            },
            
            //Choice 41
            'choiceFourtyOne': function() {
              this.response.speak("Bean felt tired and hungry and decided to just go home when he was finished with the police."
              + " He finally was able to eat after a wild day.");
              this.emit(':responseReady');
            },
        
        
        //Choice 33
        'choiceThirtyThree': function() {
          this.response.speak("Bean denys the task, but now the man is upset with"
          + " how Bean knows about this package deal but won't help him. He attacks Bean."
          + " Does Bean, 42, retaliate, or 43, flee?").listen("What choice do you pick?");
          this.emit(':responseReady');
        },
        
          //Choice 42
          'choiceFourtyTwo': function() {
            this.response.speak("Bean finds himself in a fight for his life with the now deranged man."
            + " He stuns the man. Bean realizes he can push his fight on or stop to grab a heavy object to hit him over the head."
            + " Does Bean, 43, push his attack on, or 44, grab the heavy object?").listen("What choice do you pick?");
            this.emit(':responseReady');
          },
          
            //Choice 43
            'choiceFourtyThree': function() {
              this.response.speak("Bean pushes his attack on and knocks the man unconscious."
              + " Bean calls the cops and becomes the town hero for stopping this deranged man and solving the mystery as to why money has gone missing.");
              this.emit(':responseReady');
            },
            
            //Choice 44
            'choiceFourtyFour': function() {
              this.response.speak("Grabbing the heavy object gives the man a chance to recover and severely injure bean."
              + " Scared, Bean hits the man so hard he ends up killing the man. Does Bean, 45, run, or 46, call the cops?").listen("What choice do you pick?");
              this.emit(':responseReady');
            },
            
              //Choice 45
              'choiceFourtyFive': function() {
                this.response.speak("Bean is now on a run for his life. The cops soon find out what happens and they are now hunting for him."
                + " At the airport where Bean attempts to escape, he is confronted by an officer who is suspicious of him."
                + " Does Bean, 47, attempt to lie, or 48, does he admit to his crimes.").listen("What choice do you pick?");
                this.emit(':responseReady');
              },
              
                 //Choice 47
                'choiceFourtySeven': function() {
                  if (fiftyFifty() == 1) {
                    this.response.speak("Bean successfully lied his way out of the situation."
                    + " He escapes by plane and lives a new life where nobody recognizes him. The case goes unsolved.");
                    this.emit(':responseReady');
                  }
                  else {
                    this.response.speak("Bean is caught in his lie and is arrested on the spot. " + basicGameEnding());
                    this.emit(':responseReady');
                  }
                },
                
                //Choice 48
                'choiceFourtyEight': function() {
                  this.response.speak(basicGameEnding());
                  this.emit(':responseReady');
                },
              
              //Choice 46
              'choiceFourtySix': function() {
                this.response.speak("By calling the cops, they arrive and detain Bean asking him questions about what happened."
                + " Does Bean, 49, lie, or 50, tell the truth?").listen("What choice do you pick?");
                this.emit(':responseReady');
              },
              
                //Choice 49
                'choiceFourtyNine': function() {
                  this.response.speak("The cops catch Bean in his lie and end up arresting him on the spot with a 7 year sentence. " + basicGameEnding());
                  this.emit(':responseReady');
                },
                
                //Choice 50
                'choiceFifty': function() {
                  this.response.speak("The cops respect Beans honesty and see why he did what he did."
                  + " He escapes with no charges at all and is able to go home and finally eat.");
                  this.emit(':responseReady');
                },
                
      //Choice 31
      'choiceThirtyOne': function() {
        this.response.speak("Bean ignores the mans needs and eventually decides to get up and walk away. He enters a park and sees a lonely dog. Nobody is around."
        + " Bean approaches the dog and notices that he has no name tag on him."
        + " Does Bean, 51, take the dog home, or 52, ignore the dog.").listen("What choice do you pick?");
        this.emit(':responseReady');
      },
      
        //Choice 51
        'choiceFiftyOne': function() {
          this.response.speak("Bean starts to take the dog home and sees that the dog is happy to have company. Bean second guesses if he wants the dog."
          + " Does he, 53, take the dog to the shelter, or 54, take him home?").listen("What choice do you pick?");
          this.emit(':responseReady');
        },
        
          //Choice 53
          'choiceFiftyThree': function() {
            this.response.speak("Bean and the dog arrive at the shelter, but the dog is now upset and wimpering."
            + " Upon entering Bean sees that someone is looking for that exact dog."
            + " Bean has an odd feeling about the owner. Does Bean, 55, leave immediately, or 56, talk to the owner?").listen("What choice do you pick?");
            this.emit(':responseReady');
          },
          
            //Choice 55
            'choiceFiftyFive': function() {
              this.response.speak("Bean grabs the dog and rushes out before they are noticed by anyone."
              + " Bean takes the dog home after stopping to get him toys and food. Bean saved a dog and got himself a new friend.");
              this.emit(':responseReady');
            },
            
            //Choice 56
            'choiceFiftySix': function() {
              this.response.speak("Bean begins speaking to the owner and realizes how much they hate their dog."
              + " Bean quickly abandons the shelter while grabbing the dog and sets home to give the dog a better life.");
              this.emit(':responseReady');
            },
            
          
          //Choice 54
          'choiceFiftyFour': function() {
            this.response.speak("Bean takes the dog to the pet store and the dog starts to drag him around."
            + " The dog is torn between a ball and a frisbee. Bean is sure that the dog will love both."
            + " Does Bean, 57, get the ball, or 58, get the frisbee.").listen("What is your choice?");
            this.emit(':responseReady');
          },
          
            //Choice 57
            'choiceFiftySeven': function() {
              this.response.speak("Bean heads to the park with his new found friend and begins to play ball with him."
              + " He takes his dog home and feeds the dog and himself.");
              this.emit(':responseReady');
            },
            
            //Choice 58
            'choiceFiftyEight': function() {
              this.response.speak("Bean walks the dog home and heads to his backyard. Although it is small,"
              + " Bean is able to angle the frisbee so that it falls back down in his yard," 
              + " allowing his dog to run around in excitement before grabbing it and bringing it back.");
              this.emit(':responseReady');
            },
          
      //Choice 52
      'choiceFiftyTwo': function() {
        this.response.speak("Despite trying to avoid the dog, it is now whimpering and barking."
        + " Bean ends up following the dog and finds a robbery in progress."
        + " Does Bean, 59, intervene, or 60, grab the dog and run.").listen("What choice do you pick?");
        this.emit(':responseReady');
      },
      
        //Choice 59
        'choiceFiftyNine': function() {
          this.response.speak("Bean intervenes and knocks one of the robbers out while incapacitating the other."
          + " Bean calls for the police and they arrive and detain the men."
          + " Bean decides to take the dog home since he sees him as a sign of good luck.");
          this.emit(':responseReady');
        },
        
        //Choice 60
        'choiceSixty': function() {
          this.response.speak("Bean is now sprinting away from the scene. The criminals follow."
          + " Does Bean, 61, keep running, or 62, attack the robbers?").listen("What is your choice?");
          this.emit(':responseReady');
        },
        
          //Choice 61
          'choiceSixtyOne': function() {
            this.response.speak("Bean is now springing for his life,  the dog still following."
            + " He makes a series of turns and hears the robbers nearby. Does Bean, 63, hide, or 64, run away.").listen("What choice do you pick?");
            this.emit(':responseReady');
          },
          
            //Choice 63
            'choiceSixtyThree': function() {
              this.response.speak("Although it was difficult to hide the dog,"
              + " Bean successfully avoided being caught, but the robbers were still loose."
              + " Bean went home with his new friend and hopes to never hear or see them again.");
              this.emit(':responseReady');
            },
            
            //Choice 64
            'choiceSixtyFour': function() {
              this.response.speak("The robbers notice and follow. To Beans luck, an off duty police officer intervenes and arrests the two men."
              + " Bean is thankful for the officer and is able to go home knowing he is safe with his new friend.");
              this.emit(':responseReady');
            },
            
          //Choice 62
          'choiceSixtyTwo': function() {
            this.response.speak("Swiftly, Bean turns around and defeats his attackers with the help of his dog."
            + " Bean calls the cops and explains what happened. He gets to go home with his new dog who saved him in a fight.");
            this.emit(':responseReady');
          },
          
    //Choice 29
    'choiceTwentyNine': function() {
      this.response.speak("Bean leaves and quickly becomes the only witness to a car accident."
      + " Both are arguing over who caused the accident and an officer comes to ask Bean what happened."
      + " Does Bean, 65, side with the innocent, or 66, side with the guilty.").listen("What is your choice?");
      this.emit(':responseReady');
    },
      
      //Choice 65
      'choiceSixtyFive': function() {
        this.response.speak("The officer files the report and the right person is convicted. Bean decides to get lunch later on in the day."
        + " He is struck by a vehicle. Does Bean, 67, attempt to get up, or 68, stay down? ").listen("What choice do you pick?");
        this.emit(':responseReady');
      },
      
        //Choice 67
        'choiceSixtySeven': function() {
          this.response.speak("Bean is agonizing in pain and is helped to the side by a single witness."
          + " When the police arrive, the witness argues in favor of you and ultimately saves you from fines and trouble.");
          this.emit(':responseReady');
        },
        
        //Choice 68
        'choiceSixtyEight': function() {
          this.response.speak("The medics arrive and airlift you out to the nearest hospital."
          + " The report comes to you that a single witness has aruged in favor of you."
          + " A court date is set and all of your fines and fees are paid by the person who hit you.");
          this.emit(':responseReady');
        },
      
      //Choice 66
      'choiceSixtySix': function() {
        this.response.speak("Bean goes to a shopping mall later and is cut off and hits another vehicle."
        + " There is only one witness to the whole incident."
        + " Does Bean, 69, talk to the witness, or 70, not talk to the witness?").listen("What choice do you pick?");
        this.emit(':responseReady');
      },
        //Choice 69
        'choiceSixtyNine': function() {
          this.response.speak("Bean talks to the witness and quickly realizes that it is the person who he blamed the accident on."
          + " The cops arrive and the witness decides to blame the incident on Bean. Bean goes to court and faces jail for 30 days, with extensive fines.");
          this.emit(':responseReady');
        },
        
        //Choice 70
        'choiceSeventy': function() {
          this.response.speak("Bean waits for the cops and gives his report, sure that he will win."
          + " Instead, he hears back that he is the one at fault and that he must go to court and pay his fines."
          + " Bean looks at the witness and see that it is the one he wrongly accused."
          + " Bean suddenly realizes what he has done to him.");
          this.emit(':responseReady');
        }
  
  
  
};

function rollDice() {
  return Math.floor(Math.random()*6+1);
}
function fiftyFifty() {
  return Math.floor((Math.random()*2+1));
}
//Basic ending for the game
function basicGameEnding() {
  this.response.speak("Billy Bean took a step back to reflect on life and took things as they were."
  + "He did not get mad, he did not get sad, he just simply stayed glad.");
  this.emit(':responseReady');
}

//Bad war ending
function badWarEnding() {
  this.response.speak("Bean is returning to base being called a war hero for all the work he has down." 
  + " However, the man that Bean left behind made his way back to base and explains what Bean has done." 
  + " Bean is disgraced and ultimately kicked from service due to his behavior.");
  this.emit(':responseReady');
}

//good war ending
function goodWarEnding() {
  this.response.speak("You run through the lines carrying the soldier and return him to the front lines, putting your own life at risk." 
  + " You are considered a hero.");
  this.emit(':responseReady');
}

// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {
  // Include the AWS Alexa Library.
  const Alexa = require("alexa-sdk");

  // Create an instance of the Alexa library and pass it the requested command.
  var alexa = Alexa.handler(event, context);

  // Give our Alexa instance instructions for handling commands and execute the request.
  alexa.registerHandlers(handlers);
  alexa.execute();
};