var Letter = function(letr) {
// property to store the actual letter
  this.letter = letr;
// property/boolean if the letter can be shown
  this.appear = false;

  this.letterRender = function() {
    if(this.letter == ' '){
      this.appear = true;
      return '  ';
    }if(this.appear === false){ /*if it doesn't appear, it returns a ' _ '*/
      return ' _ ';
    } else{
      return this.letter;
    }

  };
};

// export to use in word.js
module.exports = Letter;
