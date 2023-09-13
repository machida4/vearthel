import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBlogFields {
    title: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    body?: EntryFieldTypes.RichText;
}

export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;
export type TypeBlog<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBlogSkeleton, Modifiers, Locales>;
