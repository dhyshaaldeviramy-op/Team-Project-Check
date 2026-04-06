using Microsoft.EntityFrameworkCore;
using Team_Project_Check.Model;

namespace Team_Project_Check.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Expense> Expenses { get; set; }
    }
}
