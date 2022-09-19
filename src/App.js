import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const tracks = [
  {
    url: "https://hlwsdtech.com/listening/media/0011_0[1].722e1857.mp3",
    title: "Wolf! - Page 11",
    tags: ["Unit 1 Week 1"],
    index: "1"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0013_0[1].1de6ed01.mp3",
    title: "Wolf! - Page 13",
    tags: ["Unit 1 Week 1"],
    index: "2"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0014_0[1].de34fef4.mp3",
    title: "Wolf! - Page 14",
    tags: ["Unit 1 Week 1"],
    index: "3"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0017_0[1].463d1bc3.mp3",
    title: "Wolf! - Page 17",
    tags: ["Unit 1 Week 1"],
    index: "4"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0018_0[1].257832d5.mp3",
    title: "Wolf! - Page 18",
    tags: ["Unit 1 Week 1"],
    index: "5"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0020_0[1].466ba486.mp3",
    title: "Wolf! - Page 20",
    tags: ["Unit 1 Week 1"],
    index: "6"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0022_0[1].44878eb1.mp3",
    title: "Wolf! - Page 22",
    tags: ["Unit 1 Week 1"],
    index: "7"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0024_0[1].64753d50.mp3",
    title: "Wolf! - Page 24",
    tags: ["Unit 1 Week 1"],
    index: "8"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0027_0[1].ed3d36bc.mp3",
    title: "Wolf! - Page 27",
    tags: ["Unit 1 Week 1"],
    index: "9"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0028_0[1].de73cb42.mp3",
    title: "Wolf! - Page 28",
    tags: ["Unit 1 Week 1"],
    index: "10"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0029_0[1].3285bb89.mp3",
    title: "Wolf! - Page 29",
    tags: ["Unit 1 Week 1"],
    index: "11"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0032_0[1].432d72a6.mp3",
    title: "JENNIE AND THE WOLF - Page 32",
    tags: ["Unit 1 Week 1"],
    index: "12"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0033_0[1].eb831824.mp3",
    title: "JENNIE AND THE WOLF - Page 33",
    tags: ["Unit 1 Week 1"],
    index: "13"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0035_0[1].mp3",
    title: "Yoon and the Jade Bracelet - Page 35",
    tags: ["Unit 1 Week 2"],
    index: "14"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0036_0[1].mp3",
    title: "Yoon and the Jade Bracelet - Page 36",
    tags: ["Unit 1 Week 2"],
    index: "15"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0037_0[1].mp3",
    title: "Yoon and the Jade Bracelet - Page 37",
    tags: ["Unit 1 Week 2"],
    index: "16"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0039_0[1].mp3",
    title: "Yoon and the Jade Bracelet - Page 39",
    tags: ["Unit 1 Week 2"],
    index: "17"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0040_0[1].mp3",
    title: "Yoon and the Jade Bracelet - Page 40",
    tags: ["Unit 1 Week 2"],
    index: "18"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0041_0[1].mp3",
    title: "Yoon and the Jade Bracelet - Page 41",
    tags: ["Unit 1 Week 2"],
    index: "19"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0042_0[1].mp3",
    title: "Yoon and the Jade Bracelet - Page 42",
    tags: ["Unit 1 Week 2"],
    index: "20"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0043_0[1].mp3",
    title: "Yoon and the Jade Bracelet - Page 43",
    tags: ["Unit 1 Week 2"],
    index: "21"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0044_0[1].mp3",
    title: "Yoon and the Jade Bracelet - Page 44",
    tags: ["Unit 1 Week 2"],
    index: "22"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0046_0[1].mp3",
    title: "Yoon and the Jade Bracelet - Page 46",
    tags: ["Unit 1 Week 2"],
    index: "23"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0047_0[1].mp3",
    title: "Yoon and the Jade Bracelet - Page 47",
    tags: ["Unit 1 Week 2"],
    index: "24"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0048_0[1].mp3",
    title: "Yoon and the Jade Bracelet - Page 48",
    tags: ["Unit 1 Week 2"],
    index: "25"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0049_0[1].mp3",
    title: "Yoon and the Jade Bracelet - Page 49",
    tags: ["Unit 1 Week 2"],
    index: "26"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0050_0[1].mp3",
    title: "Yoon and the Jade Bracelet - Page 50",
    tags: ["Unit 1 Week 2"],
    index: "27"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0051_0[1].mp3",
    title: "Yoon and the Jade Bracelet - Page 51",
    tags: ["Unit 1 Week 2"],
    index: "28"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0054_0[1].mp3",
    title: "Family Traditions - Page 54",
    tags: ["Unit 1 Week 2"],
    index: "29"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0055_0[1].mp3",
    title: "Family Traditions - Page 55",
    tags: ["Unit 1 Week 2"],
    index: "30"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0055_1[1].mp3",
    title: "Family Traditions - Page 55",
    tags: ["Unit 1 Week 2"],
    index: "31"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0056_0[1].mp3",
    title: "Family Traditions - Page 56",
    tags: ["Unit 1 Week 2"],
    index: "32"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0056_1[1].mp3",
    title: "Family Traditions - Page 56",
    tags: ["Unit 1 Week 2"],
    index: "33"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0057_0[1].mp3",
    title: "Family Traditions - Page 57",
    tags: ["Unit 1 Week 2"],
    index: "34"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0057_1[1].mp3",
    title: "Family Traditions - Page 57",
    tags: ["Unit 1 Week 2"],
    index: "35"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0059_0[1].mp3",
    title: "Gary the Dreamer - Page 59",
    tags: ["Unit 1 Week 3"],
    index: "36"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0060_0[1].mp3",
    title: "Gary the Dreamer - Page 60",
    tags: ["Unit 1 Week 3"],
    index: "37"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0061_0[1].mp3",
    title: "Gary the Dreamer - Page 61",
    tags: ["Unit 1 Week 3"],
    index: "38"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0063_0[1].mp3",
    title: "Gary the Dreamer - Page 63",
    tags: ["Unit 1 Week 3"],
    index: "39"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0064_0[1].mp3",
    title: "Gary the Dreamer - Page 64",
    tags: ["Unit 1 Week 3"],
    index: "40"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0065_0[1].mp3",
    title: "Gary the Dreamer - Page 65",
    tags: ["Unit 1 Week 3"],
    index: "41"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0066_0[1].mp3",
    title: "Gary the Dreamer - Page 66",
    tags: ["Unit 1 Week 3"],
    index: "42"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0067_0[1].mp3",
    title: "Gary the Dreamer - Page 67",
    tags: ["Unit 1 Week 3"],
    index: "43"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0068_0[1].mp3",
    title: "Gary the Dreamer - Page 68",
    tags: ["Unit 1 Week 3"],
    index: "44"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0069_0[1].mp3",
    title: "Gary the Dreamer - Page 69",
    tags: ["Unit 1 Week 3"],
    index: "45"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0072_0[1].mp3",
    title: "Sharing Polkas and Pitas - Page 72",
    tags: ["Unit 1 Week 3"],
    index: "46"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0073_0[1].mp3",
    title: "Sharing Polkas and Pitas - Page 73",
    tags: ["Unit 1 Week 3"],
    index: "47"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0073_1[1].mp3",
    title: "Sharing Polkas and Pitas - Page 73",
    tags: ["Unit 1 Week 3"],
    index: "48"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0074_0[1].mp3",
    title: "ALL ABOARD! ELIJAH McCOY'S STEAM ENGINE - Page 74",
    tags: ["Unit 1 Week 4"],
    index: "49"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0075_0[1].mp3",
    title: "ALL ABOARD! ELIJAH McCOY'S STEAM ENGINE - Page 75",
    tags: ["Unit 1 Week 4"],
    index: "50"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0076_0[1].mp3",
    title: "ALL ABOARD! ELIJAH McCOY'S STEAM ENGINE - Page 76",
    tags: ["Unit 1 Week 4"],
    index: "51"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0079_0[1].mp3",
    title: "ALL ABOARD! ELIJAH McCOY'S STEAM ENGINE - Page 79",
    tags: ["Unit 1 Week 4"],
    index: "52"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0080_0[1].mp3",
    title: "ALL ABOARD! ELIJAH McCOY'S STEAM ENGINE - Page 80",
    tags: ["Unit 1 Week 4"],
    index: "53"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0081_0[1].mp3",
    title: "ALL ABOARD! ELIJAH McCOY'S STEAM ENGINE - Page 81",
    tags: ["Unit 1 Week 4"],
    index: "54"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0082_0[1].mp3",
    title: "ALL ABOARD! ELIJAH McCOY'S STEAM ENGINE - Page 82",
    tags: ["Unit 1 Week 4"],
    index: "55"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0083_0[1].mp3",
    title: "ALL ABOARD! ELIJAH McCOY'S STEAM ENGINE - Page 83",
    tags: ["Unit 1 Week 4"],
    index: "56"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0084_0[1].mp3",
    title: "ALL ABOARD! ELIJAH McCOY'S STEAM ENGINE - Page 84",
    tags: ["Unit 1 Week 4"],
    index: "57"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0085_0[1].mp3",
    title: "ALL ABOARD! ELIJAH McCOY'S STEAM ENGINE - Page 85",
    tags: ["Unit 1 Week 4"],
    index: "58"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0086_0[1].mp3",
    title: "ALL ABOARD! ELIJAH McCOY'S STEAM ENGINE - Page 86",
    tags: ["Unit 1 Week 4"],
    index: "59"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0087_0[1].mp3",
    title: "ALL ABOARD! ELIJAH McCOY'S STEAM ENGINE - Page 87",
    tags: ["Unit 1 Week 4"],
    index: "60"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0088_0[1].mp3",
    title: "ALL ABOARD! ELIJAH McCOY'S STEAM ENGINE - Page 88",
    tags: ["Unit 1 Week 4"],
    index: "61"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0089_0[1].mp3",
    title: "ALL ABOARD! ELIJAH McCOY'S STEAM ENGINE - Page 89",
    tags: ["Unit 1 Week 4"],
    index: "62"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0092_0[1].mp3",
    title: "Lighting the World - Page 92",
    tags: ["Unit 1 Week 4"],
    index: "63"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0092_1[1].mp3",
    title: "Lighting the World - Page 92",
    tags: ["Unit 1 Week 4"],
    index: "64"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0093_0[1].mp3",
    title: "Lighting the World - Page 93",
    tags: ["Unit 1 Week 4"],
    index: "65"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0094_0[1].mp3",
    title: "A Mountain of History - Page 94",
    tags: ["Unit 1 Week 5"],
    index: "66"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0094_1[1].mp3",
    title: "A Mountain of History - Page 94",
    tags: ["Unit 1 Week 5"],
    index: "67"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0095_0[1].mp3",
    title: "A Mountain of History - Page 95",
    tags: ["Unit 1 Week 5"],
    index: "68"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0095_1[1].mp3",
    title: "A Mountain of History - Page 95",
    tags: ["Unit 1 Week 5"],
    index: "69"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0096_0[1].mp3",
    title: "A Mountain of History - Page 96",
    tags: ["Unit 1 Week 5"],
    index: "70"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0096_1[1].mp3",
    title: "A Mountain of History - Page 96",
    tags: ["Unit 1 Week 5"],
    index: "71"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0097_0[1].mp3",
    title: "A Mountain of History - Page 97",
    tags: ["Unit 1 Week 5"],
    index: "72"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0097_1[1].mp3",
    title: "A Mountain of History - Page 97",
    tags: ["Unit 1 Week 5"],
    index: "73"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0098_0[1].mp3",
    title: "A Landmark Street - Page 98",
    tags: ["Unit 1 Week 5"],
    index: "74"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0099_0[1].mp3",
    title: "A Landmark Street - Page 99",
    tags: ["Unit 1 Week 5"],
    index: "75"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0101_0[1].mp3",
    title: "ROADRUNNER'S DANCE - Page 101",
    tags: ["Unit 2 Week 1"],
    index: "76"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0102_0[1].mp3",
    title: "ROADRUNNER'S DANCE - Page 102",
    tags: ["Unit 2 Week 1"],
    index: "77"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0103_0[1].mp3",
    title: "ROADRUNNER'S DANCE - Page 103",
    tags: ["Unit 2 Week 1"],
    index: "78"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0104_0[1].mp3",
    title: "ROADRUNNER'S DANCE - Page 104",
    tags: ["Unit 2 Week 1"],
    index: "79"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0106_0[1].mp3",
    title: "ROADRUNNER'S DANCE - Page 106",
    tags: ["Unit 2 Week 1"],
    index: "80"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0108_0[1].mp3",
    title: "ROADRUNNER'S DANCE - Page 108",
    tags: ["Unit 2 Week 1"],
    index: "81"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0110_0[1].mp3",
    title: "ROADRUNNER'S DANCE - Page 110",
    tags: ["Unit 2 Week 1"],
    index: "82"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0112_0[1].mp3",
    title: "ROADRUNNER'S DANCE - Page 112",
    tags: ["Unit 2 Week 1"],
    index: "83"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0113_0[1].mp3",
    title: "ROADRUNNER'S DANCE - Page 113",
    tags: ["Unit 2 Week 1"],
    index: "84"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0114_0[1].mp3",
    title: "ROADRUNNER'S DANCE - Page 114",
    tags: ["Unit 2 Week 1"],
    index: "85"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0116_0[1].mp3",
    title: "ROADRUNNER'S DANCE - Page 116",
    tags: ["Unit 2 Week 1"],
    index: "86"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0120_0[1].mp3",
    title: "Deltona Is Going Batty - Page 120",
    tags: ["Unit 2 Week 1"],
    index: "87"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0120_1[1].mp3",
    title: "Deltona Is Going Batty - Page 120",
    tags: ["Unit 2 Week 1"],
    index: "88"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0121_0[1].mp3",
    title: "Deltona Is Going Batty - Page 121",
    tags: ["Unit 2 Week 1"],
    index: "89"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0121_1[1].mp3",
    title: "Deltona Is Going Batty - Page 121",
    tags: ["Unit 2 Week 1"],
    index: "90"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0121_2[1].mp3",
    title: "Deltona Is Going Batty - Page 121",
    tags: ["Unit 2 Week 1"],
    index: "91"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0122_0[1].mp3",
    title: "Deltona Is Going Batty - Page 122",
    tags: ["Unit 2 Week 1"],
    index: "92"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0122_1[1].mp3",
    title: "Deltona Is Going Batty - Page 122",
    tags: ["Unit 2 Week 1"],
    index: "93"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0122_2[1].mp3",
    title: "Deltona Is Going Batty - Page 122",
    tags: ["Unit 2 Week 1"],
    index: "94"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0122_3[1].mp3",
    title: "Deltona Is Going Batty - Page 122",
    tags: ["Unit 2 Week 1"],
    index: "95"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0123_0[1].mp3",
    title: "Deltona Is Going Batty - Page 123",
    tags: ["Unit 2 Week 1"],
    index: "96"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0123_1[1].mp3",
    title: "Deltona Is Going Batty - Page 123",
    tags: ["Unit 2 Week 1"],
    index: "97"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0125_0[1].mp3",
    title: "THE CASTLE ON HESTER STREET - Page 125",
    tags: ["Unit 2 Week 2"],
    index: "98"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0126_0[1].mp3",
    title: "THE CASTLE ON HESTER STREET - Page 126",
    tags: ["Unit 2 Week 2"],
    index: "99"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0128_0[1].mp3",
    title: "THE CASTLE ON HESTER STREET - Page 128",
    tags: ["Unit 2 Week 2"],
    index: "100"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0129_0[1].mp3",
    title: "THE CASTLE ON HESTER STREET - Page 129",
    tags: ["Unit 2 Week 2"],
    index: "101"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0130_0[1].mp3",
    title: "THE CASTLE ON HESTER STREET - Page 130",
    tags: ["Unit 2 Week 2"],
    index: "102"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0131_0[1].mp3",
    title: "THE CASTLE ON HESTER STREET - Page 131",
    tags: ["Unit 2 Week 2"],
    index: "103"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0132_0[1].mp3",
    title: "THE CASTLE ON HESTER STREET - Page 132",
    tags: ["Unit 2 Week 2"],
    index: "104"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0133_0[1].mp3",
    title: "THE CASTLE ON HESTER STREET - Page 133",
    tags: ["Unit 2 Week 2"],
    index: "105"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0134_0[1].mp3",
    title: "THE CASTLE ON HESTER STREET - Page 134",
    tags: ["Unit 2 Week 2"],
    index: "106"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0135_0[1].mp3",
    title: "THE CASTLE ON HESTER STREET - Page 135",
    tags: ["Unit 2 Week 2"],
    index: "107"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0136_0[1].mp3",
    title: "THE CASTLE ON HESTER STREET - Page 136",
    tags: ["Unit 2 Week 2"],
    index: "108"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0137_0[1].mp3",
    title: "THE CASTLE ON HESTER STREET - Page 137",
    tags: ["Unit 2 Week 2"],
    index: "109"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0138_0[1].mp3",
    title: "THE CASTLE ON HESTER STREET - Page 138",
    tags: ["Unit 2 Week 2"],
    index: "110"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0139_0[1].mp3",
    title: "THE CASTLE ON HESTER STREET - Page 139",
    tags: ["Unit 2 Week 2"],
    index: "111"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0142_0[1].mp3",
    title: "Next Stop, America - Page 142",
    tags: ["Unit 2 Week 2"],
    index: "112"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0142_1[1].mp3",
    title: "Next Stop, America - Page 142",
    tags: ["Unit 2 Week 2"],
    index: "113"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0143_0[1].mp3",
    title: "Next Stop, America - Page 143",
    tags: ["Unit 2 Week 2"],
    index: "114"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0143_1[1].mp3",
    title: "Next Stop, America - Page 143",
    tags: ["Unit 2 Week 2"],
    index: "114"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0143_2[1].mp3",
    title: "Next Stop, America - Page 143",
    tags: ["Unit 2 Week 2"],
    index: "115"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0143_3[1].mp3",
    title: "Next Stop, America - Page 143",
    tags: ["Unit 2 Week 2"],
    index: "116"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0144_0[1].mp3",
    title: "Next Stop, America - Page 144",
    tags: ["Unit 2 Week 2"],
    index: "117"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0144_1[1].mp3",
    title: "Next Stop, America - Page 144",
    tags: ["Unit 2 Week 2"],
    index: "118"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0145_0[1].mp3",
    title: "Next Stop, America - Page 145",
    tags: ["Unit 2 Week 2"],
    index: "119"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0147_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 147",
    tags: ["Unit 2 Week 3"],
    index: "120"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0148_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 148",
    tags: ["Unit 2 Week 3"],
    index: "121"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0149_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 149",
    tags: ["Unit 2 Week 3"],
    index: "122"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0150_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 150",
    tags: ["Unit 2 Week 3"],
    index: "123"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0151_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 151",
    tags: ["Unit 2 Week 3"],
    index: "124"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0151_1[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 151",
    tags: ["Unit 2 Week 3"],
    index: "125"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0152_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 152",
    tags: ["Unit 2 Week 3"],
    index: "126"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0153_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 153",
    tags: ["Unit 2 Week 3"],
    index: "127"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0154_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 154",
    tags: ["Unit 2 Week 3"],
    index: "128"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0155_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 155",
    tags: ["Unit 2 Week 3"],
    index: "129"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0156_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 156",
    tags: ["Unit 2 Week 3"],
    index: "130"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0157_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 157",
    tags: ["Unit 2 Week 3"],
    index: "131"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0158_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 158",
    tags: ["Unit 2 Week 3"],
    index: "132"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0159_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 159",
    tags: ["Unit 2 Week 3"],
    index: "133"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0160_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 160",
    tags: ["Unit 2 Week 3"],
    index: "134"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0161_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 161",
    tags: ["Unit 2 Week 3"],
    index: "135"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0162_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 162",
    tags: ["Unit 2 Week 3"],
    index: "136"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0163_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 163",
    tags: ["Unit 2 Week 3"],
    index: "137"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0164_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 164",
    tags: ["Unit 2 Week 3"],
    index: "138"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0165_0[1].mp3",
    title: "Vote! By Eileen Chrisfelow - Page 165",
    tags: ["Unit 2 Week 3"],
    index: "139"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0168_0[1].mp3",
    title: "A Plan for the People - Page 168",
    tags: ["Unit 2 Week 3"],
    index: "140"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0168_1[1].mp3",
    title: "A Plan for the People - Page 168",
    tags: ["Unit 2 Week 3"],
    index: "141"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0169_0[1].mp3",
    title: "A Plan for the People - Page 169",
    tags: ["Unit 2 Week 3"],
    index: "142"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0169_1[1].mp3",
    title: "A Plan for the People - Page 169",
    tags: ["Unit 2 Week 3"],
    index: "143"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0170_0[1].mp3",
    title: "A Plan for the People - Page 170",
    tags: ["Unit 2 Week 3"],
    index: "144"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0170_1[1].mp3",
    title: "A Plan for the People - Page 170",
    tags: ["Unit 2 Week 3"],
    index: "145"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0171_0[1].mp3",
    title: "A Plan for the People - Page 171",
    tags: ["Unit 2 Week 3"],
    index: "146"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0171_1[1].mp3",
    title: "A Plan for the People - Page 171",
    tags: ["Unit 2 Week 3"],
    index: "147"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0171_2[1].mp3",
    title: "A Plan for the People - Page 171",
    tags: ["Unit 2 Week 3"],
    index: "148"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0172_0[1].mp3",
    title: "Whooping Cranes in Danger - Page 172",
    tags: ["Unit 2 Week 4"],
    index: "149"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0173_0[1].mp3",
    title: "Whooping Cranes in Danger - Page 173",
    tags: ["Unit 2 Week 4"],
    index: "150"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0174_0[1].mp3",
    title: "Whooping Cranes in Danger - Page 174",
    tags: ["Unit 2 Week 4"],
    index: "150"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0174_1[1].mp3",
    title: "Whooping Cranes in Danger - Page 174",
    tags: ["Unit 2 Week 4"],
    index: "151"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0175_0[1].mp3",
    title: "Whooping Cranes in Danger - Page 175",
    tags: ["Unit 2 Week 4"],
    index: "152"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0175_1[1].mp3",
    title: "Whooping Cranes in Danger - Page 175",
    tags: ["Unit 2 Week 4"],
    index: "153"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0176_0[1].mp3",
    title: "Whooping Cranes in Danger - Page 175",
    tags: ["Unit 2 Week 4"],
    index: "154"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0176_1[1].mp3",
    title: "Whooping Cranes in Danger - Page 176",
    tags: ["Unit 2 Week 4"],
    index: "155"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0177_0[1].mp3",
    title: "Whooping Cranes in Danger - Page 177",
    tags: ["Unit 2 Week 4"],
    index: "156"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0177_1[1].mp3",
    title: "Whooping Cranes in Danger - Page 178",
    tags: ["Unit 2 Week 4"],
    index: "157"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0178_0[1].mp3",
    title: "Whooping Cranes in Danger - Page 178",
    tags: ["Unit 2 Week 4"],
    index: "158"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0178_1[1].mp3",
    title: "Whooping Cranes in Danger - Page 178",
    tags: ["Unit 2 Week 4"],
    index: "159"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0179_0[1].mp3",
    title: "Whooping Cranes in Danger - Page 179",
    tags: ["Unit 2 Week 4"],
    index: "160"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0179_1[1].mp3",
    title: "Whooping Cranes in Danger - Page 179",
    tags: ["Unit 2 Week 4"],
    index: "162"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0179_2[1].mp3",
    title: "Whooping Cranes in Danger - Page 179",
    tags: ["Unit 2 Week 4"],
    index: "163"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0179_3[1].mp3",
    title: "Whooping Cranes in Danger - Page 179",
    tags: ["Unit 2 Week 4"],
    index: "164"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0180_0[1].mp3",
    title: "Whooping Cranes in Danger - Page 180",
    tags: ["Unit 2 Week 4"],
    index: "165"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0180_1[1].mp3",
    title: "Whooping Cranes in Danger - Page 180",
    tags: ["Unit 2 Week 4"],
    index: "166"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0181_0[1].mp3",
    title: "Whooping Cranes in Danger - Page 181",
    tags: ["Unit 2 Week 4"],
    index: "167"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0181_1[1].mp3",
    title: "Whooping Cranes in Danger - Page 181",
    tags: ["Unit 2 Week 4"],
    index: "168"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0182_0[1].mp3",
    title: "Whooping Cranes in Danger - Page 182",
    tags: ["Unit 2 Week 4"],
    index: "169"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0182_1[1].mp3",
    title: "Whooping Cranes in Danger - Page 182",
    tags: ["Unit 2 Week 4"],
    index: "170"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0183_0[1].mp3",
    title: "Whooping Cranes in Danger - Page 183",
    tags: ["Unit 2 Week 4"],
    index: "171"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0186_0[1].mp3",
    title: "Help the Manatees - Page 186",
    tags: ["Unit 2 Week 4"],
    index: "172"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0186_1[1].mp3",
    title: "Help the Manatees - Page 186",
    tags: ["Unit 2 Week 4"],
    index: "173"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0186_2[1].mp3",
    title: "Help the Manatees - Page 186",
    tags: ["Unit 2 Week 4"],
    index: "174"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0186_3[1].mp3",
    title: "Help the Manatees - Page 186",
    tags: ["Unit 2 Week 4"],
    index: "175"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0187_0[1].mp3",
    title: "Help the Manatees - Page 187",
    tags: ["Unit 2 Week 4"],
    index: "176"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0187_1[1].mp3",
    title: "Help the Manatees - Page 187",
    tags: ["Unit 2 Week 4"],
    index: "177"
  },
  {
    url: "https://hlwsdtech.com/listening/media/0187_2[1].mp3",
    title: "Help the Manatees - Page 187",
    tags: ["Unit 2 Week 4"],
    index: "178"
  }
];

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Player trackList={tracks} />
      {/* <h1>Installation</h1>
      <SyntaxHighlighter language="bash" style={coldarkDark}>
        {`npm install @madzadev/audio-player`}
      </SyntaxHighlighter>
      <p className="note">
      If you are using NPM v7 or above, you need to add <code>--legacy-peer-deps</code> at the end of the command above.
      </p>
      <h1>Usage</h1>
      <SyntaxHighlighter language="javascript" style={coldarkDark}>
        {`import Player from '@madzadev/audio-player'
        import '@madzadev/audio-player/dist/index.css'`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={coldarkDark}>
        {`const tracks = [
          {
            url: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
            title: 'Madza - Chords of Life',
            tags: ['house']
          },
          {
            url: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
            title: 'Madza - Late Night Drive',
            tags: ['dnb']
          },
          {
            url: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
            title: 'Madza - Persistence',
            tags: ['dubstep']
          }
        ]`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {`<Player trackList={tracks} />`}
      </SyntaxHighlighter>
      <p className="warning">
        <code>'trackList'</code> is the mandatory prop and requires to pass in
        an array consisting of objects with <code>url</code>, <code>title</code>{" "}
        and <code>tags</code> keys.
      </p>
      <h1>Config for NextJS</h1>
      <p className="warning">
        If you are working in NextJS, there are 3 additional steps:
      </p>
      <p>
        1. <code>npm i next-images next-transpile-modules</code>
      </p>
      <p>
        2. Create <code>next.config.js</code> in your project's root
      </p>
      <p>3. Paste this in the newly created config file:</p>
      <SyntaxHighlighter language="javascript" style={coldarkDark}>
        {`const withImages = require("next-images");
        const withTM = require("next-transpile-modules")(["@madzadev/audio-player"]);

        module.exports = withImages(withTM());`}
      </SyntaxHighlighter>
      <h1>Options</h1>
      <p className="note">
        The default values of available options props are displayed.
      </p>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {`<Player
        trackList={tracks}
        includeTags={true}
        includeSearch={true}
        showPlaylist={true}
        autoPlayNextTrack={true}
      />`}
      </SyntaxHighlighter>
      <h1>Color schemas</h1>
      <p className="warning">
        You can further customize the player UI by editing the colors variable
        below.
      </p>
      <p className="note">
        Pre-defined color schemes are planned in the future.
      </p>
      <SyntaxHighlighter language="javascript" style={coldarkDark}>
        {`const colors = \`html {
          --tagsBackground: #9440f3;
          --tagsText: #ffffff;
          --tagsBackgroundHoverActive: #2cc0a0;
          --tagsTextHoverActive: #ffffff;
          --searchBackground: #18191f;
          --searchText: #ffffff;
          --searchPlaceHolder: #575a77;
          --playerBackground: #18191f;
          --titleColor: #ffffff; 
          --timeColor: #ffffff;
          --progressSlider: #9440f3;
          --progressUsed: #ffffff;
          --progressLeft: #151616;
          --volumeSlider: #9440f3;
          --volumeUsed: #ffffff;
          --volumeLeft:  #151616;
          --playlistBackground: #18191f;
          --playlistText: #575a77;
          --playlistBackgroundHoverActive:  #18191f;
          --playlistTextHoverActive: #ffffff;
      }\``}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {`<Player
        trackList={tracks}
        customColorScheme={colors}
      />`}
      </SyntaxHighlighter>
      <h1>Final notes</h1>
      <p className="warning">
        It's recommended to use CMS like a{" "}
        <a href="https://www.contentful.com">Contentful</a> or{" "}
        <a href="https://www.datocms.com">DatoCMS</a> to manage your audio files
        and access them via API.
      </p> */}
      <Footer />
    </Wrapper>
  );
};

export default App;
