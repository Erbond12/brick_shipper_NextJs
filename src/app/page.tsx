import Table_home_page from "@/components/table_home_page/Table_home_page"

export default function Home() {
  return (
    <div className="mt-10">
      <div className="items-center justify-between lg:flex">
        <h1>
          Welcome home!&nbsp;
        </h1>
        <a className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href="/newRoute">
          New Route?
        </a>
      </div>
      <div>
        <Table_home_page />
      </div>
    </div>
  );
}

/* 
How to style Mui elements on the element itself... with themes and paletts, we can do it more globally and edit later easier:

import { Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

<div>
  <Button variant="contained" sx={{color: "black", bgcolor: deepOrange[500], "&:hover": {color: "white",bgcolor: deepOrange[600]}}}> Test </ Button>
</div> 
*/