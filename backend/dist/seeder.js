"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Nedb = require("nedb");
class DB {
    run() {
        this.seedUsers();
        this.seedJobs();
        this.seedJobsActivity();
        this.seedCompany();
    }
    seedCompany() {
        this.company = new Nedb('database/company.db');
        this.company.loadDatabase();
        this.company.insert([
            { "id": 1, "companyName": "Ainyx", "streetAddress": "8428 Redwing Terrace", "city": "Sua", "country": "Indonesia", "rating": 5 },
            { "id": 2, "companyName": "Babbleopia", "streetAddress": "14004 Muir Court", "city": "Shchastya", "country": "Ukraine", "rating": 5 },
            { "id": 3, "companyName": "Wikido", "streetAddress": "1994 Macpherson Terrace", "city": "Dabai", "country": "Nigeria", "rating": 5 },
            { "id": 4, "companyName": "Trupe", "streetAddress": "8931 Hollow Ridge Alley", "city": "Uberlândia", "country": "Brazil", "rating": 5 },
            { "id": 5, "companyName": "Livetube", "streetAddress": "5 Eastlawn Plaza", "city": "Tsagaan-Ovoo", "country": "Mongolia", "rating": 4 },
        ]);
    }
    seedJobsActivity() {
        this.jobActivity = new Nedb('database/jobs-activity.db');
        this.jobActivity.loadDatabase();
        this.jobActivity.insert({ "id": "1", "type": "company", "jobId": "1", "userId": "1", "action": "invited", "dateApplied": "5/13/2022" });
    }
    seedJobs() {
        this.jobDb = new Nedb('database/jobs.db');
        this.jobDb.loadDatabase();
        this.jobDb.insert([
            { "id": 1, "companyId": 1, "jobName": "Research Nurse", "startDate": "5/13/2022", "startShift": "1:31 PM", "endShift": "4:58 PM", "hourlyRate": "$10.67", "dateCreated": "4/11/2022" },
            { "id": 2, "companyId": 2, "jobName": "Recruiting Manager", "startDate": "5/13/2022", "startShift": "2:08 AM", "endShift": "9:30 AM", "hourlyRate": "$33.67", "dateCreated": "5/5/2022" },
            { "id": 3, "companyId": 3, "jobName": "Community Outreach Specialist", "startDate": "5/13/2022", "startShift": "5:44 AM", "endShift": "9:08 AM", "hourlyRate": "$14.26", "dateCreated": "4/11/2022" },
            { "id": 4, "companyId": 5, "jobName": "Executive Secretary", "startDate": "5/13/2022", "startShift": "8:37 PM", "endShift": "6:34 PM", "hourlyRate": "$31.78", "dateCreated": "4/29/2022" },
            { "id": 5, "companyId": 3, "jobName": "Assistant Professor", "startDate": "5/13/2022", "startShift": "8:27 AM", "endShift": "3:53 AM", "hourlyRate": "$29.81", "dateCreated": "4/22/2022" },
            { "id": 6, "companyId": 3, "jobName": "VP Sales", "startDate": "5/13/2022", "startShift": "7:32 AM", "endShift": "11:10 AM", "hourlyRate": "$46.73", "dateCreated": "5/4/2022" },
            { "id": 7, "companyId": 2, "jobName": "Physical Therapy Assistant", "startDate": "5/13/2022", "startShift": "12:04 PM", "endShift": "4:42 PM", "hourlyRate": "$46.69", "dateCreated": "5/1/2022" },
            { "id": 8, "companyId": 3, "jobName": "Programmer I", "startDate": "5/13/2022", "startShift": "7:12 AM", "endShift": "7:21 AM", "hourlyRate": "$45.82", "dateCreated": "4/7/2022" },
            { "id": 9, "companyId": 3, "jobName": "Business Systems Development Analyst", "startDate": "5/13/2022", "startShift": "8:48 PM", "endShift": "7:04 PM", "hourlyRate": "$13.15", "dateCreated": "5/6/2022" },
            { "id": 10, "companyId": 1, "jobName": "Business Systems Development Analyst", "startDate": "5/13/2022", "startShift": "8:49 PM", "endShift": "8:55 PM", "hourlyRate": "$34.07", "dateCreated": "4/25/2022" },
            { "id": 11, "companyId": 1, "jobName": "Web Designer IV", "startDate": "5/13/2022", "startShift": "12:26 PM", "endShift": "6:24 PM", "hourlyRate": "$31.24", "dateCreated": "5/10/2022" },
            { "id": 12, "companyId": 5, "jobName": "VP Accounting", "startDate": "5/13/2022", "startShift": "7:43 PM", "endShift": "11:40 AM", "hourlyRate": "$30.25", "dateCreated": "5/1/2022" },
            { "id": 13, "companyId": 3, "jobName": "Office Assistant III", "startDate": "5/13/2022", "startShift": "4:14 AM", "endShift": "10:42 PM", "hourlyRate": "$12.84", "dateCreated": "4/25/2022" },
            { "id": 14, "companyId": 4, "jobName": "Clinical Specialist", "startDate": "5/13/2022", "startShift": "2:29 PM", "endShift": "10:26 PM", "hourlyRate": "$13.88", "dateCreated": "4/27/2022" },
            { "id": 15, "companyId": 5, "jobName": "Administrative Assistant II", "startDate": "5/13/2022", "startShift": "12:46 PM", "endShift": "2:13 PM", "hourlyRate": "$24.17", "dateCreated": "5/4/2022" },
            { "id": 16, "companyId": 5, "jobName": "Account Representative IV", "startDate": "5/13/2022", "startShift": "4:22 PM", "endShift": "10:56 AM", "hourlyRate": "$22.84", "dateCreated": "4/27/2022" },
            { "id": 17, "companyId": 1, "jobName": "Recruiter", "startDate": "5/13/2022", "startShift": "2:28 PM", "endShift": "10:01 PM", "hourlyRate": "$19.46", "dateCreated": "4/16/2022" },
            { "id": 18, "companyId": 2, "jobName": "Librarian", "startDate": "5/13/2022", "startShift": "11:59 AM", "endShift": "12:14 PM", "hourlyRate": "$28.34", "dateCreated": "5/7/2022" },
            { "id": 19, "companyId": 3, "jobName": "Structural Analysis Engineer", "startDate": "5/13/2022", "startShift": "8:22 PM", "endShift": "2:02 PM", "hourlyRate": "$44.35", "dateCreated": "4/11/2022" },
            { "id": 20, "companyId": 5, "jobName": "Technical Writer", "startDate": "5/13/2022", "startShift": "9:08 AM", "endShift": "9:49 PM", "hourlyRate": "$41.40", "dateCreated": "4/23/2022" },
            { "id": 21, "companyId": 5, "jobName": "Administrative Assistant I", "startDate": "5/13/2022", "startShift": "2:57 AM", "endShift": "4:09 PM", "hourlyRate": "$42.63", "dateCreated": "4/2/2022" },
            { "id": 22, "companyId": 2, "jobName": "Librarian", "startDate": "5/13/2022", "startShift": "11:15 AM", "endShift": "4:45 AM", "hourlyRate": "$27.97", "dateCreated": "5/2/2022" },
            { "id": 23, "companyId": 4, "jobName": "Biostatistician II", "startDate": "5/13/2022", "startShift": "9:30 PM", "endShift": "5:05 AM", "hourlyRate": "$39.98", "dateCreated": "4/21/2022" },
            { "id": 24, "companyId": 5, "jobName": "Safety Technician IV", "startDate": "5/13/2022", "startShift": "3:07 PM", "endShift": "1:42 AM", "hourlyRate": "$29.12", "dateCreated": "4/7/2022" },
            { "id": 25, "companyId": 2, "jobName": "Financial Analyst", "startDate": "5/13/2022", "startShift": "3:35 PM", "endShift": "9:39 PM", "hourlyRate": "$19.08", "dateCreated": "4/30/2022" },
            { "id": 26, "companyId": 3, "jobName": "Database Administrator I", "startDate": "5/13/2022", "startShift": "4:32 AM", "endShift": "8:45 PM", "hourlyRate": "$32.34", "dateCreated": "5/3/2022" },
            { "id": 27, "companyId": 4, "jobName": "VP Quality Control", "startDate": "5/13/2022", "startShift": "8:48 AM", "endShift": "6:36 AM", "hourlyRate": "$41.57", "dateCreated": "4/14/2022" },
            { "id": 28, "companyId": 1, "jobName": "Mechanical Systems Engineer", "startDate": "5/13/2022", "startShift": "8:19 AM", "endShift": "6:51 AM", "hourlyRate": "$17.07", "dateCreated": "4/26/2022" },
            { "id": 29, "companyId": 2, "jobName": "Senior Editor", "startDate": "5/13/2022", "startShift": "2:21 PM", "endShift": "12:45 PM", "hourlyRate": "$21.76", "dateCreated": "4/13/2022" },
            { "id": 30, "companyId": 4, "jobName": "Chief Design Engineer", "startDate": "5/13/2022", "startShift": "9:49 AM", "endShift": "4:04 AM", "hourlyRate": "$43.49", "dateCreated": "4/5/2022" },
            { "id": 31, "companyId": 3, "jobName": "Paralegal", "startDate": "5/13/2022", "startShift": "7:12 AM", "endShift": "6:51 AM", "hourlyRate": "$17.12", "dateCreated": "4/3/2022" },
            { "id": 32, "companyId": 5, "jobName": "Environmental Tech", "startDate": "5/13/2022", "startShift": "4:57 AM", "endShift": "6:25 AM", "hourlyRate": "$25.80", "dateCreated": "4/6/2022" },
            { "id": 33, "companyId": 4, "jobName": "Human Resources Manager", "startDate": "5/13/2022", "startShift": "2:16 AM", "endShift": "8:38 AM", "hourlyRate": "$44.64", "dateCreated": "4/2/2022" },
            { "id": 34, "companyId": 4, "jobName": "Professor", "startDate": "5/13/2022", "startShift": "10:36 AM", "endShift": "1:16 PM", "hourlyRate": "$40.65", "dateCreated": "4/23/2022" },
            { "id": 35, "companyId": 3, "jobName": "Marketing Assistant", "startDate": "5/13/2022", "startShift": "1:48 AM", "endShift": "4:44 AM", "hourlyRate": "$46.28", "dateCreated": "4/1/2022" },
            { "id": 36, "companyId": 5, "jobName": "Developer I", "startDate": "5/13/2022", "startShift": "12:17 PM", "endShift": "2:06 AM", "hourlyRate": "$27.19", "dateCreated": "5/2/2022" },
            { "id": 37, "companyId": 2, "jobName": "Business Systems Development Analyst", "startDate": "5/13/2022", "startShift": "9:49 PM", "endShift": "11:13 AM", "hourlyRate": "$20.59", "dateCreated": "4/13/2022" },
            { "id": 38, "companyId": 1, "jobName": "Account Coordinator", "startDate": "5/13/2022", "startShift": "9:08 AM", "endShift": "9:38 PM", "hourlyRate": "$22.35", "dateCreated": "4/6/2022" },
            { "id": 39, "companyId": 3, "jobName": "Nurse Practicioner", "startDate": "5/13/2022", "startShift": "12:51 PM", "endShift": "9:56 PM", "hourlyRate": "$47.46", "dateCreated": "4/30/2022" },
            { "id": 40, "companyId": 4, "jobName": "Research Associate", "startDate": "5/13/2022", "startShift": "7:00 AM", "endShift": "8:01 PM", "hourlyRate": "$27.25", "dateCreated": "4/5/2022" },
            { "id": 41, "companyId": 3, "jobName": "Sales Associate", "startDate": "5/13/2022", "startShift": "2:02 PM", "endShift": "1:03 PM", "hourlyRate": "$47.45", "dateCreated": "4/23/2022" },
            { "id": 42, "companyId": 1, "jobName": "Speech Pathologist", "startDate": "5/13/2022", "startShift": "6:18 PM", "endShift": "4:58 PM", "hourlyRate": "$29.93", "dateCreated": "5/9/2022" },
            { "id": 43, "companyId": 4, "jobName": "Nuclear Power Engineer", "startDate": "5/13/2022", "startShift": "1:37 PM", "endShift": "4:28 AM", "hourlyRate": "$37.67", "dateCreated": "4/5/2022" },
            { "id": 44, "companyId": 3, "jobName": "Nurse Practicioner", "startDate": "5/13/2022", "startShift": "2:32 AM", "endShift": "9:22 AM", "hourlyRate": "$29.98", "dateCreated": "5/11/2022" },
            { "id": 45, "companyId": 5, "jobName": "Chemical Engineer", "startDate": "5/13/2022", "startShift": "3:56 AM", "endShift": "6:56 PM", "hourlyRate": "$17.85", "dateCreated": "5/6/2022" },
            { "id": 46, "companyId": 1, "jobName": "Mechanical Systems Engineer", "startDate": "5/13/2022", "startShift": "7:35 AM", "endShift": "12:52 PM", "hourlyRate": "$24.20", "dateCreated": "4/23/2022" },
            { "id": 47, "companyId": 4, "jobName": "Junior Executive", "startDate": "5/13/2022", "startShift": "6:36 AM", "endShift": "11:10 AM", "hourlyRate": "$43.12", "dateCreated": "5/11/2022" },
            { "id": 48, "companyId": 1, "jobName": "Design Engineer", "startDate": "5/13/2022", "startShift": "4:45 AM", "endShift": "7:16 AM", "hourlyRate": "$36.80", "dateCreated": "4/11/2022" },
            { "id": 49, "companyId": 4, "jobName": "Senior Financial Analyst", "startDate": "5/13/2022", "startShift": "5:25 AM", "endShift": "4:55 PM", "hourlyRate": "$13.08", "dateCreated": "4/27/2022" },
            { "id": 50, "companyId": 4, "jobName": "Actuary", "startDate": "5/13/2022", "startShift": "2:11 PM", "endShift": "6:40 PM", "hourlyRate": "$37.81", "dateCreated": "4/26/2022" },
        ]);
    }
    seedUsers() {
        this.userDb = new Nedb('database/users.db');
        this.userDb.loadDatabase();
        this.userDb.insert({ "id": 1, "firstName": "Freda", "lastName": "Lubman", "email": "flubman0@creativecommons.org", "profileImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKsSURBVDjLfZPLa1RnGIef75zv3OLEDObWqcaYYJUWgqa40MmilioE2kI3XVXRFsmqUAqi/4G7brpxpaLgpUIEcaEW23RbKRYqASfKJOIlMbfJZDyTc/kuXaS1BmNfeBcv/Hjeuzh/494PxoivmpkJU8WbZteGnoTQ49yxLz78HkAaKw59NtTTGYahEMLl/ywxoFXOtV8fHQVWAc3UBEEQigu/1UhYoCEq9HXPEnl1lDUsLkeMP2qjxb6PpJ3jX/ahjRD/QmWmwHFcHAGZM0NfxyyB/5h62kBphQwC+ntKTFY3UPQ7MGZtVRLAAI4jSO0cvldjaaVOqhMypVA2JggC4jSiPXKw2DWD+Q8gBFYZUp2TqJSVPCUzCm0AkWONRjoCa+2bFVi7CgjppBFPY12P1MRkSuO5EXGjQKtfYjC/RH53li1Jvw+DADivAI6g4G7m2Uw3yUKBFruJVrEJtdjOzJMSZa9K+YMapfIRBrvuh/dO7RgGkPZ1gNfFu9EgT/8co1h4jtAaL+nk455eDvRVadt5kPjxTTZs7BVqa3305nf9x161UFkYQRuDNoYd6Rz7enoxQHX6BZG9QXHgW3RznLBjC4l+Sumj3S0qrp2W1loEMLx6WAC4A0s04wXC6b/oKI9QmLpDXpvCcecRToy/cR6SJi+nU1eKde5VR0V0VMT4Hu88vIgXWYyawTFL4LRi84wHVyrJeGV5RIaeqGPytl3de0GIf1CWpHqLZOoXuvYMYbOfEbrBg9spMk3Ic20nqsuHDl+eHJW+FD+NjlX3ZdoOvL7i/eJ64b2hT9xs/jRStjE+ltm7zU8TubWc++QXj57cP7qay9p1/cm14d/TF6dsXPnc/vFjuXHm6+2H19PJt33e88n5O8v1sW3NxXhlYmLuxDdnH15dT/c3MC9g0QGCji8AAAAASUVORK5CYII=" });
    }
}
const seeder = new DB();
seeder.run();
//# sourceMappingURL=seeder.js.map