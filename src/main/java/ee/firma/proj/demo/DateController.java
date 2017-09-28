package ee.firma.proj.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.concurrent.atomic.AtomicLong;


@RestController
public class DateController {

    private static final String template = "You'r date is %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/date")
    public Date date(@RequestParam(value="date", defaultValue="28092017") String date) {
        return new Date(counter.incrementAndGet(),
                String.format(template, date));
    }
}
