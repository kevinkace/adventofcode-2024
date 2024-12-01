import { describe, expect, test } from "vitest";

import { splitToLists } from "../../utils/data-parsers";
import { getListDiffs, sortLists, sumList } from "../../utils/lists";

import example1 from "../data/example-1";
import part1 from "../data/01-1";


describe("day 01-1", () => {
    test("example", () => {
        let [listA, listB ] = splitToLists(example1)

        expect(listA).toEqual([3, 4, 2, 1, 3, 3]);

        [listA, listB] = sortLists([listA, listB]);


        expect(listA).toEqual([1, 2, 3, 3, 3, 4]);

        const diffs = getListDiffs([listA, listB]);

        expect(diffs).toEqual([2, 1, 0, 1, 2, 5]);

        expect(sumList(diffs)).toEqual(11);
    });

    test("part 1", () => {
        const lists = sortLists(splitToLists(part1));
        const diffs = getListDiffs(lists);
        const sum = sumList(diffs);

        expect(sum).toEqual(2086478);
    })
});
