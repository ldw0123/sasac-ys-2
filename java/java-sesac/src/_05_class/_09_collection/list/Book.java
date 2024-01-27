package _05_class._09_collection.list;

public class Book {
    private String title;
    private String author;

    public Book(String title, String author) {
        this.author = author;
        this.title = title;
    }

    @Override
    public String toString() {
        return "Book{" + "title= " + '\'' + title + '\'' + ", author= " + '\'' + author + '\'' + "}";
    }
}