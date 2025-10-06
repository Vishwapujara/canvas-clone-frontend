// import Link from "next/link";
// import Image from "next/image";
// import KambazNavigation from "../Navigation";
// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <div>
//         <table>
//           <tbody>
//             <tr>
//               <td valign="top" width="180">
//                 <KambazNavigation />
//               </td>
//               <td valign="top" width="100%">
//                 <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//                 <h2 id="wd-dashboard-published">Published Courses</h2> <hr />
//                 <div id="wd-dashboard-courses">
//                   <div className="wd-dashboard-course1">
//                     <Link href="/Courses/0123" className="wd-dashboard-course-link">
//                       <Image alt="course 0123" src="data:image/png;base64,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" width={200} height={150} />
//                       <div>
//                         <h5> CS1234 React JS </h5>
//                         <p className="wd-dashboard-course-title">
//                           Full Stack software developer
//                         </p>
//                         <button> Go </button>
//                       </div>
//                     </Link>
//                   </div>
//                   <br /><br />
//                   <div className="wd-dashboard-course2">
//                     <Link href="/Courses/4567" className="wd-dashboard-course-link">
//                       <Image alt="course 4567" src="data:image/jpeg;base64,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" width={200} height={150} />
//                       <div>
//                         <h5> CS5678 HTML and CSS</h5>
//                         <p className="wd-dashboard-course-title">
//                           Frontend web developer
//                         </p>
//                         <button> Go </button>
//                       </div>
//                     </Link>
//                   </div>
//                   <br /> <br />
//                   <div className="wd-dashboard-course3">
//                     <Link href="/Courses/8910" className="wd-dashboard-course-link">
//                       <Image alt="course 8910" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEhUSEhIVFRURFRcVFRUVFxUXGBcVFhUXFxYXFRcaHSggGBomGxUWITEhJSkrMDIuGB8zPTMsNygtLisBCgoKDg0OGhAQGy8lHyYtLTIuKy0tLS0vLS0tLS0tLS0tLS8tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCBAcDAf/EAEQQAAEDAgMEBgUICgEFAQAAAAEAAgMEEQUSIQYxQWEHEyJRcYE0kaGxwjJCUnJzssHRFCMzQ0RigoOSohYkdKPD8BX/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAgEG/8QANBEBAAIBAgMGAwcEAwEAAAAAAAECAwQREiExBTIzQVFxE4HwFCJCYZGhwSRSsdEj4fEV/9oADAMBAAIRAxEAPwDr6AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDB0oDmtPz728hc+z3LibxForPnv+zqKTNZt6fyzXbkQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBF4hL/ANRAwbwXOPIFpH5rN1WX+qw46/nM+22y9p6f0+W89On77pRaSiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDXr6xkLM7vIcXHuCr6nU00+Pjv8AKPOU2DBbNfhr/wCIjZ+N8sj6l/G7W+dr25AaetZfZlb5sttVf2j69Ijl+rQ11q4sdcFPefr35p9bjJEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEGniWIsgbd2rj8lo3n8hzVTV6zHpq726+ULGm0189to6ecq9TU81bJnebNG88APosHesHFizdo5eO8/dj62hrZMmPR4+GvWfreVnvHCwahrGiwv7uZX0m+PBSI6RHJi7Xy39ZlnE8u1sQOF9CfLh5rql+Lnty/P/Ty1eHluzXbgQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEGji+JNgbfe52jR+J5BUtdrI01N+tp6R/K1pdNOe35R1V/DaCSqeXvcct+07i4/Rb3fgsHSaTJrck5Ms8vOfX8oa2o1GPS0ilI5+n8yn6+sjpYxYDuYwce/wAu8rd1OoxaLDyj2j6/dk4MN9TknefeXlhdK99p5jd7tWDhG07rDvUekwXybZ8/O09I8qwk1OWtN8OLlHnPqlFpKIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICCnV5M9SW97+rHIA2/Mr5DU2tqtbwfnt+k/+vosERg03F+W63QxNY0NaLBosF9Zjx1x0ilY5Q+fveb2m1usqni03WVNj8lr2sA5Ai/rN18trss5dbwz0iYj5cm/pcfw9NvHWYmVvK+sfPCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICCqyx9TWtJ3OkDgeT9PeSvmL0+B2jEz0md/1/7btLfF0cxHlG36f9LUvp2EqG0dKWSl3zZO0Dz+cPXr5r5PtbTzj1E3jpbnHu+h7PzRfFw+ccvksODVvXRAn5Tey/xA3+Y1W/oNV9owxbzjlPuyNZg+DlmI6Tzj2byuqogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDRxbDmzttezm6td3HuPI/gqet0ldTTbpaOkrOl1M4L79YnrH15vTD6gvbleLSM0eD7HDvabb13pcs3rw370cpj+faXOoxxW3FXuz0/17wxxekEsTm8QMzfED/4ea41+njPgtXzjnHu60macWWJj2n2lCbJl2d9vk5Bfxvp8Sxuw+L4ltum3778ml2rw8FfXdZ19KxBAQEBBE7WzPjo53scWubHcOBsQczdx4b1Jije8RKDUzNcVphQthMYqpa2Nkk8j2kPu1z3EGzCRcFXNRjrWm8QytDnyXzRFp3dTWe3BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEEXje0FLR2659nOFwxozOI77cBzKkpitfohzajHij78scLxSWqjEsUQZG++V0rrucASLhjN2o4uXl6cM7T1MeW2SsWrHL80ozNbtEE8hYeq5XCbn5hYCQbajceOu8eHJczWJmJnq9i0xG0MajNlIaNSLC50udLnw3+S8yxaaTw9f8AbrHtFomzxw2hbAwMGp3ud3nv8OSh0ulrpsfBX5z6yk1GotnvxT8vZtWVlAxe24IBIvxFrjwuCEJVPaPE67Di2XO2ogc7K4Pa1r2ngMzABrY2NuCsY6UycukqOoy5cG1usLLhtdHURMmjPZkb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" width={200} height={150} />
//                       <div>
//                         <h5> CS8910 Java </h5>
//                         <p className="wd-dashboard-course-title">
//                           Java programming for beginners
//                         </p>
//                         <button> Go </button>
//                       </div>
//                     </Link>
//                   </div>
//                   <br /><br />
//                   <div className="wd-dashboard-course4">
//                     <Link href="/Courses/1112" className="wd-dashboard-course-link">
//                       <Image alt="course 1112" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhMTExIWFhUVFRgYFhcYGBYYGRsXGBIYGxYXGhgYHSgiGBolHRgYITEhJikrLy4uGB8zODMtNygtLisBCgoKDg0OGxAQGi0lICUtLS0vListMC0tLS0tLy04LS0tLS0yLS0tLS0tLTYtLS0tLy0tLS0tNS0tLS0tLy0tLf/AABEIALUBFgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgEGB//EAE0QAAICAQMBBQUCCAkJCAMAAAECAAMRBBIhMQUTIkFRMmFxgZFCoRQjM1JicpKxBhVTgpTB0dLwQ1Rzk6KkssLjY3Sjs7TT1PEkJTT/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAC0RAQEAAgAEBAQFBQAAAAAAAAABAhESITFBA1Gx8GGBkdEiMnGh4SNCUsHC/9oADAMBAAIRAxEAPwD8oMQYnoeciIgIiICIiAiIgIk66Rvh9fpwDz7vrIWXBwf8fSXSTKXo8iJZ0ulBBdztrBwSBlmbGdiA9WxjJPCg5PkDC3SCqpnIVVLMeiqCxPwA5MtHQbfyltSHOCNxsb5ioNg+5iJ4+rZx3VSlEbju0yzP19tgN1p93T0USQ9kWLxY1VXussUN/q13OPmsrNy87r1RtRR/LufhTx99oP3T06Wo426hc/ppYn3qHH1Ig6WoddVV8k1JH17mer2du/J30OfJRYUY/AXqmYTfxv0/hFfobFXftyg+2hV0+bISFPuODK8ssl2nsGQ9T446qSPcftL9QZKrV3cNtqs8mGFrc+jqOKj+kuF9QOWhrfdRidW1MrFWBVlOCD1BHlNDsnsvvQXYkIDtAXG5mxnaCeF4I5PmwAB5xjPKYzdbk30ZsTdu7L0443WKR1YujeQOQorG7GeQWUY5z1xkazTmt2RsZU9R0IIyCPcQQfnM4eLjnyi5Y2IYiJ0ZIiICIiAiIgIiICIiAMQYgIiICIiAiIgJ3ScMD6H7/L5ZxOIhLNtkL148PH3eRHqMfd8JQ1/X5n6YU/1nn1JkSalwMBv3H98jJz1m7luOOHhXHLdS6PT944XO1cFnbGdqKMs2PPgcDzOB5yfxaixUQBFAIRSfDXWMszMfcNzs3mcn0E5Q7aGPnbZs6fYrCu4+bPUf5k70jbaNQ3mxqqB9zl3f6ikD4MZl0t7/ACdXdoBAU0+UToz9LLPezdVX0rHHrk8zns7s3eCzYReNhZ66wxFyK+N5G4BS5yPNflNGnulRdyIAEQklAf8AIaYsScEkl7/SaNXdvfpFz4HRgoVnrQt3CmsPswwr3nnGCMn3zPiZTDG5XtGcbbZjj37s6jRCs+Fiykgt3VqFuLrlVM1t4dymojOAScZBIEqdoXbqVI3bW7s+Ng7flNWOX2jPQcTfChdVqEQMQiJ4c2WgP3DM4rDMGZN4yMkE7R7pnapUrRRZVtQEBd2nvAyC7AZOp59tzj3n04YZceEynebZy/DncbzqhW1tNVZYK9FuSKnyV4OCwHVD6Mhz0z6GDXaVQq21EmpjtwcbkfGTW2OvHIbjcM8AggWr9te6y3be1ynuyOF29BZ08JGNorABXBHhwMwdlcrqEPsmhmP61bKyH458P88jzmmpf7vfuPFPfV7T+UqXKH8+pRlkPqUHiX9EMPJZzodeawVKh0JyVOQc8Z2sOmQACCCCByOmK2nvatldfaQhh6ZBzg+71kvaFKpYwT2Dhk/UdQ6fPawHymcsZlNV0xvDeTWXt5DktWwPkAQwPXGWONp5xnDDGMAYO7I1upNtjOQBuxwOgAUKo9+AAMyCdLWx6KTjrgEzGHg44XeMbyztnNzE7aphyVYD3gicTozLsiIgIiICIiAiIgIiIAxBiAiIgIiIHhM+i1lNGlUVuEuL8F1GWVkfx87gQOi7AQSNxLA4Erfwf0z+OxXCYR0VssCHao7cbASPjNjXrZclqDu0DLkVq1hDWd6HdzlFAO0H+3meLx/F/qTHt39/Dr6u2GPLb5/tHQoqLbVYrI5ICnfvVlA3g5XbjkY8WSGHHBmfPBPZ68cbJq3blbsiSW0FRz7uOeMjPmJHNMy76Lur/I6f4Wn5m0j9yiNON2nvHmjVW4/RXvK3PwBtSeXHdp6j+ZZYh/nBXT6/jP2TINLqWrYOuMjIwRlSCMMrD7SkEgj3ys63Pn/tuNWRbVU6hNtaFjnJfdTVU6EZx7SYP6mRz1h7F1bsoVq1cLtVSS4OS4JXhgOELtnGQE5OFGKj0U2812Cs+ddxOBgdEuwQV6AB9pGOp6yzaljIqZ09a4IZxqKMMM5xhXJAJ5IUEsQM9ABXPU1q/ZZ7T1lQUIFK96mcp4tym1gANz4yQg+yTyfIkStotFqO83fgtvdNhXTu2VTWMYUFsZIABDZByM5zzK764VDZpmI48dwBV3J6hT7SVjoAME4yfQVK9N3mXcgKuN9j84z0HqzHBwo9D0AJEWY6n3admk2d4jtXXUSSqWWK7qeiuqUl2DeRB4I4JOAwiFZasppqrGRiO8tZfb2nIXjK1oDzjJJIBJ4AHfdpT1AqPUb1FuoPmCKjhKR+sQ3oWlbUa5GOTWbSDw19j2HHuCFAPgd0pN3379VfUaVk9rb8nrY/MKxI+cl1xJTTt604/YvtUf7IUfKeHtBs5CUr8KKT97IT98j1OqezG8g7RgYVVAGSeigDqSZG9ZXW0Mluu3Ace9ve3TP0A+ZMigCRqydSWNKgwzEA4xgHpz5mV53VaV6YOeoPQyxMpbOSxagKscKCuPZ6YJxgiVJaTUg5UqoU+mRz5En/AB5dekr2AAkA5EtZw3OVcxETLoREQEREBERAGIMQEREBERA7ruZfZZlz6Ej907OqsPBsf9pv7ZDBk4Z5GyXa2q2rgHvPXOOfiePh8unMpRNS6Zyx4k96gAeEj459Oc54Jz6ASCdtYSMH3fPAwM+vE70en7xsZ2qAWduu1B7TY8zyAB5kqPOKTlOafTM1dbPlcOwUIyI4cryWw44CbsbvV8fnY1E1elOnVnSkWguGArJJ8SlNqIyjG3cMkqM+fGJi6zUb2yBtUDai/moM4GfM8kk+bMx85AY2zcOLnV3th6+8Za6hWELKcM7FiGxuO4nHToPXz6yGrTZG9jsTnxEZLEeSL9s/QDzIkoqN3iAxYXVW8gxcnD/onIO7y8/US12p2aVrVlbcKgK3yrLybHIKlvaXL4yP7cDcmozqqe8cIn2mwu49MnqxA6Ack48jNis4Na1cEgtUW6VVYJbUMP5Vwpf9FQuOdu2h2PVvdl8ymwH0NtiU5+lplrT3h7NU4zynhx5INTSAB7hWAPgDETPndJ1eutgtaZYkHJVHsYufCzvZlatxIIC+vJOQxk1GoS5z3lIG8+FQqDqNwWrUVgbm2spAYEEY4JInFABexd+0tqCGLEhQxFndZGAGQruOC2PCowATmO8A0sy7xg7NvAZbUJ7vCphQM2DOABkrjLZJrGptl6/S922AdykbkbpuUkjJHkQQVI8ipHPWR1IDjPmT9AMn94mp2/0r9O91G39TNW3Hu3d598yg3HvBPUA9QPX4ffI6S24vXrALc9Onv58sTs1AEYOSQce444/s+c7rsTaN2M/qjpz7pEr8544yRwB8Og+EvI51FE6qrLHAKg4+06IP2nIH3y32toO5crlSPDjFlTtygJyEYkDJPJA8pz45MuHfN11dbUok1FYPJ8yQMnA4AJz09R5yY0jzC/U/+5N6c7nJdKcSa5B1HkQODkcg4PU46HjPpIZGpdkREKREQEREAYgxAREQEREDqsjzBPwOP6jO9UwLNgfaPOc558uJFEu04eeyIml2do02G1wGGSoUlwBt2MzOycr4SwUcktjgjMxnnMZutSbZsuaSxDW9bMU3MjbgCw8AfwsAc4y2cjPI6HgizrNLU1RsrG0IP0iHy6qoJdsi32iQF2kDIxMqTDOZTcTLHss6jR7UVxYjKzFRt7wHKgZ4sRSRyBkZGeJWml2a4dTU1aWMozSrMyEsbV3IGVlJyGdgufa6ckg0r70bGytUx12s7A/tsSPrOjONu9JtLYVrsZTgq9RB9CC5HWXO2Na5RF2qq2qrsVB8TZORkk8A4OOvIPmJRp/JW/rV/wDPNfXf/wAa7vLughP+iVjj19p/vhi/m+ar/B3hwfW7TIPi2pV/3VH6TN0OoNbK4AOAQVPRlZSrKfcVJHzmrpR3I59qrNtnHS0qU01X6ylmcjyy4+yZk00M3sqTj0HT0/d90LNW3yfQixLCpocoQqr+VVbcrz+MV8LcAeBs8sA46To4rut3nGQmqU7Q2HXK2FUB27izWEAnAC9RjI+f/A7PzG+kv6FDhAyMe7s2su0k9zehD4A5wNr/ADslYuGu6p2nrO9sLBQijhEHRVyTj3nJJJ9WPwlWdW1FGZG9pWKn4qcH7xNHsKqlrE3sN3eKNjqTWyEYbled/PAIxkDnmc88uGWu+OPSRmRLGt0NlJCuCMgEMVZQwKg5G4A/aGR5GV5ZZZuFmid33M7FmOScZPA6AAdPcBOJItWRn3Mf2ZdFuntdoCkYJOQeuAMA+nOefuE6/CPcf2mkES7Z4Y7ssz5YGc+ZyfUk9ZxESLJoiIhSIiAiIgDEGICIiAiIgIiWtLpwfEeR6e8Hz93zlk2zllMZuqs0ezdcqr3b8LliGALEMyqviTcFdMAjBBI3HGJ7quz8HHAI6+mOPjzzM0zPieHuap4fizLni1NX2imwpSCN4KtuXaVTKkIu1yDllYliMncB5TLiJMMJjNRu3b1GIII6ggj4g8T6LXao3vrEswxqa4o32lCGxgM+mEC44GCT1AI+cl5O2NQP8vZ82LcenizxNyuWeO+ccaesFdvfVjeVJUd478ZwNqIeeTwSJfFJqCklq8ezZeMWDoD3OmBJU4CjeT5DBTrKL9q6g8d/Zj0Dso+ikCeaDUKM12H8VYct5lG+zcv6Q8/zlyPTAsye2MbfxdSEImWAJGSTgGyxuBuOQPQZwOpJ1F0WM7V0204IFhuZuBxuAJXdyeV4644lPS0d0bVsVWYMEas2JWpGd24M48Qyq4x5HPQybfV/mtX9JplYyvae/wB0/wCCN+Zov2bZFWANQKyq4srCEAeAk8p3Ysz4S6oOfPd0nO+r/Nav6TTKWuf8ZX3YAIVdqKyvsbvGIUMnDEnxevjx5RTGbdds8utg5FiAkjaRuXwNyrMMkru6n25Qm/f2aGe+ncqFH72vzXZao3AkH2Qe6G4BvPjEwrKypKsMMpII9CDgj6yV0wylmmt2a6XI1LJ4tu5WRXZj3OndUAXeBuAwOmGGc4ODM3V0qjFVsWwYBDLnByM+fnI0cg5BIPqCQeRg8j3cTmcscOHK2Xl5Oty3HVaZOP8AHSWwCEK4JHX5hcj946fmyDTXBc5zzjkdeP8A7+4SU6hefE/J9Bxz+t/jJnaOGe7UF9W3/H9kjlnUagEYGT0648s9OT6ytJW8d65kREjRERAREQEREAYgxAREQEREBJKLNuT7iMEZzI4hLNp9RdkADGOpwCOfn8pBEkFJ27h/X64z6dZeqSTGI4lh6ASNoYIQDubHHqc9OsiuUA8Hy9c+Z88Dyx9Y0TKV3pEBbnoATj4SaxQysdgXb0ONvn5j/Hl75VRyDkHmdPeSMdB6CWXkzljbltHEZk1+ldApYbdwyoJG7HkxXqFPkSOccZmXTa++q2rVZ4s2UbCUfY+aryqkNg/YrQHjmRfxmfz9T/Sf+nLenYb6ip0wp/Fbg/4KH9le93d4N5bO/n4Y4xOCLv5XRfL8Bx8srnE04zXuq/8AGZ/P1P8ASf8ApyO3tAk1sN5Nb7wbH7w5yhAztXwgpnH6R9Zbxd/K6P8A3D+7GLv5XR/7h/dg3Ph9Vpu0dOcMXIAAGwJ+MAU5VA+zBUMAcl+SMkfYmNZqBZa1likh2ZiqMFOWJOAzK3AJ9Jfxd/K6P/cP7sshx+J7x9IVGe/2/ghym88DuxvL7c42eq+YMaSax6ev8Of4ib/MtV/r6v8A48x72qOO7SxfXfYr/TbWmPvldtPtO1k2sOoK4IOPMEcSaiku21epz19wz/VI3Jw87fX71HE2dd2dtqAXHg3MSRgkcHHHxmNLljceqeF4uPiTcIiJl1IiICIiAiIgIiIAxBiAiIgIiICIiAndagg5bGOQOTk+70M4iEq/qbi4RSAueQcjr5bvkwOfLMp3VlWKkgkHHHInBMS27Zww4eUS6e8ochUORjx1pYPkHBAPvmlVeSAd+hBOPCdMNwJ8jt0xGfgTMiaFJ7hFs/ytgzX/ANmh/wAr+u3O30GW81iVM8ZV06Kugtm/TnUBjwRcUr94UUkNZ7iAEI6E+zjanO9suLCTkuC53Ejk5cBj8x5RpdObGVFxluBn4Zi6krgHHKqwx6MoZfuIja446vO80cnr0VrAFarCD0IRyD8CBzIJraT+EFtaKipWQowCTfn57bQPoBEXK5SfhjJl/s7se25S42pWvtW2NsrGPf1J+AM87H0PfWYPsgruwcElm2pWD5FmOM+QDN9maXaWuWwCxgGorY16akZRHZQN1rAHIrAI4Bz4lXI8RKRjPO71izrdLpwcDVF8dSlBI/23U49+JyOzw/5Cxbv0QGWzgc4Rvb+CFjNvsN7bsFrrkUFgEqJqrACggAV4APPpnjrM27WBrGr1BLBXKrfj8cm1iFcsMGxR1KnJ67SDLyZmWW9eXvyivprRaFqsIBAxTYfs+lbn+SPQH7BOfZyJU8SMRyrKSD5EEcMD6HqJodrUsQ7uALa37u/HRiQSl3TndtYE+eFb7Zk+s7L1FlaW/g92/wDJ2fi7MttUd3ZjGTlfCT615+1I1Mp36X3+7KbUueC7EHr4j59ZFLn8Uan/ADa//U2/3ZFqNHbXjvKrEz03oyZ+G4DMXbeNx6RBERI0REQEREBERAREQBiDEBERAREQEREBERAREQLPZ1Cs+X/JopezBwSq48IPkWYqgPq4nrFrmssd0U5BYncBzwAoUHAHAA8gBO/Z03vut/2KVHHzez/wxK+mtsBxWzgtxhCwJ9BheTKx13X0Gm0iVFGBrG1Fc2sjsuSqcljavJZzhQvQe4mcans0WhugevagKo4BRErC8LZZuUq6EMMcDnOeLShmRDYmQ4Wspa11e6wIpyQKicgoxDhujEHqRM3tbVLsdOCzlWAUswVSlZUDNSAKFSsBRnqckY5rhjxWqmq7MatSxboM4K2Lkb0U4LKAcF1+soS3p3HdWLjorN+1dpQP+A/USmQfLr5fHykejHfdt6AlO4Qe0yXXnp7R09q0D5Bdw/0spdoexpgPZ7jI9Nx1N+755H3CXA2O0EC8BNTVUP1a3SofIqv3zyymtkWvdtRi1mlsY4XDY7yixvskEDk9GGT4XzK5S6svvv8Af6POwO1EpOHXg7juGSeVAxj04+MzNVYGd2HRnZhn0LE/1zvU6K2s4srdT5ZBwfgejD3gkSxT2dtAs1ANdXXnwvYB9mtTyc9N/sjrnyMb/DLxea3qvZf36HTlv1hbpxXn37Nv1lTsUKzWVOGK2VtwuAd1Y71cZBGfAV/nmXe0wwpsd/DbddXvQfYrFdhqr9xwAcdQBXnnMz+xXxqKD/21YPwNgDfcTL3Zx/JXWNH+bqP2qf7k9H4J+bqP2qf7koFNvhPUcfTiJNunD8XVu3J252543YJx78DGZzESNEREBERAREQEREAYgxAREQEREBERAREQESXTaZ7G2opZsFsD0UEsfkATPK6GZXcKSqbd58hvbC5+J4g2m174r0wJwO6Yj4nVXg/cFlNb1BzlfntI+YPBmjTfqaqlZHtSpmYKVchSwxuwAevSaVNPaboLFOoKMu4HvOq4zkDdk8e6Vz3ry+rEr7UK42tWuGDeFKl5CsATtUZ4ZvrONVru8bc7KTgDyHAGB0mh/GOs21t3122wkIe8bxFWAbHPkSB853drNcveFrbh3TBbPxjeFiSADz6qenpB8p9f4ZlGuCBwCh3rtOcE4yDx6cgfQHqARa7IoLOlh4qrdWsf7IVWBK582OMBRySRLT6rXB3rNtwetSzr3jZVVXcSfF02nM5v0GttrFzix6wpYO7hgFGckBmyBweg8oLf0m/ig7KsLaqhj1bUVk/E3KTK+h1jIu3AZGxuRhlSQODwQVYfnKQffPNPpnsO1FLHDNgY6KpLHn0AJneg0Nt7FKkLsFLEAgeEEAnkjzI+sNWTuuabX1qCEbVUjPs1X+H5cKR88/GRHtBVYtWh7zP5W1+9f3FRtCqfeQxHkRIruzrltFLVkWMVATIJJY+EZBxz8Z5puz7bLDUiFrF3ZXjI2nDdTjgxus8OPVLknTOSSSdShJPJJNVuST5mV9C4W2ticAWISfQBwSZav7G1KNXW1TBrSRWuVO4jAOMHGRuH1lNaGKO+07UKhz6Fs7QfPnafpCzWrze6pgXcjoXYj4FiRIpZu7PtQ2BkINW3vOnh3EBc4PnkfWe09nXO1arWSbQTWBjxBSwJHPAG1uvpI1uaVYl3X9k30BTbUUDHAJKkEgZxlSeZSgll6EREKREQEREBERAGIMQEREBERAREQEREDf8A4D3KmrV29la7mb4ClifuEv6js38H7P1iEcnUKB693VqURD78neZifweuVLXLsFBovXJOBlqHCjnzJIHzl7X9t9/p79xAcUaStQSAXdLt1rAefJJPuljjlLx/T1S65f8A9fXX/JLRf/SLNQCPo1X0lfWa00XaK4KGKaKnAP6VTqf+LPyl7Xdp0M2rpC0hPwYJXaGbLtStRrXJbYclCBgAnj1OeaKaHs0lll+n7uvS1pZW1i79y0uMbOpO4r9IZl5c57sQ6bs82abs8iypNll/FlioT+PT2Q3tdPL1E67c9jtf/vVf/mXzOa9e47PG4bke4uMjK7r6yC3pkAn5S32xq62XtMK6nvNQjV4IO9RZcSy/nDDDkeohdXfz/wCm/wBu0hrr7lHTR6imz9ddMHQ/NHA/mGYHbGgL6fR2ZrwmmOQzor8X2nwoTub5CXre2Kxf2iu9TXdp27ttwI71dLtUA9MkM6/EATP7RpW2jTMt9ANWnKsjWqLNwtsbATqSQRge+Ewlmvl6If4J/l2/0Go/9O89/gtSXOqQFQW0doG4hV5erqzcAe8zj+C9qLed7qgNVy7nIVctSyrknpyRJ+yNOtb6itr9P+M0liq4tU17mdMKX8m8JOPSI3n1vyRdiac06kk7T3Fdtp2Mrr4KGZcMpIPiK/OaNiAazXkDh9JqLB8LaFs/55S7OKaYaos1NzdyqKofcji21d4BQgnaqknB4zLj6+pm7zdWm/syyooG9mxVZFr8RJyVCYBJJEM5bt38FnQ6XuLuzNOzJ3leotLqjK20WGkpnb0yATKfbNY/B9dYowl50tyD07zvy6/KwOvynuh1tZv7OvaxQy7a7ssPD3LYSxs84ZCOf0DKg7RVuzbtOSN62qUHmUYsSB64Ysf58El3v9PV9EpT8L7TWz2LFoqJ9O9NdYb+aWB+UpaCpku0CMMMum1SsPRlbVhh9RKnbesqdu0ttikWDT93hh4ttlRbbjrgA9PQy4e2ardTorWdF/8AxrVtJOAtrJcG3Z9nczZ58mEMcN4ff+L5+yu5NJUrVbantNqP+cWqC4A9MLmZ02dbUtWjSrvqbH/CWsIqcOApoVckjpyDMaR6MSIiGiIiAiIgIiIAxEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA/9k=" width={200} height={150} />
//                       <div>
//                         <h5> CS1112 Machine Learning </h5>
//                         <p className="wd-dashboard-course-title">
//                           Machine Learning for beginners
//                         </p>
//                         <button> Go </button>
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import { Card, CardBody, CardTitle, CardText, CardImg, Button, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="mb-5">
        <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
          {/* Course 1 - React JS */}
          <Col className="wd-dashboard-course">
            <Card className="h-100">
              <Link href="/Courses/0123" className="text-decoration-none text-dark">
                <CardImg 
                  variant="top" 
                  src="https://via.placeholder.com/300x160/4A90E2/FFFFFF?text=React+JS" 
                  style={{ height: "160px", objectFit: "cover" }} 
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    CS1234 React JS
                  </CardTitle>
                  <CardText className="wd-dashboard-course-title">
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 2 - HTML and CSS */}
          <Col className="wd-dashboard-course">
            <Card className="h-100">
              <Link href="/Courses/4567" className="text-decoration-none text-dark">
                <CardImg 
                  variant="top" 
                  src="https://via.placeholder.com/300x160/E67E22/FFFFFF?text=HTML+CSS" 
                  style={{ height: "160px", objectFit: "cover" }} 
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    CS5678 HTML and CSS
                  </CardTitle>
                  <CardText className="wd-dashboard-course-title">
                    Frontend web developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 3 - Java */}
          <Col className="wd-dashboard-course">
            <Card className="h-100">
              <Link href="/Courses/8910" className="text-decoration-none text-dark">
                <CardImg 
                  variant="top" 
                  src="https://via.placeholder.com/300x160/E74C3C/FFFFFF?text=Java" 
                  style={{ height: "160px", objectFit: "cover" }} 
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    CS8910 Java
                  </CardTitle>
                  <CardText className="wd-dashboard-course-title">
                    Java programming for beginners
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 4 - Machine Learning */}
          <Col className="wd-dashboard-course">
            <Card className="h-100">
              <Link href="/Courses/1112" className="text-decoration-none text-dark">
                <CardImg 
                  variant="top" 
                  src="https://via.placeholder.com/300x160/9B59B6/FFFFFF?text=Machine+Learning" 
                  style={{ height: "160px", objectFit: "cover" }} 
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    CS1112 Machine Learning
                  </CardTitle>
                  <CardText className="wd-dashboard-course-title">
                    Machine Learning for beginners
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 5 - Python */}
          <Col className="wd-dashboard-course">
            <Card className="h-100">
              <Link href="/Courses/1314" className="text-decoration-none text-dark">
                <CardImg 
                  variant="top" 
                  src="https://via.placeholder.com/300x160/27AE60/FFFFFF?text=Python" 
                  style={{ height: "160px", objectFit: "cover" }} 
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    CS1314 Python Programming
                  </CardTitle>
                  <CardText className="wd-dashboard-course-title">
                    Python programming fundamentals
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 6 - Database Design */}
          <Col className="wd-dashboard-course">
            <Card className="h-100">
              <Link href="/Courses/1516" className="text-decoration-none text-dark">
                <CardImg 
                  variant="top" 
                  src="https://via.placeholder.com/300x160/16A085/FFFFFF?text=Database+Design" 
                  style={{ height: "160px", objectFit: "cover" }} 
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    CS1516 Database Design
                  </CardTitle>
                  <CardText className="wd-dashboard-course-title">
                    Relational database fundamentals
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 7 - Mobile Development */}
          <Col className="wd-dashboard-course">
            <Card className="h-100">
              <Link href="/Courses/1718" className="text-decoration-none text-dark">
                <CardImg 
                  variant="top" 
                  src="https://via.placeholder.com/300x160/34495E/FFFFFF?text=Mobile+Dev" 
                  style={{ height: "160px", objectFit: "cover" }} 
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    CS1718 Mobile Development
                  </CardTitle>
                  <CardText className="wd-dashboard-course-title">
                    iOS and Android development
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}