export const paginate = (totalRows, pageNumber, pageSize) => {
    const startIndex = (pageNumber -1) * pageSize;
    const lastIndex = startIndex + pageSize;
    const p =totalRows.slice(startIndex, lastIndex)
    return p;
};