using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class BookingsController : ControllerBase
{
    private readonly MongoDbService _mongoDbService;

    public BookingsController(MongoDbService mongoDbService)
    {
        _mongoDbService = mongoDbService;
    }

    [HttpGet]
    public async Task<IActionResult> Get() => Ok(await _mongoDbService.GetBookingsAsync());

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Booking booking)
    {
        await _mongoDbService.CreateBookingAsync(booking);
        return CreatedAtAction(nameof(Get), new { id = booking.Id }, booking);
    }
}
