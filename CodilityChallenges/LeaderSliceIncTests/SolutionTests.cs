using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace LeaderSliceInc.Tests
{
    [TestClass()]
    public class SolutionTests
    {
        int[] _testArray1 = new int[] { 2, 1, 3, 1, 2, 2, 3 };
        int[] _testArray2 = new int[] { 1, 2, 2, 1, 2 };

        [TestMethod()]
        public void FindLeaderIncrementing1InRange_NoLider()
        {
            Solution instance = new Solution();
            int result = instance.FindLeaderIncrementing1InRange(_testArray1, 0, 2);
            Assert.AreEqual(-1, result);
        }

        [TestMethod()]
        public void FindLeaderIncrementing1InRange_1Example()
        {
            Solution instance = new Solution();
            int result = instance.FindLeaderIncrementing1InRange(_testArray1, 1, 3);
            Assert.AreEqual(2, result);
        }

        [TestMethod()]
        public void FindLeaderIncrementing1InRange_2Example()
        {
            Solution instance = new Solution();
            int result = instance.FindLeaderIncrementing1InRange(_testArray1, 3, 5);
            Assert.AreEqual(3, result);
        }

        [TestMethod()]
        public void FindLeaderIncrementing1InRange_3Example()
        {
            Solution instance = new Solution();
            int result = instance.FindLeaderIncrementing1InRange(_testArray2, 0, 3);
            Assert.AreEqual(2, result);
        }

        [TestMethod()]
        public void FindLeaderIncrementing1InRange_4Example()
        {
            Solution instance = new Solution();
            int result = instance.FindLeaderIncrementing1InRange(_testArray2, 1, 4);
            Assert.AreEqual(3, result);
        }

        [TestMethod()]
        public void solution_1Example()
        {
            int[] expectedResult = new int[] { 2, 3 };
            Solution instance = new Solution();
            int[] result = instance.solution(3,5,_testArray1);
            CollectionAssert.AreEqual(expectedResult, result);
        }

        [TestMethod()]
        public void solution_2Example()
        {
            int[] expectedResult = new int[] { 2, 3 };
            Solution instance = new Solution();
            int[] result = instance.solution(4, 2, _testArray2);
            CollectionAssert.AreEqual(expectedResult, result);
        }
    }
}