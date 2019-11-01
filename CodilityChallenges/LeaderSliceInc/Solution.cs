using System.Collections.Generic;
using System.Linq;

namespace LeaderSliceInc
{
    public class Solution
    {
        /* 
         * https://app.codility.com/programmers/task/leader_slice_inc/
         * 
         * 100% correctness 0% performance: https://app.codility.com/demo/results/training3A6PV6-N3K/
         * 
         * Integers K, M and a non-empty array A consisting of N integers, not bigger than M, are given.

            The leader of the array is a value that occurs in more than half of the elements of the array, and the segment of the array is a sequence of consecutive elements of the array.

            You can modify A by choosing exactly one segment of length K and increasing by 1 every element within that segment.

            The goal is to find all of the numbers that may become a leader after performing exactly one array modification as described above.

            Write a function:

            class Solution { public int[] solution(int K, int M, int[] A); }

            that, given integers K and M and an array A consisting of N integers, returns an array of all numbers that can become a leader, after increasing by 1 every element of exactly one segment of A of length K. The returned array should be sorted in ascending order, and if there is no number that can become a leader, you should return an empty array. Moreover, if there are multiple ways of choosing a segment to turn some number into a leader, then this particular number should appear in an output array only once.

            For example, given integers K = 3, M = 5 and the following array A:

              A[0] = 2
              A[1] = 1
              A[2] = 3
              A[3] = 1
              A[4] = 2
              A[5] = 2
              A[6] = 3
            the function should return [2, 3]. If we choose segment A[1], A[2], A[3] then we get the following array A:

              A[0] = 2
              A[1] = 2
              A[2] = 4
              A[3] = 2
              A[4] = 2
              A[5] = 2
              A[6] = 3
            and 2 is the leader of this array. If we choose A[3], A[4], A[5] then A will appear as follows:

              A[0] = 2
              A[1] = 1
              A[2] = 3
              A[3] = 2
              A[4] = 3
              A[5] = 3
              A[6] = 3
            and 3 will be the leader.

            And, for example, given integers K = 4, M = 2 and the following array:

              A[0] = 1
              A[1] = 2
              A[2] = 2
              A[3] = 1
              A[4] = 2
            the function should return [2, 3], because choosing a segment A[0], A[1], A[2], A[3] and A[1], A[2], A[3], A[4] turns 2 and 3 into the leaders, respectively.

            Write an efficient algorithm for the following assumptions:

            N and M are integers within the range [1..100,000];
            K is an integer within the range [1..N];
            each element of array A is an integer within the range [1..M].

         */
        public int[] solution(int K, int M, int[] A)
        {
            SortedList<int, int> result = new SortedList<int, int>(A.Length);

            for (int startIndex = 0, endIndex = K - 1; endIndex < A.Length; startIndex++, endIndex++)
            {
                int leader = FindLeaderIncrementing1InRange(A, startIndex, endIndex);
                if(leader != -1 && !result.ContainsKey(leader))
                {
                    result.Add(leader,0);
                }
            }

            return result.Keys.ToArray();
        }

        public int FindLeaderIncrementing1InRange(int[] array, int startIndex, int endIndex)
        {
            int length = array.Length;
            int size = 0;
            int value = -1;

            for(int index = 0; index < length; index++)
            {
                int number = array[index];
                if(index >= startIndex && index <= endIndex)
                {
                    number++;
                }

                if (size == 0)
                {
                    size++;
                    value = number;
                }
                else if(value != number)
                {
                    size--;
                }
                else
                {
                    size++;
                }
            }

            int candidate = -1;
            if (size > 0)
            {
                candidate = value;
            }

            int leader = -1;
            int count = 0;

            for (int index = 0; index < length; index++)
            {
                int number = array[index];
                if (index >= startIndex && index <= endIndex)
                {
                    number++;
                }

                if (number == candidate)
                {
                    count++;
                }                    
            }

            if (count > length / 2)
            {
                leader = candidate;
            }

            return leader;

        }
    }
}
