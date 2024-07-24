using Microsoft.Extensions.Options;
using MongoDB.Driver;

public class MongoDbService
{
    private readonly IMongoCollection<Booking> _bookings;

    public MongoDbService(IOptions<DatabaseSettings> databaseSettings)
    {
        var mongoClient = new MongoClient(databaseSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(databaseSettings.Value.DatabaseName);
        _bookings = mongoDatabase.GetCollection<Booking>("Bookings");
    }

    public async Task<List<Booking>> GetBookingsAsync() => await _bookings.Find(_ => true).ToListAsync();

    public async Task<Booking> GetBookingByIdAsync(string id) => await _bookings.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateBookingAsync(Booking newBooking) 
    {
        // Insert the new booking into the database
        await _bookings.InsertOneAsync(newBooking);
    }
}
