const informationContainer = document.querySelector(".information-container");
const btnSearch = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-bar");
const sortByUSN = document.querySelector(".sort-by-usn");

const dataObj = [
  {
    name: "Pratheek V A",
    usn: "4SN19CS071",
    mobile: "97979999793",
  },
  {
    name: "Shashank K",
    usn: "4SN19CS086",
    mobile: "97979999793",
  },
  {
    name: "Sushanth Poojary",
    usn: "4SN19CS100",
    mobile: "97979999793",
  },
  {
    name: "Ramith",
    usn: "4SN19CS073",
    mobile: "97979999793",
  },
  {
    name: "Riya Lewis",
    usn: "4SN19CS079",
    mobile: "97979999793",
  },
  {
    name: "Khushi Rai S B",
    usn: "4SN19CS047",
    mobile: "97979999793",
  },
  {
    name: "A M Sreenidhi",
    usn: "4SN19CS001",
    mobile: "97979999793",
  },
  {
    name: "Kavita Patil",
    usn: "4SN19CS044",
    mobile: "97979999793",
  },
  {
    name: "Akhila Bhat M V",
    usn: "4SN19CS008",
    mobile: "97979999793",
  },
  {
    name: "B Akshay Baliga",
    usn: "4SN19CS014",
    mobile: "97979999793",
  },
  {
    name: "Harshita Venkataramana Moger",
    usn: "4SN19CS029",
    mobile: "97979999793",
  },
  {
    name: "Akhil S R",
    usn: "4SN19CS007",
    mobile: "97979999793",
  },
  {
    name: "Lara Ponnamma M B",
    usn: "4SN19CS049",
    mobile: "97979999793",
  },
  {
    name: "Jaideep",
    usn: "4SN19CS035",
    mobile: "97979999793",
  },
  {
    name: "Ashritha S",
    usn: "4SN19CS013",
    mobile: "97979999793",
  },
  {
    name: "J Janani",
    usn: "4SN19CS034",
    mobile: "97979999793",
  },
  {
    name: "Bhumika B B",
    usn: "4SN19CS017",
    mobile: "97979999793",
  },
  {
    name: "Deekshith Kumar V",
    usn: "4SN19CS020",
    mobile: "97979999793",
  },
  {
    name: "Anusha Shetty",
    usn: "4SN19CS012",
    mobile: "97979999793",
  },
  {
    name: "Navyashree",
    usn: "4SN19CS059",
    mobile: "97979999793",
  },
  {
    name: "Nithin Kumar",
    usn: "4SN19CS064",
    mobile: "97979999793",
  },
  {
    name: "Nikhil P Ladwa",
    usn: "4SN19CS062",
    mobile: "97979999793",
  },
  {
    name: "Nikhil Kashyap H R",
    usn: "4SN19CS061",
    mobile: "97979999793",
  },
  {
    name: "Praneeth Shetty",
    usn: "4SN19CS070",
    mobile: "97979999793",
  },
  {
    name: "U Manvith Kumar",
    usn: "4SN19CS103",
    mobile: "97979999793",
  },
];
let i = 0;
const render = (data) => {
  const html = `<div class="information">
    <div class="snoi">
        <p>${++i}</p>
    </div>
    <div class="namei">
        <p>${data.name}</p>
    </div>
    <div class="usni">
        <p>${data.usn}</p>
    </div>
    <div class="phnoi">
        <p>${data.mobile}</p>
    </div>
</div>`;
  informationContainer.insertAdjacentHTML("beforeend", html);
};

dataObj.forEach((data) => {
  render(data);
});

const merge = (arr, l, m, r) => {
  let n1 = m - l + 1;
  let n2 = r - m;

  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++) L[i] = arr[l + i];
  for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  let i = 0;
  let j = 0;

  let k = l;

  while (i < n1 && j < n2) {
    num1 = Number.parseInt(L[i].usn.slice(-3));
    num2 = Number.parseInt(R[j].usn.slice(-3));
    if (num1 <= num2) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
};

const mergeSort = (arr, l, r) => {
  if (l >= r) {
    return;
  }
  let m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
};

const binarySearch = (arr, l, r, x) => {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);
    const usnNum = Number.parseInt(arr[mid].usn.slice(-3));
    if (usnNum == x) return mid;

    if (usnNum > x) return binarySearch(arr, l, mid - 1, x);
    else return binarySearch(arr, mid + 1, r, x);
  }
  return -1;
};

const initialHTML = () => {
  i = 0;
  informationContainer.innerHTML = "";
  informationContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="information">
      <div class="sno">
          <p>SNO</p>
      </div>
      <div class="name">
          <p>NAME</p>
      </div>
      <div class="usn">
          <p>USN</p>
      </div>
      <div class="phno">
          <p>MOBILE</p>
      </div>
    </div>`
  );
};

//Event handlers
// 1) Searching the detail of the student if exists based on name and usn

btnSearch.addEventListener("click", function (e) {
  e.preventDefault();
  initialHTML();
  const searchToken = searchInput.value;
  usn = Number.parseInt(searchToken.slice(-3));
  if (usn) {
    mergeSort(dataObj, 0, dataObj.length - 1);
    const result = binarySearch(dataObj, 0, dataObj.length - 1, usn);
    if (result != -1) render(dataObj[result]);
  } else {
    dataObj.forEach((data, i) => {
      if (data.name.toUpperCase().startsWith(searchToken.toUpperCase())) {
        render(dataObj[i]);
      }
    });
  }
});

// Sorting the student details according to usn

let click = 1;
sortByUSN.addEventListener("click", function (e) {
  e.preventDefault();
  initialHTML();
  mergeSort(dataObj, 0, dataObj.length - 1);
  dataObj.forEach((data) => render(data));
});
