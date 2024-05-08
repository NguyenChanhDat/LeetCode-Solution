// The Bandle Championship Series (BCS) contains the Bandle citys most skilled E-sports teams clash in a series
// of intense matches to claim the ultimate title. The tournament follows a unique format in its direct elimination
// stage, where the top teams face off in a bracket-style competition. There are two teams in a match against
// each other, with the outcome determining who goes to the next round.
// This image describes how the matches are arranged:
// The match results are stored in an array because of the invention of the WW88 prediction system. This
// cutting-edge technology accurately forecasts the outcomes of each game in the BCS tournaments direct
// elimination stage.
// Its output is conveniently organized into an array format, providing a clear record of predicted results for
// analysis and comparison with actual outcomes. This innovative system revolutionizes the way tournaments
// are followed and analyzed, offering insights and excitement to fans and competitors alike.
// The array elements are the integer © or 1, where © denotes a win for the left team and 1 denotes a win for
// the right team.
// Your objective is to devise an algorithm to find the top teams after m rounds.
// Comment in your code the idea you used to solve the problem.
// Input Format
// ¢ The first line contains a single integer n which is the number of matches
// ¢ The second line contains matches which is list of n integers representing the outcomes of matches in the
// direct elimination stage of the BCS tournament.
// © The third line contains a single integer m
// Constraints
// © on = 24k -1
// Output Format
// ¢ An array that represents the indices of the top teams after m rounds
// Sample Input 1
// 7
// 0101010
// 3
// Sample Output 1
// 0

let matches = 7;
let matchResult = [1, 0, 1, 0, 0, 1, 1];
let round = 3;

function findWinner(matches, matchResult, round) {
  let checkTurn = 0;
  let teamQuantityAfterRound = 2 ** round;
  let teamWonAfterRound = [];
  for (let i = 0; i < 2 ** round; i++) {
    teamWonAfterRound.push(i);
  }
  console.log(' teamWonAfterRound ' + 0 + ' ' + teamWonAfterRound);
  for (let i = 0; i < round; i++) {
    for (let j = 0; j < teamQuantityAfterRound; j += 2) {
      if (matchResult[checkTurn] == 1) {
        teamWonAfterRound.push(teamWonAfterRound[j + 1]);
      } else {
        teamWonAfterRound.push(teamWonAfterRound[j]);
      }
      checkTurn++;
    }
    teamWonAfterRound.splice(0, teamQuantityAfterRound);
    console.log(' teamWonAfterRound ' + (i + 1) + ' ' + teamWonAfterRound);
    teamQuantityAfterRound /= 2;
  }
  return teamWonAfterRound;
}
console.log(findWinner(matches, matchResult, round));
