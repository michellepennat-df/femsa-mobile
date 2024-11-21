type FilterFunction<T> = (item: T) => boolean;

export interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => string;
  filterItems?: FilterFunction<T>;
}

export type ListError = { errorType: "ListError"; message: string };

export const List = <T>({
  items,
  renderItem,
  filterItems,
}: ListProps<T>): string[] => {
  const filteredItems = filterItems ? items.filter(filterItems) : items;
  return filteredItems.map(renderItem);
};
