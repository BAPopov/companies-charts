interface Dataset {
    id: number;
    dataset_code: string;
    database_code: string;
    name: string;
    description: string;
    refreshed_at: string;
    newest_available_date: string;
    oldest_available_date: string;
    column_names: string[
    ];
    frequency: string;
    type: string;
    premium: boolean
    database_id: number
};

interface Metadata {
    query: string;
    per_page: number;
    current_page: number;
    prev_page: number | null,
    total_pages: number;
    total_count: number;
    next_page: number;
    current_first_item: number;
    current_last_item: number;
}

export interface DatabaseDataset {
    datasets: Dataset[]
    meta: Metadata
}

interface DatasetData {
    limit: number | null;
    transform: any;
    column_index: number;
    column_names: string[];
    start_date: string;
    end_date: string;
    frequency: string;
    data: [date: string, value: number][]
    collapse: any;
    order: string;
}

export interface DatabaseDatasetData {
    dataset_data: DatasetData
}
