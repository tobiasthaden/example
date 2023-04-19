import { usePage } from "@inertiajs/inertia-react";
import { Current, Link, Space } from "@/components/navigations/Pagination";

function createLeftItems({ onEachSide, currentPage }) {
    let leftItems = Array.from(
        { length: onEachSide },
        (x, i) => currentPage - i - 1
    ).reverse();

    leftItems = leftItems.filter((page) => page > 1);

    if (leftItems.length) {
        if (leftItems[0] === 3) {
            leftItems = [2, ...leftItems];
        }

        if (leftItems[0] > 3) {
            leftItems = ["leftspace", ...leftItems];
        }
    }

    return currentPage === 1 ? [] : [1, ...leftItems];
}

function createRightItems({ onEachSide, currentPage, lastPage }) {
    let rightItems = Array.from(
        { length: onEachSide },
        (x, i) => currentPage + i + 1
    );

    rightItems = rightItems.filter((page) => page <= lastPage);

    if (rightItems[rightItems.length - 1] < lastPage - 2) {
        rightItems = [...rightItems, "rightspace", lastPage];
    }

    if (rightItems[rightItems.length - 1] < lastPage - 1) {
        rightItems = [...rightItems, lastPage - 1, lastPage];
    }

    if (rightItems[rightItems.length - 1] < lastPage) {
        rightItems.push(lastPage);
    }

    return rightItems;
}

export function handlePaginations(args) {
    const leftItems = createLeftItems(args);
    const rightItems = createRightItems(args);

    const [uri] = (({ url }) => url.split("?"))(usePage());

    const { currentPage, name, query = {} } = args;

    return [...leftItems, currentPage, ...rightItems].map((page) => {
        if (page === currentPage) {
            return [Current, { page }];
        }

        if (["leftspace", "rightspace"].includes(page)) {
            return [Space, {}];
        }

        const queryParams = new URLSearchParams({ ...query, [name]: page });
        const href = uri + "?" + queryParams.toString();

        return [Link, { page, href }];
    });
}
