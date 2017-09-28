package ee.firma.proj.demo;

public class Date {
    private final Long id;
    private final String Content;

    public Date(Long id, String content) {
        this.id = id;
        Content = content;
    }

    public Long getId() {
        return id;
    }

    public String getContent() {
        return Content;
    }
}
