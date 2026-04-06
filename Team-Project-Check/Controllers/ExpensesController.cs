using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Team_Project_Check.Data;
using Team_Project_Check.Model;

namespace Team_Project_Check.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpensesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ExpensesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/expenses
        [HttpGet]
        public IActionResult GetExpenses()
        {
            return Ok(_context.Expenses.ToList());
        }

        // POST: api/expenses
        [HttpPost]
        public IActionResult AddExpense(Expense expense)
        {
            _context.Expenses.Add(expense);
            _context.SaveChanges();
            return Ok(expense);
        }

        // DELETE: api/expenses/5
        [HttpDelete("{id}")]
        public IActionResult DeleteExpense(int id)
        {
            var exp = _context.Expenses.Find(id);
            if (exp == null) return NotFound();

            _context.Expenses.Remove(exp);
            _context.SaveChanges();
            return Ok();
        }

        // GET: api/expenses/category/Food
        [HttpGet("category/{category}")]
        public IActionResult GetByCategory(string category)
        {
            var data = _context.Expenses
                .Where(x => x.Category == category)
                .ToList();

            return Ok(data);
        }

        // GET: api/expenses/total
        [HttpGet("total")]
        public IActionResult GetTotal()
        {
            var total = _context.Expenses.Sum(x => x.Amount);
            return Ok(total);
        }
    }
}
