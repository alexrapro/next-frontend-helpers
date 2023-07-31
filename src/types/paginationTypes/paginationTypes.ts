import {SearchHitsMetadata, SearchRequest, SearchSort} from "@opensearch-project/opensearch/api/types";

namespace IPagination {
    export interface config {
        defaultSize?: number
        defaultSort?: SearchSort
    }

    export interface root {
        page: number
        size: number
        sort?: SearchSort
    }

    export interface query extends root {
        handleCheckTotal: <T>(hits?: SearchHitsMetadata<T>) => void
    }

    export interface setPagination {
        from: number;
        size: number;
        sort?: SearchSort
    }

    export interface state extends root {
        setPagination?: React.Dispatch<React.SetStateAction<setPagination>>
    }
}


export default IPagination