import { ak as is_promise, al as get_current_component, am as set_current_component, g as group_outros, t as transition_out, c as check_outros, d as transition_in, an as flush, x as getMsg, ao as derived, ap as session, aq as onMessage, ar as writable, as as listenForMessages, aj as nProgress, S as SvelteComponent, i as init, s as safe_not_equal, j as create_slot, k as element, l as space, m as attr, n as toggle_class, a as insert, o as append, u as update_slot_base, q as get_all_dirty_from_scope, r as get_slot_changes, f as detach, v as text, w as set_data, U as ensure_array_like, p as listen, G as noop, at as destroy_each, au as init_binding_group, av as set_input_value, y as create_component, A as mount_component, B as destroy_component, C as component_subscribe, D as storageData, N as binding_callbacks, aw as bind, ax as add_flush_callback, ay as run_all, az as getRedditBaseUrl, I as storage, b as browser, aA as to_number, O as OpenInNew, X as add_render_callback, aB as select_option, ai as applyTheme, aC as DEFAULT_OPTIONS$1, aD as select_value, J as sendMessage, e as empty, aE as action_destroyer, H as SettingsIcon, aF as assign, aG as set_attributes, T as is_function, aH as compute_rest_props, aI as exclude_internal_props, h as bubble, a3 as CheckMarkIcon, M as onMount, a6 as NotifyOffIcon, a7 as NotifyIcon, z as getInboxUrl, aJ as mapObjToQueryStr, aK as generateId, Q as RedditObjectKind, aL as filterPostDataProperties, ag as getUserProfileUrl, aM as getAccountByScope, ad as getSubredditUrl, af as getSearchQueryUrl, aN as set_store_value, a4 as WarningIcon, ae as formatError, aO as debounce$2, aP as testMultireddit, V as update_keyed_each, ah as outro_and_destroy_block, Y as create_bidirectional_transition, K as HtmlTag, L as quadOut, aQ as fade, Z as slide, a5 as FilterOnIcon, W as fix_and_outro_and_destroy_block, _ as fix_position, $ as add_transform, a0 as create_animation, a1 as flip$2, P as src_url_equal, aR as tick, aS as construct_svelte_component, R as RefreshIcon } from "./apply-theme-DaGwrYRB.js";

function handle_promise(promise, info) {
    const token = info.token = {};
    function update(type, index, key, value) {
        if (info.token !== token) return;
        info.resolved = value;
        let child_ctx = info.ctx;
        if (key !== void 0) {
            child_ctx = child_ctx.slice();
            child_ctx[key] = value;
        }
        const block = type && (info.current = type)(child_ctx);
        let needs_flush = false;
        if (info.block) {
            if (info.blocks) info.blocks.forEach(((block2, i) => {
                if (i !== index && block2) {
                    group_outros();
                    transition_out(block2, 1, 1, (() => {
                        if (info.blocks[i] === block2) info.blocks[i] = null;
                    }));
                    check_outros();
                }
            })); else info.block.d(1);
            block.c();
            transition_in(block, 1);
            block.m(info.mount(), info.anchor);
            needs_flush = true;
        }
        info.block = block;
        if (info.blocks) info.blocks[index] = block;
        if (needs_flush) flush();
    }
    if (is_promise(promise)) {
        const current_component = get_current_component();
        promise.then((value => {
            set_current_component(current_component);
            update(info.then, 1, info.value, value);
            set_current_component(null);
        }), (error => {
            set_current_component(current_component);
            update(info.catch, 2, info.error, error);
            set_current_component(null);
            if (!info.hasCatch) throw error;
        }));
        if (info.current !== info.pending) {
            update(info.pending, 0);
            return true;
        }
    } else {
        if (info.current !== info.then) {
            update(info.then, 1, info.value, promise);
            return true;
        }
        info.resolved = promise;
    }
}

function update_await_block_branch(info, ctx, dirty) {
    const child_ctx = ctx.slice();
    const {resolved: resolved} = info;
    if (info.current === info.then) child_ctx[info.value] = resolved;
    if (info.current === info.catch) child_ctx[info.error] = resolved;
    info.block.p(child_ctx, dirty);
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = {
        $$scope: 1
    };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) if (!(key in n)) to_null_out[key] = 1;
            for (const key in n) if (!accounted_for[key]) {
                update[key] = n[key];
                accounted_for[key] = 1;
            }
            levels[i] = n;
        } else for (const key in o) accounted_for[key] = 1;
    }
    for (const key in to_null_out) if (!(key in update)) update[key] = void 0;
    return update;
}

const AccountIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" fill="currentColor"/></svg>\n';

const AddIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5zm-1-3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14z" fill="currentColor"/></g></svg>\n';

const BackupIcon = '<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.55502 2.016C12.306 3.423 13.391 6.804 11.984 9.555C10.577 12.306 7.20302 13.391 4.44502 11.984C3.18508 11.3388 2.21872 10.2372 1.74302 8.904L2.89102 8.183C3.05177 8.74561 3.32598 9.26936 3.69677 9.72201C4.06756 10.1747 4.52707 10.5466 5.04702 10.815C7.15402 11.893 9.73002 11.06 10.808 8.953C11.0708 8.45234 11.2317 7.90458 11.2815 7.34137C11.3313 6.77815 11.2691 6.21065 11.0983 5.67164C10.9275 5.13263 10.6516 4.6328 10.2866 4.20103C9.92154 3.76926 9.47455 3.4141 8.97145 3.15607C8.46834 2.89805 7.91909 2.74227 7.35544 2.69774C6.79178 2.6532 6.22489 2.7208 5.68751 2.89662C5.15012 3.07244 4.65291 3.35301 4.22458 3.7221C3.79626 4.09119 3.44531 4.54149 3.19202 5.047L4.50802 5.726L1.04302 7.882L0.77002 3.808L2.01602 4.445C3.43002 1.68 6.82502 0.623 9.55502 2.016ZM6.50302 7.497C6.43805 7.43166 6.38666 7.3541 6.35182 7.2688C6.31698 7.1835 6.29937 7.09214 6.30002 7C6.30002 6.951 6.32102 6.916 6.32802 6.867H6.32102L7.00002 3.5L7.67902 6.867L9.80002 9.1L6.65002 7.616L6.66402 7.602C6.60802 7.574 6.55202 7.539 6.50302 7.497Z" fill="currentColor"/>\n</svg>\n';

const BellIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>\n';

const CopyIcon = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2Z"/><path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"/></g></svg>\n';

const DeleteIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">\n    <path d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z" fill="currentColor"/>\n</svg>\n';

const edit = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621Z"/><path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"/></g></svg>\n';

const filterOff = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">\n<path d="M34 6.4c0-.8-.7-1.4-1.5-1.4H10.3l2 2H32v.6l-9.6 9.6l1.4 1.4L33.4 9c.4-.4.6-.9.6-1.4V6.5v-.1z" class="clr-i-outline clr-i-outline-path-1" fill="currentColor"/>\n<path d="M2.7 3l2 2h-1c-.8-.1-1.6.5-1.7 1.3v1.1c0 .5.2 1 .6 1.4L14 20.2v10.3l1.9.8V19.4L4 7.5V7h2.7L20 20.3v12.9l2 .8V22.3l10.1 10.1l1.4-1.4L4.1 1.6L2.7 3z" class="clr-i-outline clr-i-outline-path-2" fill="currentColor"/>\n</svg>\n';

const GithubIcon = '<svg\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    aria-hidden="true"\n    role="img"\n    viewBox="0 0 24 24"\n>\n    <g stroke-width="1.5" fill="none">\n        <path\n            d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"\n            stroke="currentColor"\n            stroke-linecap="round"\n            stroke-linejoin="round"\n        />\n        <path\n            d="M9 20.027c-3 .973-5.5 0-7-3"\n            stroke="currentColor"\n            stroke-linecap="round"\n            stroke-linejoin="round"\n        />\n    </g>\n</svg>\n';

const HeartIcon = '<svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path\n        d="M8.14077 4.37835L8.49997 5.4353L8.85923 4.37835C9.13278 3.57335 9.5846 2.99003 10.2092 2.60224C10.8399 2.2107 11.6771 2 12.7471 2C14.2341 2 15.2589 2.91856 15.7247 4.18923C16.1951 5.47233 16.0758 7.07961 15.2649 8.345C14.1556 10.076 11.9146 12.2931 8.49997 15C5.0854 12.2931 2.84444 10.076 1.73511 8.345C0.924177 7.07961 0.804864 5.47233 1.27528 4.18923C1.74114 2.91856 2.7659 2 4.2529 2C5.32289 2 6.16009 2.2107 6.79079 2.60224C7.4154 2.99003 7.86722 3.57335 8.14077 4.37835Z"\n        fill="currentColor" \n        stroke="black"\n    />\n</svg>\n';

const HelpCircleIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" >\n    <circle cx="12" cy="12" r="10"></circle>\n    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>\n    <line x1="12" y1="17" x2="12.01" y2="17"></line>\n</svg>\n';

const JsonIcon = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM4.151 15.29a1.176 1.176 0 0 1-.111-.449h.764a.578.578 0 0 0 .255.384c.07.049.154.087.25.114c.095.028.201.041.319.041c.164 0 .301-.023.413-.07a.559.559 0 0 0 .255-.193a.507.507 0 0 0 .084-.29a.387.387 0 0 0-.152-.326c-.101-.08-.256-.144-.463-.193l-.618-.143a1.72 1.72 0 0 1-.539-.214a1.001 1.001 0 0 1-.352-.367a1.068 1.068 0 0 1-.123-.524c0-.244.064-.457.19-.639c.128-.181.304-.322.528-.422c.225-.1.484-.149.777-.149c.304 0 .564.05.779.152c.217.102.384.239.5.41c.12.17.186.359.2.566h-.75a.56.56 0 0 0-.12-.258a.624.624 0 0 0-.246-.181a.923.923 0 0 0-.37-.068c-.216 0-.387.05-.512.152a.472.472 0 0 0-.185.384c0 .121.048.22.144.3a.97.97 0 0 0 .404.175l.621.143c.217.05.406.12.566.211a1 1 0 0 1 .375.358c.09.148.135.335.135.56c0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158c-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252a1.13 1.13 0 0 1-.29-.375Zm-3.104-.033a1.32 1.32 0 0 1-.082-.466h.764a.576.576 0 0 0 .074.27a.499.499 0 0 0 .454.246c.19 0 .33-.055.422-.164c.091-.11.137-.265.137-.466v-2.745h.791v2.725c0 .44-.119.774-.357 1.005c-.237.23-.565.345-.985.345a1.59 1.59 0 0 1-.568-.094a1.145 1.145 0 0 1-.407-.266a1.14 1.14 0 0 1-.243-.39Zm9.091-1.585v.522c0 .256-.039.47-.117.641a.862.862 0 0 1-.322.387a.877.877 0 0 1-.47.126a.883.883 0 0 1-.47-.126a.87.87 0 0 1-.32-.387a1.55 1.55 0 0 1-.117-.641v-.522c0-.258.039-.471.117-.641a.87.87 0 0 1 .32-.387a.868.868 0 0 1 .47-.129c.177 0 .333.043.47.129a.862.862 0 0 1 .322.387c.078.17.117.383.117.641Zm.803.519v-.513c0-.377-.069-.701-.205-.973a1.46 1.46 0 0 0-.59-.63c-.253-.146-.559-.22-.916-.22c-.356 0-.662.074-.92.22a1.441 1.441 0 0 0-.589.628c-.137.271-.205.596-.205.975v.513c0 .375.068.699.205.973c.137.271.333.48.589.626c.258.145.564.217.92.217c.357 0 .663-.072.917-.217c.256-.146.452-.355.589-.626c.136-.274.205-.598.205-.973Zm1.29-.935v2.675h-.746v-3.999h.662l1.752 2.66h.032v-2.66h.75v4h-.656l-1.761-2.676h-.032Z"/></svg>\n';

const LoadingIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M988 548c-19.9 0-36-16.1-36-36c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3c.1 19.9-16 36-35.9 36z" fill="currentColor"/></svg>\n';

const LoginIcon = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9m6-9l-4-4m4 4l-4 4m4-4H5"/></svg>\n';

const LogoIcon = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 61.5 42">\n<style>\n    .antenna-circle { fill: none; stroke: currentColor; }\n    .eye { fill: red; stroke: none; }\n</style>\n    <path stroke="currentColor" stroke-miterlimit="10px" stroke-width="4px" fill="none" d="M28,18.5c0-5.9,7.3-17.3,18-12"/>\n    <path stroke="currentColor" stroke-miterlimit="10px" stroke-width="4px" fill="none" d="M1.5,29.9c1-1.1,21-20.9,53-0.9"/>\n    <circle stroke-miterlimit="10" stroke-width="4px" class="antenna-circle" cx="53" cy="8.5" r="6.5"/>\n    <circle class="eye" cx="15" cy="37.5" r="4.5"/>\n    <circle class="eye" cx="41" cy="37.5" r="4.5"/>\n</svg>\n';

const PlayIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>\n';

const QRCode = '<svg\n    class="h-5 w-auto"\n    xmlns="http://www.w3.org/2000/svg"\n    preserveAspectRatio="xMidYMid meet"\n    viewBox="0 0 28 28"\n>\n    <path\n        fill="currentColor"\n        d="M10.75 15A2.25 2.25 0 0 1 13 17.25v5.5A2.25 2.25 0 0 1 10.75 25h-5.5A2.25 2.25 0 0 1 3 22.75v-5.5A2.25 2.25 0 0 1 5.25 15h5.5Zm7.585 0v3.333h3.332v3.334h-3.332v3.332H15v-3.333h3.333v-3.333H15V15h3.334ZM25 21.666V25h-3.333v-3.333H25ZM10.75 16.5h-5.5a.75.75 0 0 0-.75.75v5.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75Zm-1.25 2v3h-3v-3h3ZM25 15v3.333h-3.333V15H25ZM10.75 3A2.25 2.25 0 0 1 13 5.25v5.5A2.25 2.25 0 0 1 10.75 13h-5.5A2.25 2.25 0 0 1 3 10.75v-5.5A2.25 2.25 0 0 1 5.25 3h5.5Zm12 0A2.25 2.25 0 0 1 25 5.25v5.5A2.25 2.25 0 0 1 22.75 13h-5.5A2.25 2.25 0 0 1 15 10.75v-5.5A2.25 2.25 0 0 1 17.25 3h5.5Zm-12 1.5h-5.5a.75.75 0 0 0-.75.75v5.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75Zm12 0h-5.5a.75.75 0 0 0-.75.75v5.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75ZM9.5 6.5v3h-3v-3h3Zm12 0v3h-3v-3h3Z"\n    />\n</svg>\n';

const QRCodeBTC = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h37v37H0z"/><path stroke="#000000" d="M4 4.5h7m4 0h3m2 0h5m1 0h7M4 5.5h1m5 0h1m2 0h2m3 0h3m1 0h1m1 0h1m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h3m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h6m1 0h3m2 0h1m1 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h1m1 0h2m2 0h1m1 0h1m2 0h2m1 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h4m1 0h1m1 0h3m4 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h2m1 0h1m2 0h1m1 0h1m2 0h1M4 12.5h1m1 0h5m3 0h1m2 0h5m1 0h1m2 0h5M5 13.5h1m2 0h2m2 0h7m1 0h1m1 0h3m1 0h3m3 0h1M4 14.5h2m2 0h1m1 0h1m1 0h4m3 0h1m1 0h1m3 0h2m2 0h1M4 15.5h2m3 0h1m6 0h1m3 0h1m1 0h3m2 0h2M5 16.5h1m3 0h3m2 0h1m1 0h6m7 0h3M4 17.5h1m1 0h2m1 0h1m1 0h1m1 0h1m1 0h2m3 0h1m1 0h3m1 0h4m2 0h1M7 18.5h1m1 0h3m1 0h1m2 0h4m4 0h3m3 0h2M4 19.5h1m4 0h1m1 0h6m1 0h1m5 0h1m3 0h2m2 0h1M6 20.5h1m2 0h7m1 0h2m2 0h2m1 0h2m1 0h1m1 0h3M4 21.5h2m2 0h1m2 0h1m2 0h1m1 0h3m1 0h1m2 0h1m2 0h4m1 0h2M4 22.5h1m2 0h2m1 0h1m1 0h1m4 0h1m1 0h4m4 0h4M4 23.5h1m1 0h1m1 0h1m3 0h1m1 0h2m3 0h1m4 0h1m1 0h3m2 0h2M4 24.5h1m1 0h1m1 0h5m2 0h3m1 0h4m1 0h8M12 25.5h2m2 0h1m1 0h1m1 0h1m2 0h2m3 0h2m1 0h2M4 26.5h7m3 0h1m3 0h4m1 0h2m1 0h1m1 0h1m1 0h1M4 27.5h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h3m1 0h1m1 0h1m3 0h1m2 0h2M4 28.5h1m1 0h3m1 0h1m1 0h1m3 0h1m2 0h3m2 0h9M4 29.5h1m1 0h3m1 0h1m1 0h2m1 0h2m4 0h1m8 0h3M4 30.5h1m1 0h3m1 0h1m1 0h1m3 0h2m1 0h4m1 0h5m2 0h1M4 31.5h1m5 0h1m5 0h3m3 0h3m4 0h1m1 0h1M4 32.5h7m1 0h2m5 0h3m1 0h1m4 0h3"/></svg>\n';

const QRCodeDoge = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h37v37H0z"/><path stroke="#000000" d="M4 4.5h7m2 0h2m2 0h3m3 0h2m1 0h7M4 5.5h1m5 0h1m3 0h1m2 0h6m1 0h1m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h2m1 0h1m1 0h1m1 0h1m2 0h2m2 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h1m5 0h2m1 0h1m2 0h1m1 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h2m5 0h2m2 0h2m1 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h1m1 0h1m11 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h3m1 0h1m1 0h1m1 0h1m1 0h2M4 12.5h1m1 0h5m2 0h1m7 0h4m1 0h5M4 13.5h1m2 0h1m1 0h1m4 0h6m4 0h6m1 0h2M5 14.5h1m1 0h2m1 0h2m1 0h1m3 0h6m1 0h1m3 0h1M4 15.5h3m5 0h2m1 0h3m1 0h2m4 0h2m2 0h1M8 16.5h4m2 0h1m3 0h2m3 0h2m3 0h1m1 0h3M4 17.5h3m2 0h1m2 0h3m5 0h4m1 0h1m1 0h3m2 0h1M5 18.5h2m1 0h1m1 0h1m1 0h1m1 0h1m4 0h1m2 0h1M8 19.5h2m1 0h2m2 0h2m1 0h2m2 0h6m1 0h1m2 0h1M4 20.5h1m1 0h1m1 0h1m1 0h1m4 0h1m4 0h3m1 0h2m4 0h1M4 21.5h4m1 0h1m7 0h2m1 0h1m2 0h2m1 0h6M4 22.5h1m5 0h1m1 0h2m1 0h5m1 0h2m2 0h1m3 0h2M4 23.5h1m3 0h1m2 0h1m5 0h1m8 0h4m1 0h1M4 24.5h1m1 0h3m1 0h1m2 0h2m1 0h1m1 0h5m1 0h5M12 25.5h1m1 0h3m2 0h3m1 0h2m3 0h1m2 0h1M4 26.5h7m2 0h1m1 0h2m2 0h1m2 0h3m1 0h1m1 0h2M4 27.5h1m5 0h1m1 0h2m4 0h3m2 0h2m3 0h2m1 0h2M4 28.5h1m1 0h3m1 0h1m1 0h1m2 0h2m2 0h4m1 0h8M4 29.5h1m1 0h3m1 0h1m1 0h1m4 0h2m2 0h1m7 0h1m1 0h2M4 30.5h1m1 0h3m1 0h1m1 0h3m3 0h3m1 0h1m1 0h1m1 0h4m1 0h1M4 31.5h1m5 0h1m5 0h1m1 0h2m3 0h3m2 0h2m1 0h1M4 32.5h7m1 0h6m3 0h1m1 0h1m6 0h1"/></svg>\n';

const QRCodeETH = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h37v37H0z"/><path stroke="#000000" d="M4 4.5h7m2 0h1m3 0h2m1 0h1m5 0h7M4 5.5h1m5 0h1m6 0h1m4 0h2m2 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h1m2 0h1m3 0h2m1 0h1m3 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h2m5 0h1m2 0h1m1 0h1m1 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h2m1 0h2m1 0h2m1 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h2m6 0h1m1 0h1m1 0h1m1 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h1m4 0h2m2 0h1m2 0h1M4 12.5h1m1 0h5m3 0h1m3 0h3m1 0h1m1 0h1m1 0h5M5 13.5h2m4 0h1m1 0h1m1 0h2m1 0h2m1 0h8m3 0h1M5 14.5h2m1 0h1m1 0h2m1 0h3m1 0h1m4 0h1m2 0h1m2 0h4M4 15.5h3m1 0h1m3 0h1m4 0h1m1 0h5m3 0h2M4 16.5h1m3 0h1m1 0h1m1 0h2m2 0h1m2 0h1m1 0h1m1 0h3m2 0h3M4 17.5h1m1 0h2m1 0h1m6 0h1m1 0h2m2 0h1m3 0h4m1 0h1M4 18.5h1m1 0h3m1 0h2m1 0h1m1 0h2m2 0h1m7 0h1m2 0h1M6 19.5h1m4 0h6m2 0h4m2 0h2m1 0h2m1 0h1M8 20.5h1m1 0h2m1 0h2m5 0h1m3 0h1m2 0h1m3 0h2M4 21.5h3m1 0h1m2 0h3m2 0h2m3 0h2m2 0h2m1 0h1m3 0h1M4 22.5h1m1 0h1m1 0h4m2 0h6m2 0h1m1 0h1m2 0h4M4 23.5h1m1 0h2m1 0h1m1 0h2m1 0h1m2 0h1m3 0h2m2 0h2m1 0h2m1 0h1M4 24.5h1m1 0h1m2 0h3m2 0h3m1 0h2m4 0h5m1 0h2M12 25.5h5m2 0h1m1 0h1m2 0h1m3 0h2m2 0h1M4 26.5h7m2 0h3m4 0h1m3 0h1m1 0h1m1 0h2m1 0h1M4 27.5h1m5 0h1m1 0h1m5 0h2m1 0h1m1 0h2m3 0h2m1 0h2M4 28.5h1m1 0h3m1 0h1m1 0h1m1 0h3m2 0h1m2 0h1m1 0h5m1 0h2M4 29.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h3m1 0h2m2 0h1M4 30.5h1m1 0h3m1 0h1m1 0h1m2 0h3m5 0h1m2 0h4m1 0h1M4 31.5h1m5 0h1m3 0h3m1 0h2m1 0h1m1 0h3m1 0h3m1 0h1M4 32.5h7m1 0h1m1 0h1m2 0h1m1 0h2m1 0h1m2 0h4"/></svg>\n';

const QRCodeLTC = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h37v37H0z"/><path stroke="#000000" d="M4 4.5h7m3 0h1m1 0h1m2 0h5m2 0h7M4 5.5h1m5 0h1m1 0h2m1 0h1m1 0h2m1 0h1m1 0h1m3 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h6m1 0h1m3 0h1m2 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h1m1 0h1m5 0h1m3 0h1m1 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m3 0h1m1 0h1m2 0h2m1 0h3m1 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m2 0h2m1 0h1m2 0h1m1 0h1m4 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h3m1 0h1m1 0h3m1 0h2M4 12.5h1m5 0h1m1 0h2m1 0h1m5 0h2m1 0h3m2 0h3M11 13.5h3m1 0h3m2 0h1m4 0h4m1 0h2M4 14.5h1m1 0h2m1 0h3m2 0h6m1 0h2m2 0h3m2 0h1M7 15.5h1m3 0h2m1 0h2m1 0h1m1 0h1m2 0h1m1 0h1m2 0h3m2 0h1M5 16.5h2m1 0h1m1 0h2m1 0h1m1 0h3m4 0h3m1 0h1m3 0h2M5 17.5h3m1 0h1m1 0h1m1 0h4m3 0h1m2 0h2m1 0h1m1 0h2m1 0h2M4 18.5h1m1 0h3m1 0h1m1 0h2m2 0h1m2 0h1m1 0h2m1 0h1m1 0h2m2 0h1M6 19.5h1m8 0h2m2 0h1m2 0h1m1 0h7m1 0h1M5 20.5h1m3 0h2m3 0h1m4 0h3m1 0h2m3 0h1M4 21.5h1m1 0h2m4 0h1m1 0h1m1 0h3m1 0h3m1 0h1m2 0h2m2 0h1M4 22.5h3m2 0h3m4 0h1m2 0h1m3 0h1m2 0h2m4 0h1M4 23.5h1m3 0h2m3 0h1m3 0h1m1 0h2m3 0h1m3 0h2M4 24.5h1m2 0h1m2 0h1m1 0h3m1 0h1m1 0h1m4 0h7m2 0h1M12 25.5h3m1 0h1m1 0h2m2 0h1m1 0h1m3 0h3m1 0h1M4 26.5h7m2 0h1m1 0h2m2 0h2m1 0h1m1 0h1m1 0h1m1 0h1M4 27.5h1m5 0h1m3 0h1m3 0h3m2 0h2m3 0h2m2 0h1M4 28.5h1m1 0h3m1 0h1m2 0h1m2 0h5m2 0h6m1 0h3M4 29.5h1m1 0h3m1 0h1m2 0h3m1 0h2m1 0h1m3 0h2m3 0h1m2 0h1M4 30.5h1m1 0h3m1 0h1m3 0h3m1 0h2m1 0h2m1 0h2m1 0h3m1 0h1M4 31.5h1m5 0h1m2 0h8m1 0h1m3 0h2m1 0h2m1 0h1M4 32.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1m3 0h1m2 0h1"/></svg>\n';

const QRCodeXLM = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h37v37H0z"/><path stroke="#000000" d="M4 4.5h7m4 0h1m1 0h1m1 0h1m2 0h3m1 0h7M4 5.5h1m5 0h1m2 0h3m3 0h2m2 0h2m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h1m3 0h1m2 0h6m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h4m1 0h3m1 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h2m1 0h2m2 0h1m1 0h2m3 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h2m8 0h3m1 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h2m1 0h3m1 0h1m4 0h1M4 12.5h1m1 0h5m3 0h2m2 0h1m1 0h1m1 0h3m1 0h5M4 13.5h1m1 0h4m2 0h1m5 0h1m2 0h5m2 0h2m1 0h1M4 14.5h3m3 0h6m4 0h1m7 0h1m1 0h1M4 15.5h2m2 0h1m4 0h1m6 0h1m2 0h1m4 0h1m1 0h2M5 16.5h1m1 0h2m1 0h1m2 0h1m1 0h2m2 0h1m4 0h1m2 0h3m1 0h1M4 17.5h1m1 0h4m1 0h1m2 0h4m1 0h4m2 0h3m1 0h3M5 18.5h3m1 0h3m5 0h2m1 0h2m1 0h2m2 0h1m1 0h1m1 0h2M9 19.5h1m3 0h1m1 0h1m1 0h1m1 0h1m2 0h1m2 0h2m1 0h3m1 0h1M5 20.5h1m2 0h3m5 0h1m1 0h1m2 0h5m2 0h1m1 0h3M4 21.5h1m1 0h3m2 0h3m1 0h2m2 0h6m3 0h1m2 0h1M4 22.5h1m4 0h3m1 0h1m2 0h1m3 0h3m3 0h2m4 0h1M4 23.5h1m2 0h1m1 0h1m3 0h2m1 0h1m1 0h2m2 0h4m1 0h3M4 24.5h1m1 0h6m2 0h2m5 0h1m2 0h5m1 0h1m1 0h1M12 25.5h2m1 0h4m3 0h1m1 0h1m3 0h5M4 26.5h7m2 0h3m1 0h2m3 0h1m1 0h1m1 0h1m1 0h4M4 27.5h1m5 0h1m1 0h1m1 0h2m1 0h1m2 0h5m3 0h1m2 0h1M4 28.5h1m1 0h3m1 0h1m1 0h3m3 0h3m3 0h6m2 0h1M4 29.5h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h1m1 0h1m3 0h2m1 0h2M4 30.5h1m1 0h3m1 0h1m1 0h2m5 0h4m1 0h4m1 0h3M4 31.5h1m5 0h1m3 0h1m1 0h2m2 0h2m1 0h2m1 0h2m3 0h2M4 32.5h7m1 0h1m1 0h1m1 0h3m2 0h2m1 0h1m3 0h1m2 0h1"/></svg>\n';

const RefreshIcon2 = '<svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g fill="currentColor">\n    <path d="M18.2292 18.2292C19.9479 18.2292 21.3542 16.8229 21.3542 15.1042V9.8958C21.3542 8.1771 19.9479 6.7708 18.2292 6.7708V4.6875C21.0937 4.6875 23.4375 7.0313 23.4375 9.8958V15.1042C23.4375 17.9687 21.0937 20.3125 18.2292 20.3125H12.3958V18.2292H18.2292Z" />\n    <path d="M13.5417 22.6042L9.16666 19.2709L13.5417 15.9375V22.6042Z" />\n    <path d="M6.77086 6.7708C5.05211 6.7708 3.64586 8.1771 3.64586 9.8958V15.1042C3.64586 16.8229 5.05211 18.2292 6.77086 18.2292V20.3125C3.90628 20.3125 1.56253 17.9687 1.56253 15.1042V9.8958C1.56253 7.0313 3.90628 4.6875 6.77086 4.6875H13.0209V6.7708H6.77086Z" />\n    <path d="M11.4583 9.06262L15.8333 5.72922L11.4583 2.39592V9.06262Z" />\n</g>\n</svg>\n';

const SaveIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M704 320c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V184H184v656h656V341.8l-136-136V320zM512 730c-79.5 0-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144z" fill-opacity=".15" fill="currentColor"/><path d="M512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z" fill="currentColor"/><path d="M893.3 293.3L730.7 130.7c-.7-.7-1.4-1.3-2.1-2c-.1-.1-.3-.2-.4-.3c-.7-.7-1.5-1.3-2.2-1.9a64 64 0 0 0-22-11.7V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840z" fill="currentColor"/></svg>\n';

const StarIcon = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7L323.1 772l36.1-210.3l-152.8-149L417.6 382L512 190.7L606.4 382l211.2 30.7l-152.8 148.9z"/></svg>\n';

const UploadIcon = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"/></svg>\n';

const WatchListIcon = '<svg viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect x="1" y="2" width="13" height="1" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M4.02242 8C4.00758 7.83532 4 7.66854 4 7.5C4 7.33146 4.00758 7.16468 4.02242 7H1V8H4.02242Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M6.33692 12H1V13H9.5H14V12H12.6631C11.7684 12.63 10.6774 13 9.5 13C8.32259 13 7.23159 12.63 6.33692 12Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M9.51025 11.6429C11.7927 11.6429 13.6429 9.79267 13.6429 7.51025C13.6429 5.22783 11.7927 3.37756 9.51025 3.37756C7.22783 3.37756 5.37756 5.22783 5.37756 7.51025C5.37756 9.79267 7.22783 11.6429 9.51025 11.6429ZM9.51025 13.0205C12.5535 13.0205 15.0205 10.5535 15.0205 7.51025C15.0205 4.46702 12.5535 2 9.51025 2C6.46702 2 4 4.46702 4 7.51025C4 10.5535 6.46702 13.0205 9.51025 13.0205Z" fill="currentColor"/>\n<path d="M9.51032 4.67645V7.72593M9.51025 7.77936L11.0846 9.39952" stroke="currentColor" stroke-width="1.57437" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n';

const XCircleIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 8 8"><path d="M4 0C1.79 0 0 1.79 0 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zM2.5 1.78L4 3.28l1.5-1.5l.72.72L4.72 4l1.5 1.5l-.72.72L4 4.72l-1.5 1.5l-.72-.72L3.28 4l-1.5-1.5l.72-.72z" fill="currentColor"/></svg>\n';

const IS_TEST = false;

const config = {
    clientId: "epWgHbLDyrRfkg",
    clientSecret: "",
    redirectUri: "https://hoolgoecmeegpbidbbcefgkjegdejibd.chromiumapp.org/",
    userAgent: "chrome_extension:reddit_post_notifier:v6.1.0 (by /u/flytaly)"
};

const routes = {
    watch: {
        id: "watch",
        href: "./watch.html",
        name: getMsg("optionsNavWatch"),
        sections: {
            mail: {
                id: "mail",
                name: getMsg("optionsNavMail")
            },
            subreddit: {
                id: "subreddit",
                name: getMsg("optionsNavSubreddits")
            },
            "reddit-search": {
                id: "reddit-search",
                name: getMsg("optionsNavSearch")
            },
            "follow-user": {
                id: "follow-user",
                name: getMsg("optionsNavUsers")
            }
        }
    },
    settings: {
        id: "settings",
        href: "./index.html",
        name: getMsg("optionsNavSettings"),
        sections: {}
    },
    "import-export": {
        id: "import-export",
        href: "./import-export.html",
        name: getMsg("optionsNavImportExport"),
        sections: {}
    },
    info: {
        id: "info",
        href: "./info.html",
        name: getMsg("optionsNavInfo"),
        sections: {
            help: {
                id: "help",
                name: getMsg("optionsNavHelp")
            },
            shortcuts: {
                id: "shortcuts",
                name: getMsg("optionsNavShortcuts")
            }
        }
    },
    donate: {
        id: "donate",
        href: "./donate.html",
        name: "Donate",
        sections: {}
    }
};

function createMessageStore() {
    const {subscribe: subscribe, update: update, set: set} = writable({
        isUpdating: false,
        rateLimits: {
            used: null,
            reset: null,
            remaining: null
        }
    }, (() => {
        listenForMessages("options");
    }));
    void session.getRateLimits().then((rateLimits2 => {
        if (Date.now() > (rateLimits2.reset || 0)) return;
        update((state => ({
            ...state,
            rateLimits: rateLimits2
        })));
    }));
    onMessage("UPDATING_START", (() => {
        update((state => ({
            ...state,
            isUpdating: true
        })));
        void nProgress.start();
    }));
    onMessage("UPDATING_END", (() => {
        update((state => ({
            ...state,
            isUpdating: false
        })));
        void nProgress.done();
    }));
    function setRateLimits(rateLimits2) {
        if (rateLimits2.reset && !IS_TEST) {
            rateLimits2.reset = Date.now() + rateLimits2.reset * 1e3;
            void session.saveRateLimits(rateLimits2);
        }
        update((state => ({
            ...state,
            rateLimits: rateLimits2
        })));
    }
    onMessage("RATE_LIMITS", (payload => {
        setRateLimits({
            ...payload
        });
    }));
    return {
        subscribe: subscribe,
        update: update,
        set: set,
        setRateLimits: setRateLimits
    };
}

const msgStore = createMessageStore();

const isUpdating = derived(msgStore, (($store, set) => {
    set($store.isUpdating);
}));

const rateLimits = derived(msgStore, (($store, set) => {
    const wait2 = ($store.rateLimits.reset || 0) - Date.now();
    const timeoutId = wait2 > 0 ? setTimeout((() => {
        msgStore.update((state => ({
            ...state,
            rateLimits: {
                used: null,
                reset: null,
                remaining: null
            }
        })));
    }), wait2) : void 0;
    set({
        ...$store.rateLimits
    });
    return () => {
        clearTimeout(timeoutId);
    };
}));

function createBlockStore() {
    const {subscribe: subscribe, set: set} = writable(false);
    return {
        subscribe: subscribe,
        block: () => {
            set(true);
            setTimeout((() => {
                set(false);
            }), 2e3);
        }
    };
}

const isBlocked = createBlockStore();

const get_controls_slot_changes = dirty => ({});

const get_controls_slot_context = ctx => ({});

const get_description_slot_changes_1 = dirty => ({});

const get_description_slot_context_1 = ctx => ({});

const get_description_slot_changes = dirty => ({});

const get_description_slot_context = ctx => ({});

function create_else_block$9(ctx) {
    let div2;
    let header;
    let t0;
    let t1;
    let current;
    const description_slot_template = ctx[4].description;
    const description_slot = create_slot(description_slot_template, ctx, ctx[3], get_description_slot_context_1);
    return {
        c() {
            div2 = element("div");
            header = element("header");
            t0 = text(ctx[0]);
            t1 = space();
            if (description_slot) description_slot.c();
            attr(header, "class", "svelte-1vyvbmf");
            attr(div2, "class", "description svelte-1vyvbmf");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, header);
            append(header, t0);
            append(div2, t1);
            if (description_slot) description_slot.m(div2, null);
            current = true;
        },
        p(ctx2, dirty) {
            if (!current || dirty & 1) set_data(t0, ctx2[0]);
            if (description_slot) if (description_slot.p && (!current || dirty & 8)) update_slot_base(description_slot, description_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(description_slot_template, ctx2[3], dirty, get_description_slot_changes_1), get_description_slot_context_1);
        },
        i(local) {
            if (current) return;
            transition_in(description_slot, local);
            current = true;
        },
        o(local) {
            transition_out(description_slot, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div2);
            if (description_slot) description_slot.d(detaching);
        }
    };
}

function create_if_block$n(ctx) {
    let label;
    let header;
    let t0;
    let t1;
    let current;
    const description_slot_template = ctx[4].description;
    const description_slot = create_slot(description_slot_template, ctx, ctx[3], get_description_slot_context);
    return {
        c() {
            label = element("label");
            header = element("header");
            t0 = text(ctx[0]);
            t1 = space();
            if (description_slot) description_slot.c();
            attr(header, "class", "svelte-1vyvbmf");
            attr(label, "for", ctx[2]);
            attr(label, "class", "description svelte-1vyvbmf");
        },
        m(target, anchor) {
            insert(target, label, anchor);
            append(label, header);
            append(header, t0);
            append(label, t1);
            if (description_slot) description_slot.m(label, null);
            current = true;
        },
        p(ctx2, dirty) {
            if (!current || dirty & 1) set_data(t0, ctx2[0]);
            if (description_slot) if (description_slot.p && (!current || dirty & 8)) update_slot_base(description_slot, description_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(description_slot_template, ctx2[3], dirty, get_description_slot_changes), get_description_slot_context);
            if (!current || dirty & 4) attr(label, "for", ctx2[2]);
        },
        i(local) {
            if (current) return;
            transition_in(description_slot, local);
            current = true;
        },
        o(local) {
            transition_out(description_slot, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(label);
            if (description_slot) description_slot.d(detaching);
        }
    };
}

function create_fragment$C(ctx) {
    let article;
    let current_block_type_index;
    let if_block;
    let t0;
    let div2;
    let t1;
    let current;
    const if_block_creators = [ create_if_block$n, create_else_block$9 ];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
        if (ctx2[2]) return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    const controls_slot_template = ctx[4].controls;
    const controls_slot = create_slot(controls_slot_template, ctx, ctx[3], get_controls_slot_context);
    const default_slot_template = ctx[4].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
    return {
        c() {
            article = element("article");
            if_block.c();
            t0 = space();
            div2 = element("div");
            if (controls_slot) controls_slot.c();
            t1 = space();
            if (default_slot) default_slot.c();
            attr(div2, "class", "pr-4 text-right");
            attr(article, "class", "svelte-1vyvbmf");
            toggle_class(article, "column", ctx[1]);
        },
        m(target, anchor) {
            insert(target, article, anchor);
            if_blocks[current_block_type_index].m(article, null);
            append(article, t0);
            append(article, div2);
            if (controls_slot) controls_slot.m(div2, null);
            append(article, t1);
            if (default_slot) default_slot.m(article, null);
            current = true;
        },
        p(ctx2, [dirty]) {
            let previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx2);
            if (current_block_type_index === previous_block_index) if_blocks[current_block_type_index].p(ctx2, dirty); else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, (() => {
                    if_blocks[previous_block_index] = null;
                }));
                check_outros();
                if_block = if_blocks[current_block_type_index];
                if (!if_block) {
                    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                    if_block.c();
                } else if_block.p(ctx2, dirty);
                transition_in(if_block, 1);
                if_block.m(article, t0);
            }
            if (controls_slot) if (controls_slot.p && (!current || dirty & 8)) update_slot_base(controls_slot, controls_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(controls_slot_template, ctx2[3], dirty, get_controls_slot_changes), get_controls_slot_context);
            if (default_slot) if (default_slot.p && (!current || dirty & 8)) update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, null), null);
            if (!current || dirty & 2) toggle_class(article, "column", ctx2[1]);
        },
        i(local) {
            if (current) return;
            transition_in(if_block);
            transition_in(controls_slot, local);
            transition_in(default_slot, local);
            current = true;
        },
        o(local) {
            transition_out(if_block);
            transition_out(controls_slot, local);
            transition_out(default_slot, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(article);
            if_blocks[current_block_type_index].d();
            if (controls_slot) controls_slot.d(detaching);
            if (default_slot) default_slot.d(detaching);
        }
    };
}

function instance$A($$self, $$props, $$invalidate) {
    let {$$slots: slots = {}, $$scope: $$scope} = $$props;
    let {title: title = ""} = $$props;
    let {column: column = false} = $$props;
    let {labelFor: labelFor = null} = $$props;
    $$self.$$set = $$props2 => {
        if ("title" in $$props2) $$invalidate(0, title = $$props2.title);
        if ("column" in $$props2) $$invalidate(1, column = $$props2.column);
        if ("labelFor" in $$props2) $$invalidate(2, labelFor = $$props2.labelFor);
        if ("$$scope" in $$props2) $$invalidate(3, $$scope = $$props2.$$scope);
    };
    return [ title, column, labelFor, $$scope, slots ];
}

class OptionsItem extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$A, create_fragment$C, safe_not_equal, {
            title: 0,
            column: 1,
            labelFor: 2
        });
    }
}

function get_each_context$c(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[7] = list[i].value;
    child_ctx[8] = list[i].id;
    child_ctx[9] = list[i].label;
    return child_ctx;
}

function create_each_block$c(ctx) {
    let div2;
    let input;
    let input_value_value;
    let value_has_changed = false;
    let input_id_value;
    let t0;
    let label_1;
    let t1_value = ctx[9] + "";
    let t1;
    let label_1_for_value;
    let t2;
    let binding_group;
    let mounted;
    let dispose;
    binding_group = init_binding_group(ctx[5][0]);
    return {
        c() {
            div2 = element("div");
            input = element("input");
            t0 = space();
            label_1 = element("label");
            t1 = text(t1_value);
            t2 = space();
            attr(input, "class", "peer absolute opacity-0");
            attr(input, "type", "radio");
            input.__value = input_value_value = ctx[7];
            set_input_value(input, input.__value);
            attr(input, "id", input_id_value = ctx[8]);
            attr(input, "name", ctx[3]);
            attr(label_1, "class", "border border-skin-base bg-skin-input px-2 py-1 text-sm text-skin-text transition-colors hover:brightness-90 active:brightness-125 group-first:rounded-l group-last:rounded-r peer-checked:bg-skin-input-checked peer-checked:text-white peer-focus-visible:border-skin-outline peer-focus-visible:ring peer-focus-visible:ring-skin-outline peer-focus-visible:ring-offset-1 ");
            attr(label_1, "for", label_1_for_value = ctx[8]);
            attr(div2, "class", "group overflow-visible");
            binding_group.p(input);
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, input);
            input.checked = input.__value === ctx[0];
            append(div2, t0);
            append(div2, label_1);
            append(label_1, t1);
            append(div2, t2);
            if (!mounted) {
                dispose = listen(input, "change", ctx[4]);
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            if (dirty & 2 && input_value_value !== (input_value_value = ctx2[7])) {
                input.__value = input_value_value;
                set_input_value(input, input.__value);
                value_has_changed = true;
            }
            if (dirty & 2 && input_id_value !== (input_id_value = ctx2[8])) attr(input, "id", input_id_value);
            if (dirty & 8) attr(input, "name", ctx2[3]);
            if (value_has_changed || dirty & 3) input.checked = input.__value === ctx2[0];
            if (dirty & 2 && t1_value !== (t1_value = ctx2[9] + "")) set_data(t1, t1_value);
            if (dirty & 2 && label_1_for_value !== (label_1_for_value = ctx2[8])) attr(label_1, "for", label_1_for_value);
        },
        d(detaching) {
            if (detaching) detach(div2);
            binding_group.r();
            mounted = false;
            dispose();
        }
    };
}

function create_fragment$B(ctx) {
    let form;
    let mounted;
    let dispose;
    let each_value = ensure_array_like(ctx[1]);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) each_blocks[i] = create_each_block$c(get_each_context$c(ctx, each_value, i));
    return {
        c() {
            form = element("form");
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            attr(form, "class", "flex gap-2 gap-y-4 overflow-visible py-1");
        },
        m(target, anchor) {
            insert(target, form, anchor);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(form, null);
            if (!mounted) {
                dispose = listen(form, "change", ctx[6]);
                mounted = true;
            }
        },
        p(ctx2, [dirty]) {
            if (dirty & 11) {
                each_value = ensure_array_like(ctx2[1]);
                let i;
                for (i = 0; i < each_value.length; i += 1) {
                    const child_ctx = get_each_context$c(ctx2, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty); else {
                        each_blocks[i] = create_each_block$c(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(form, null);
                    }
                }
                for (;i < each_blocks.length; i += 1) each_blocks[i].d(1);
                each_blocks.length = each_value.length;
            }
        },
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(form);
            destroy_each(each_blocks, detaching);
            mounted = false;
            dispose();
        }
    };
}

function instance$z($$self, $$props, $$invalidate) {
    let {currentValue: currentValue} = $$props;
    let {valueList: valueList} = $$props;
    let {onChange: onChange} = $$props;
    let {name: name = ""} = $$props;
    const $$binding_groups = [ [] ];
    function input_change_handler() {
        currentValue = this.__value;
        $$invalidate(0, currentValue);
    }
    const change_handler = () => onChange(currentValue);
    $$self.$$set = $$props2 => {
        if ("currentValue" in $$props2) $$invalidate(0, currentValue = $$props2.currentValue);
        if ("valueList" in $$props2) $$invalidate(1, valueList = $$props2.valueList);
        if ("onChange" in $$props2) $$invalidate(2, onChange = $$props2.onChange);
        if ("name" in $$props2) $$invalidate(3, name = $$props2.name);
    };
    return [ currentValue, valueList, onChange, name, input_change_handler, $$binding_groups, change_handler ];
}

class RadioGroup extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$z, create_fragment$B, safe_not_equal, {
            currentValue: 0,
            valueList: 1,
            onChange: 2,
            name: 3
        });
    }
}

function create_description_slot$2(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            div2.textContent = `${getMsg("optionUseOldRedditDescription")}`;
            attr(div2, "slot", "description");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_else_block$8(ctx) {
    let t;
    return {
        c() {
            t = text("save");
        },
        m(target, anchor) {
            insert(target, t, anchor);
        },
        d(detaching) {
            if (detaching) detach(t);
        }
    };
}

function create_if_block$m(ctx) {
    let t;
    return {
        c() {
            t = text("saved");
        },
        m(target, anchor) {
            insert(target, t, anchor);
        },
        d(detaching) {
            if (detaching) detach(t);
        }
    };
}

function create_controls_slot$2(ctx) {
    let div2;
    let div1;
    let radiogroup;
    let updating_currentValue;
    let t0;
    let div0;
    let input;
    let input_disabled_value;
    let t1;
    let button;
    let button_disabled_value;
    let current;
    let mounted;
    let dispose;
    function radiogroup_currentValue_binding(value) {
        ctx[6](value);
    }
    let radiogroup_props = {
        valueList: ctx[3],
        onChange: ctx[4],
        name: "redditUrlType"
    };
    if (ctx[2].options.redditUrlType !== void 0) radiogroup_props.currentValue = ctx[2].options.redditUrlType;
    radiogroup = new RadioGroup({
        props: radiogroup_props
    });
    binding_callbacks.push((() => bind(radiogroup, "currentValue", radiogroup_currentValue_binding)));
    function select_block_type(ctx2, dirty) {
        if (ctx2[1]) return create_if_block$m;
        return create_else_block$8;
    }
    let current_block_type = select_block_type(ctx);
    let if_block = current_block_type(ctx);
    return {
        c() {
            div2 = element("div");
            div1 = element("div");
            create_component(radiogroup.$$.fragment);
            t0 = space();
            div0 = element("div");
            input = element("input");
            t1 = space();
            button = element("button");
            if_block.c();
            attr(input, "class", "rounded-r-none border border-r-0");
            attr(input, "type", "url");
            input.disabled = input_disabled_value = ctx[2].options.redditUrlType !== "custom";
            attr(input, "data-testid", "redditUrlInput");
            attr(button, "type", "submit");
            attr(button, "class", "standard-button min-w-[5em] px-2");
            button.disabled = button_disabled_value = ctx[2].options.redditUrlType !== "custom";
            attr(button, "data-testid", "saveUrlBtn");
            attr(div0, "class", "mt-2 flex items-center");
            attr(div2, "slot", "controls");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, div1);
            mount_component(radiogroup, div1, null);
            append(div1, t0);
            append(div1, div0);
            append(div0, input);
            set_input_value(input, ctx[0]);
            append(div0, t1);
            append(div0, button);
            if_block.m(button, null);
            current = true;
            if (!mounted) {
                dispose = [ listen(input, "input", ctx[7]), listen(input, "input", ctx[8]), listen(input, "change", ctx[5]), listen(button, "click", ctx[5]) ];
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            const radiogroup_changes = {};
            if (!updating_currentValue && dirty & 4) {
                updating_currentValue = true;
                radiogroup_changes.currentValue = ctx2[2].options.redditUrlType;
                add_flush_callback((() => updating_currentValue = false));
            }
            radiogroup.$set(radiogroup_changes);
            if (!current || dirty & 4 && input_disabled_value !== (input_disabled_value = ctx2[2].options.redditUrlType !== "custom")) input.disabled = input_disabled_value;
            if (dirty & 1 && input.value !== ctx2[0]) set_input_value(input, ctx2[0]);
            if (current_block_type !== (current_block_type = select_block_type(ctx2))) {
                if_block.d(1);
                if_block = current_block_type(ctx2);
                if (if_block) {
                    if_block.c();
                    if_block.m(button, null);
                }
            }
            if (!current || dirty & 4 && button_disabled_value !== (button_disabled_value = ctx2[2].options.redditUrlType !== "custom")) button.disabled = button_disabled_value;
        },
        i(local) {
            if (current) return;
            transition_in(radiogroup.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(radiogroup.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div2);
            destroy_component(radiogroup);
            if_block.d();
            mounted = false;
            run_all(dispose);
        }
    };
}

function create_fragment$A(ctx) {
    let optionsitem;
    let current;
    optionsitem = new OptionsItem({
        props: {
            title: getMsg("optionUseOldReddit"),
            $$slots: {
                controls: [ create_controls_slot$2 ],
                description: [ create_description_slot$2 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    return {
        c() {
            create_component(optionsitem.$$.fragment);
        },
        m(target, anchor) {
            mount_component(optionsitem, target, anchor);
            current = true;
        },
        p(ctx2, [dirty]) {
            const optionsitem_changes = {};
            if (dirty & 1031) optionsitem_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            optionsitem.$set(optionsitem_changes);
        },
        i(local) {
            if (current) return;
            transition_in(optionsitem.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(optionsitem.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            destroy_component(optionsitem, detaching);
        }
    };
}

function validateUrl(s) {
    try {
        return new URL(s).href;
    } catch (e) {
        console.error(e);
        return false;
    }
}

function instance$y($$self, $$props, $$invalidate) {
    let $storageData;
    component_subscribe($$self, storageData, ($$value => $$invalidate(2, $storageData = $$value)));
    let url = "";
    const setUrl = urlType => {
        $$invalidate(0, url = getRedditBaseUrl(urlType, $storageData.options.customRedditUrl));
    };
    setUrl($storageData.options.redditUrlType);
    const redditTypesList = [ {
        value: "new",
        id: "new",
        label: "default"
    }, {
        value: "old",
        id: "old",
        label: "old"
    }, {
        value: "custom",
        id: "custom-url",
        label: "custom URL"
    } ];
    const onRedditTypeChange = async value => {
        const redditUrlType = value;
        setUrl(redditUrlType);
        await storage.saveOptions({
            redditUrlType: redditUrlType
        });
    };
    let wasSaved = true;
    async function save() {
        const temp = validateUrl(url);
        if (!temp) return;
        await storage.saveOptions({
            customRedditUrl: temp
        });
        $$invalidate(0, url = temp);
        $$invalidate(1, wasSaved = true);
    }
    function radiogroup_currentValue_binding(value) {
        if ($$self.$$.not_equal($storageData.options.redditUrlType, value)) {
            $storageData.options.redditUrlType = value;
            storageData.set($storageData);
        }
    }
    function input_input_handler() {
        url = this.value;
        $$invalidate(0, url);
    }
    const input_handler = () => $$invalidate(1, wasSaved = false);
    return [ url, wasSaved, $storageData, redditTypesList, onRedditTypeChange, save, radiogroup_currentValue_binding, input_input_handler, input_handler ];
}

class ChangeUrlInput extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$y, create_fragment$A, safe_not_equal, {});
    }
}

let creating = null;

async function setupOffscreenDocument(path) {
    const offscreenUrl = chrome.runtime.getURL(path);
    const matchedClients = await self.clients.matchAll();
    for (const client of matchedClients) if (client.url === offscreenUrl) return;
    if (creating) await creating; else {
        creating = chrome.offscreen.createDocument({
            url: path,
            reasons: [ chrome.offscreen.Reason.AUDIO_PLAYBACK ],
            justification: "play notification sounds"
        });
        await creating;
        creating = null;
    }
}

const notificationSoundFiles = {
    sound_00: "/audio/234524__foolboymedia__notification-up-1.webm",
    sound_01: "/audio/234523__foolboymedia__notification-up-2.webm",
    sound_02: "/audio/235911__yourfriendjesse__notification-sound.webm",
    sound_03: "/audio/415763__thebuilder15__doorbell-notification.webm",
    sound_04: "/audio/512136__beezlefm__notification-sound.webm"
};

async function getAudioSrc(soundId) {
    if (!soundId) return "";
    if (soundId === "custom") {
        const file2 = await storage.getAudioFile();
        return (file2 == null ? void 0 : file2.dataUrl) || "";
    }
    const file = notificationSoundFiles[soundId];
    if (!file) return "";
    return browser.runtime.getURL(file);
}

async function playAudio(audioId) {
    const src = await getAudioSrc(audioId);
    if (!src) return;
    await setupOffscreenDocument("/dist/offscreen/index.html");
    await chrome.runtime.sendMessage({
        type: "PLAY_AUDIO",
        target: "offscreen",
        data: src
    });
    return;
}

function get_each_context$b(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[27] = list[i];
    child_ctx[29] = i;
    return child_ctx;
}

function create_if_block_2$5(ctx) {
    let p;
    return {
        c() {
            p = element("p");
            p.textContent = `${getMsg("optionUpdateIntervalDescriptionChrome")}`;
        },
        m(target, anchor) {
            insert(target, p, anchor);
        },
        d(detaching) {
            if (detaching) detach(p);
        }
    };
}

function create_description_slot_6(ctx) {
    let div2;
    let p;
    let t1;
    let if_block = create_if_block_2$5();
    return {
        c() {
            div2 = element("div");
            p = element("p");
            p.textContent = `${getMsg("optionUpdateIntervalDescription")}`;
            t1 = space();
            if (if_block) if_block.c();
            attr(div2, "slot", "description");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, p);
            append(div2, t1);
            if (if_block) if_block.m(div2, null);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div2);
            if (if_block) if_block.d();
        }
    };
}

function create_controls_slot_6(ctx) {
    let div1;
    let radiogroup;
    let t0;
    let div0;
    let input;
    let t1;
    let span;
    let current;
    let mounted;
    let dispose;
    radiogroup = new RadioGroup({
        props: {
            onChange: ctx[7],
            valueList: ctx[6],
            currentValue: ctx[3]
        }
    });
    return {
        c() {
            div1 = element("div");
            create_component(radiogroup.$$.fragment);
            t0 = space();
            div0 = element("div");
            input = element("input");
            t1 = space();
            span = element("span");
            span.textContent = "seconds";
            attr(input, "id", "updateIntervalInput");
            attr(input, "type", "number");
            attr(input, "min", "10");
            attr(input, "max", "7200");
            attr(input, "size", "8");
            attr(div0, "class", "ml-auto mt-2 flex items-baseline justify-end gap-2");
            attr(div1, "slot", "controls");
        },
        m(target, anchor) {
            insert(target, div1, anchor);
            mount_component(radiogroup, div1, null);
            append(div1, t0);
            append(div1, div0);
            append(div0, input);
            set_input_value(input, ctx[0].options.updateInterval);
            append(div0, t1);
            append(div0, span);
            current = true;
            if (!mounted) {
                dispose = [ listen(input, "input", ctx[12]), listen(input, "input", ctx[8]) ];
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            const radiogroup_changes = {};
            if (dirty & 8) radiogroup_changes.currentValue = ctx2[3];
            radiogroup.$set(radiogroup_changes);
            if (dirty & 1 && to_number(input.value) !== ctx2[0].options.updateInterval) set_input_value(input, ctx2[0].options.updateInterval);
        },
        i(local) {
            if (current) return;
            transition_in(radiogroup.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(radiogroup.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div1);
            destroy_component(radiogroup);
            mounted = false;
            run_all(dispose);
        }
    };
}

function create_description_slot_5(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            div2.textContent = `${getMsg("optionsThemeDescription")}`;
            attr(div2, "slot", "description");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_controls_slot_5(ctx) {
    let div2;
    let radiogroup;
    let updating_currentValue;
    let current;
    function radiogroup_currentValue_binding(value) {
        ctx[13](value);
    }
    let radiogroup_props = {
        valueList: ctx[4],
        onChange: ctx[5],
        name: "theme"
    };
    if (ctx[0].options.theme !== void 0) radiogroup_props.currentValue = ctx[0].options.theme;
    radiogroup = new RadioGroup({
        props: radiogroup_props
    });
    binding_callbacks.push((() => bind(radiogroup, "currentValue", radiogroup_currentValue_binding)));
    return {
        c() {
            div2 = element("div");
            create_component(radiogroup.$$.fragment);
            attr(div2, "slot", "controls");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            mount_component(radiogroup, div2, null);
            current = true;
        },
        p(ctx2, dirty) {
            const radiogroup_changes = {};
            if (!updating_currentValue && dirty & 1) {
                updating_currentValue = true;
                radiogroup_changes.currentValue = ctx2[0].options.theme;
                add_flush_callback((() => updating_currentValue = false));
            }
            radiogroup.$set(radiogroup_changes);
        },
        i(local) {
            if (current) return;
            transition_in(radiogroup.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(radiogroup.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div2);
            destroy_component(radiogroup);
        }
    };
}

function create_description_slot_4(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            div2.textContent = `${getMsg("optionDelPostAfterClickDescription")}`;
            attr(div2, "slot", "description");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_controls_slot_4(ctx) {
    let div2;
    let input;
    let mounted;
    let dispose;
    return {
        c() {
            div2 = element("div");
            input = element("input");
            attr(input, "id", "deletePostInput");
            attr(input, "type", "checkbox");
            attr(div2, "slot", "controls");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, input);
            input.checked = ctx[0].options.delPostAfterBodyClick;
            if (!mounted) {
                dispose = [ listen(input, "change", ctx[14]), listen(input, "change", ctx[15]) ];
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            if (dirty & 1) input.checked = ctx2[0].options.delPostAfterBodyClick;
        },
        d(detaching) {
            if (detaching) detach(div2);
            mounted = false;
            run_all(dispose);
        }
    };
}

function create_description_slot_3(ctx) {
    let div2;
    let span2;
    let span0;
    let t1;
    let span1;
    return {
        c() {
            div2 = element("div");
            span2 = element("span");
            span0 = element("span");
            span0.textContent = `${getMsg("optionDelListAfterClickDescription")}`;
            t1 = space();
            span1 = element("span");
            attr(span1, "class", "inline-block w-4");
            attr(span2, "class", "inline-block");
            attr(div2, "slot", "description");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, span2);
            append(span2, span0);
            append(span2, t1);
            append(span2, span1);
            span1.innerHTML = OpenInNew;
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_controls_slot_3(ctx) {
    let div2;
    let input;
    let mounted;
    let dispose;
    return {
        c() {
            div2 = element("div");
            input = element("input");
            attr(input, "id", "deleteListInput");
            attr(input, "type", "checkbox");
            attr(div2, "slot", "controls");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, input);
            input.checked = ctx[0].options.delListAfterOpening;
            if (!mounted) {
                dispose = [ listen(input, "change", ctx[16]), listen(input, "change", ctx[17]) ];
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            if (dirty & 1) input.checked = ctx2[0].options.delListAfterOpening;
        },
        d(detaching) {
            if (detaching) detach(div2);
            mounted = false;
            run_all(dispose);
        }
    };
}

function create_description_slot_2(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            div2.textContent = `${getMsg("optionHideEmptyGroupsDescription")}`;
            attr(div2, "slot", "description");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_controls_slot_2(ctx) {
    let div2;
    let input;
    let mounted;
    let dispose;
    return {
        c() {
            div2 = element("div");
            input = element("input");
            attr(input, "id", "hideEmptyInput");
            attr(input, "type", "checkbox");
            attr(div2, "slot", "controls");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, input);
            input.checked = ctx[0].options.hideEmptyGroups;
            if (!mounted) {
                dispose = [ listen(input, "change", ctx[18]), listen(input, "change", ctx[19]) ];
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            if (dirty & 1) input.checked = ctx2[0].options.hideEmptyGroups;
        },
        d(detaching) {
            if (detaching) detach(div2);
            mounted = false;
            run_all(dispose);
        }
    };
}

function create_description_slot_1(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            div2.textContent = `${getMsg("optionNotificationAudioIdDescription")}`;
            attr(div2, "slot", "description");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_each_block$b(ctx) {
    let option;
    let t_value = `Sound ${ctx[29] + 1}`;
    let t;
    return {
        c() {
            option = element("option");
            t = text(t_value);
            option.__value = ctx[27];
            set_input_value(option, option.__value);
        },
        m(target, anchor) {
            insert(target, option, anchor);
            append(option, t);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(option);
        }
    };
}

function create_if_block$l(ctx) {
    let span;
    let t0;
    let t1;
    let form;
    let label;
    let t2;
    let input;
    let mounted;
    let dispose;
    function select_block_type(ctx2, dirty) {
        if (ctx2[1]) return create_if_block_1$8;
        return create_else_block$7;
    }
    let current_block_type = select_block_type(ctx);
    let if_block = current_block_type(ctx);
    return {
        c() {
            span = element("span");
            t0 = text(ctx[2]);
            t1 = space();
            form = element("form");
            label = element("label");
            if_block.c();
            t2 = space();
            input = element("input");
            attr(span, "class", "text-left text-skin-error");
            attr(label, "for", "fileElem");
            attr(label, "class", "flex w-full items-center justify-center border-2 border-dashed border-skin-gray2 p-1 py-4 text-center hover:border-skin-accent hover:text-skin-accent");
            attr(input, "class", "hidden");
            attr(input, "type", "file");
            attr(input, "id", "fileElem");
            attr(input, "accept", "audio/*");
            input.disabled = false;
            attr(form, "class", "mt-2 flex flex-col");
        },
        m(target, anchor) {
            insert(target, span, anchor);
            append(span, t0);
            insert(target, t1, anchor);
            insert(target, form, anchor);
            append(form, label);
            if_block.m(label, null);
            append(form, t2);
            append(form, input);
            if (!mounted) {
                dispose = listen(input, "change", ctx[10]);
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            if (dirty & 4) set_data(t0, ctx2[2]);
            if (current_block_type !== (current_block_type = select_block_type(ctx2))) {
                if_block.d(1);
                if_block = current_block_type(ctx2);
                if (if_block) {
                    if_block.c();
                    if_block.m(label, null);
                }
            }
        },
        d(detaching) {
            if (detaching) {
                detach(span);
                detach(t1);
                detach(form);
            }
            if_block.d();
            mounted = false;
            dispose();
        }
    };
}

function create_else_block$7(ctx) {
    let span0;
    let t0;
    let span1;
    return {
        c() {
            span0 = element("span");
            t0 = space();
            span1 = element("span");
            span1.textContent = "Click here to upload a file";
            attr(span0, "class", "mr-2 h-6 w-6");
        },
        m(target, anchor) {
            insert(target, span0, anchor);
            span0.innerHTML = UploadIcon;
            insert(target, t0, anchor);
            insert(target, span1, anchor);
        },
        d(detaching) {
            if (detaching) {
                detach(span0);
                detach(t0);
                detach(span1);
            }
        }
    };
}

function create_if_block_1$8(ctx) {
    let span0;
    let t0;
    let span1;
    return {
        c() {
            span0 = element("span");
            t0 = space();
            span1 = element("span");
            span1.textContent = "Saved";
            attr(span0, "class", "mr-2 h-6 w-6 text-skin-success");
        },
        m(target, anchor) {
            insert(target, span0, anchor);
            span0.innerHTML = SaveIcon;
            insert(target, t0, anchor);
            insert(target, span1, anchor);
        },
        d(detaching) {
            if (detaching) {
                detach(span0);
                detach(t0);
                detach(span1);
            }
        }
    };
}

function create_controls_slot_1(ctx) {
    let div2;
    let div0;
    let select;
    let option0;
    let option1;
    let t2;
    let button;
    let t3;
    let div1;
    let mounted;
    let dispose;
    let each_value = ensure_array_like(Object.keys(notificationSoundFiles));
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) each_blocks[i] = create_each_block$b(get_each_context$b(ctx, each_value, i));
    let if_block = ctx[0].options.notificationSoundId === "custom" && create_if_block$l(ctx);
    return {
        c() {
            div2 = element("div");
            div0 = element("div");
            select = element("select");
            option0 = element("option");
            option0.textContent = "No sound";
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            option1 = element("option");
            option1.textContent = "Custom sound file";
            t2 = space();
            button = element("button");
            t3 = space();
            div1 = element("div");
            if (if_block) if_block.c();
            option0.__value = null;
            set_input_value(option0, option0.__value);
            option1.__value = "custom";
            set_input_value(option1, option1.__value);
            attr(select, "name", "sound");
            attr(select, "id", "soundSelect");
            attr(select, "class", "w-max");
            if (ctx[0].options.notificationSoundId === void 0) add_render_callback((() => ctx[20].call(select)));
            attr(button, "class", "standard-button play-btn svelte-ak2lo9");
            attr(button, "title", "play");
            attr(div0, "class", "flex items-stretch justify-end");
            attr(div2, "slot", "controls");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, div0);
            append(div0, select);
            append(select, option0);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(select, null);
            append(select, option1);
            select_option(select, ctx[0].options.notificationSoundId, true);
            append(div0, t2);
            append(div0, button);
            button.innerHTML = PlayIcon;
            append(div2, t3);
            append(div2, div1);
            if (if_block) if_block.m(div1, null);
            if (!mounted) {
                dispose = [ listen(select, "change", ctx[20]), listen(select, "change", ctx[21]), listen(button, "click", ctx[9]) ];
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            if (dirty & 0) {
                each_value = ensure_array_like(Object.keys(notificationSoundFiles));
                let i;
                for (i = 0; i < each_value.length; i += 1) {
                    const child_ctx = get_each_context$b(ctx2, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty); else {
                        each_blocks[i] = create_each_block$b(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(select, option1);
                    }
                }
                for (;i < each_blocks.length; i += 1) each_blocks[i].d(1);
                each_blocks.length = each_value.length;
            }
            if (dirty & 1) select_option(select, ctx2[0].options.notificationSoundId);
            if (ctx2[0].options.notificationSoundId === "custom") if (if_block) if_block.p(ctx2, dirty); else {
                if_block = create_if_block$l(ctx2);
                if_block.c();
                if_block.m(div1, null);
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        d(detaching) {
            if (detaching) detach(div2);
            destroy_each(each_blocks, detaching);
            if (if_block) if_block.d();
            mounted = false;
            run_all(dispose);
        }
    };
}

function create_description_slot$1(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            div2.textContent = "Change behavior when clicking on the extension icon in the toolbar.";
            attr(div2, "slot", "description");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_controls_slot$1(ctx) {
    let div2;
    let select;
    let option0;
    let option1;
    let mounted;
    let dispose;
    return {
        c() {
            div2 = element("div");
            select = element("select");
            option0 = element("option");
            option0.textContent = "Open Popup";
            option1 = element("option");
            option1.textContent = "Open all unread items";
            option0.__value = "popup";
            set_input_value(option0, option0.__value);
            option1.__value = "openall";
            set_input_value(option1, option1.__value);
            attr(select, "name", "onBadgeClick");
            attr(select, "id", "badgeClickSelect");
            attr(select, "class", "w-max");
            if (ctx[0].options.onBadgeClick === void 0) add_render_callback((() => ctx[22].call(select)));
            attr(div2, "slot", "controls");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, select);
            append(select, option0);
            append(select, option1);
            select_option(select, ctx[0].options.onBadgeClick, true);
            if (!mounted) {
                dispose = [ listen(select, "change", ctx[22]), listen(select, "change", ctx[11]) ];
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            if (dirty & 1) select_option(select, ctx2[0].options.onBadgeClick);
        },
        d(detaching) {
            if (detaching) detach(div2);
            mounted = false;
            run_all(dispose);
        }
    };
}

function create_fragment$z(ctx) {
    let optionsitem0;
    let t0;
    let optionsitem1;
    let t1;
    let optionsitem2;
    let t2;
    let optionsitem3;
    let t3;
    let optionsitem4;
    let t4;
    let optionsitem5;
    let t5;
    let changeurlinput;
    let t6;
    let optionsitem6;
    let current;
    optionsitem0 = new OptionsItem({
        props: {
            title: getMsg("optionUpdateInterval"),
            labelFor: "updateIntervalInput",
            $$slots: {
                controls: [ create_controls_slot_6 ],
                description: [ create_description_slot_6 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    optionsitem1 = new OptionsItem({
        props: {
            title: getMsg("optionTheme"),
            $$slots: {
                controls: [ create_controls_slot_5 ],
                description: [ create_description_slot_5 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    optionsitem2 = new OptionsItem({
        props: {
            title: getMsg("optionDelPostAfterClick"),
            labelFor: "deletePostInput",
            $$slots: {
                controls: [ create_controls_slot_4 ],
                description: [ create_description_slot_4 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    optionsitem3 = new OptionsItem({
        props: {
            title: getMsg("optionDelListAfterClick"),
            labelFor: "deleteListInput",
            $$slots: {
                controls: [ create_controls_slot_3 ],
                description: [ create_description_slot_3 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    optionsitem4 = new OptionsItem({
        props: {
            title: getMsg("optionHideEmptyGroups"),
            labelFor: "hideEmptyInput",
            $$slots: {
                controls: [ create_controls_slot_2 ],
                description: [ create_description_slot_2 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    optionsitem5 = new OptionsItem({
        props: {
            title: getMsg("optionNotificationAudioId"),
            labelFor: "soundSelect",
            $$slots: {
                controls: [ create_controls_slot_1 ],
                description: [ create_description_slot_1 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    changeurlinput = new ChangeUrlInput({});
    optionsitem6 = new OptionsItem({
        props: {
            title: "Badge click action",
            $$slots: {
                controls: [ create_controls_slot$1 ],
                description: [ create_description_slot$1 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    return {
        c() {
            create_component(optionsitem0.$$.fragment);
            t0 = space();
            create_component(optionsitem1.$$.fragment);
            t1 = space();
            create_component(optionsitem2.$$.fragment);
            t2 = space();
            create_component(optionsitem3.$$.fragment);
            t3 = space();
            create_component(optionsitem4.$$.fragment);
            t4 = space();
            create_component(optionsitem5.$$.fragment);
            t5 = space();
            create_component(changeurlinput.$$.fragment);
            t6 = space();
            create_component(optionsitem6.$$.fragment);
        },
        m(target, anchor) {
            mount_component(optionsitem0, target, anchor);
            insert(target, t0, anchor);
            mount_component(optionsitem1, target, anchor);
            insert(target, t1, anchor);
            mount_component(optionsitem2, target, anchor);
            insert(target, t2, anchor);
            mount_component(optionsitem3, target, anchor);
            insert(target, t3, anchor);
            mount_component(optionsitem4, target, anchor);
            insert(target, t4, anchor);
            mount_component(optionsitem5, target, anchor);
            insert(target, t5, anchor);
            mount_component(changeurlinput, target, anchor);
            insert(target, t6, anchor);
            mount_component(optionsitem6, target, anchor);
            current = true;
        },
        p(ctx2, [dirty]) {
            const optionsitem0_changes = {};
            if (dirty & 1073741833) optionsitem0_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            optionsitem0.$set(optionsitem0_changes);
            const optionsitem1_changes = {};
            if (dirty & 1073741825) optionsitem1_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            optionsitem1.$set(optionsitem1_changes);
            const optionsitem2_changes = {};
            if (dirty & 1073741825) optionsitem2_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            optionsitem2.$set(optionsitem2_changes);
            const optionsitem3_changes = {};
            if (dirty & 1073741825) optionsitem3_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            optionsitem3.$set(optionsitem3_changes);
            const optionsitem4_changes = {};
            if (dirty & 1073741825) optionsitem4_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            optionsitem4.$set(optionsitem4_changes);
            const optionsitem5_changes = {};
            if (dirty & 1073741831) optionsitem5_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            optionsitem5.$set(optionsitem5_changes);
            const optionsitem6_changes = {};
            if (dirty & 1073741825) optionsitem6_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            optionsitem6.$set(optionsitem6_changes);
        },
        i(local) {
            if (current) return;
            transition_in(optionsitem0.$$.fragment, local);
            transition_in(optionsitem1.$$.fragment, local);
            transition_in(optionsitem2.$$.fragment, local);
            transition_in(optionsitem3.$$.fragment, local);
            transition_in(optionsitem4.$$.fragment, local);
            transition_in(optionsitem5.$$.fragment, local);
            transition_in(changeurlinput.$$.fragment, local);
            transition_in(optionsitem6.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(optionsitem0.$$.fragment, local);
            transition_out(optionsitem1.$$.fragment, local);
            transition_out(optionsitem2.$$.fragment, local);
            transition_out(optionsitem3.$$.fragment, local);
            transition_out(optionsitem4.$$.fragment, local);
            transition_out(optionsitem5.$$.fragment, local);
            transition_out(changeurlinput.$$.fragment, local);
            transition_out(optionsitem6.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) {
                detach(t0);
                detach(t1);
                detach(t2);
                detach(t3);
                detach(t4);
                detach(t5);
                detach(t6);
            }
            destroy_component(optionsitem0, detaching);
            destroy_component(optionsitem1, detaching);
            destroy_component(optionsitem2, detaching);
            destroy_component(optionsitem3, detaching);
            destroy_component(optionsitem4, detaching);
            destroy_component(optionsitem5, detaching);
            destroy_component(changeurlinput, detaching);
            destroy_component(optionsitem6, detaching);
        }
    };
}

function instance$x($$self, $$props, $$invalidate) {
    let $storageData;
    component_subscribe($$self, storageData, ($$value => $$invalidate(0, $storageData = $$value)));
    const themeValueList = [ {
        value: "light",
        id: "theme_light",
        label: getMsg("optionThemeLight")
    }, {
        value: "dark",
        id: "theme_dark",
        label: getMsg("optionThemeDark")
    }, {
        value: "purple",
        id: "theme_purple",
        label: getMsg("optionThemePurple")
    }, {
        value: "auto",
        id: "theme_auto",
        label: getMsg("optionThemeAuto")
    } ];
    const onThemeChange = value => {
        const newTheme = value;
        void applyTheme(newTheme);
        void storage.saveOptions({
            theme: newTheme
        });
    };
    const intervalList = [ {
        value: String(30),
        id: "update_30s",
        label: "30s"
    }, {
        value: String(60),
        id: "update_1m",
        label: "1m"
    }, {
        value: String(5 * 60),
        id: "update_5m",
        label: "5m"
    }, {
        value: String(10 * 60),
        id: "update_10m",
        label: "10m"
    }, {
        value: String(15 * 60),
        id: "update_15m",
        label: "15m"
    }, {
        value: String(30 * 60),
        id: "update_30m",
        label: "30m"
    }, {
        value: String(60 * 60),
        id: "update_1h",
        label: "1h"
    }, {
        value: "custom",
        id: "update_custom",
        label: "custom"
    } ];
    const isCustomInterval = () => intervalList.findIndex((i => i.value === String($storageData.options.updateInterval))) === -1;
    let wasUploaded = false;
    let audioErrMsg = "";
    let intervalValue = "custom";
    const updateInterval = async value => {
        if (!value) return;
        await storage.saveOptions({
            updateInterval: Math.max(10, value)
        });
        await sendMessage("SCHEDULE_NEXT_UPDATE");
    };
    const intervalRadioInputHandler = async value => {
        if (value === "custom") return;
        await updateInterval(Number.parseInt(value) || DEFAULT_OPTIONS$1.updateInterval);
    };
    const intervalCustomInputHandler = e => {
        void updateInterval(Number.parseInt(e.currentTarget.value));
    };
    const playAudio2 = async src => {
        try {
            const audio = new Audio;
            audio.src = src;
            await audio.play();
            return true;
        } catch (error) {
            $$invalidate(2, audioErrMsg = error === null || error === void 0 ? void 0 : error.message);
        }
        return false;
    };
    const getSoundAndPlay = async () => {
        const src = await getAudioSrc($storageData.options.notificationSoundId);
        await playAudio2(src);
    };
    async function saveFile(event) {
        var _a;
        $$invalidate(2, audioErrMsg = "");
        const dataUrl = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
        if (!dataUrl) return;
        if (!(await playAudio2(dataUrl))) return;
        void storage.saveAudioFile(dataUrl).then((() => {
            $$invalidate(1, wasUploaded = true);
            setTimeout((() => $$invalidate(1, wasUploaded = false)), 2e3);
        }));
    }
    const onFilesDrop = async e => {
        var _a;
        const fl = (_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.files;
        if (!(fl === null || fl === void 0 ? void 0 : fl.length)) return;
        const file = fl[0];
        const reader = new FileReader;
        reader.addEventListener("load", (ev => {
            void saveFile(ev);
        }));
        reader.readAsDataURL(file);
    };
    const onBadgeClickChangeHandler = async () => {
        const value = $storageData.options.onBadgeClick || "popup";
        await storage.saveOptions({
            onBadgeClick: value
        });
    };
    function input_input_handler() {
        $storageData.options.updateInterval = to_number(this.value);
        storageData.set($storageData);
    }
    function radiogroup_currentValue_binding(value) {
        if ($$self.$$.not_equal($storageData.options.theme, value)) {
            $storageData.options.theme = value;
            storageData.set($storageData);
        }
    }
    function input_change_handler() {
        $storageData.options.delPostAfterBodyClick = this.checked;
        storageData.set($storageData);
    }
    const change_handler = () => storage.saveOptions({
        delPostAfterBodyClick: $storageData.options.delPostAfterBodyClick
    });
    function input_change_handler_1() {
        $storageData.options.delListAfterOpening = this.checked;
        storageData.set($storageData);
    }
    const change_handler_1 = () => storage.saveOptions({
        delListAfterOpening: $storageData.options.delListAfterOpening
    });
    function input_change_handler_2() {
        $storageData.options.hideEmptyGroups = this.checked;
        storageData.set($storageData);
    }
    const change_handler_2 = () => storage.saveOptions({
        hideEmptyGroups: $storageData.options.hideEmptyGroups
    });
    function select_change_handler() {
        $storageData.options.notificationSoundId = select_value(this);
        storageData.set($storageData);
    }
    const change_handler_3 = () => storage.saveOptions({
        notificationSoundId: $storageData.options.notificationSoundId
    });
    function select_change_handler_1() {
        $storageData.options.onBadgeClick = select_value(this);
        storageData.set($storageData);
    }
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 1) $$invalidate(3, intervalValue = isCustomInterval() ? "custom" : String($storageData.options.updateInterval));
    };
    return [ $storageData, wasUploaded, audioErrMsg, intervalValue, themeValueList, onThemeChange, intervalList, intervalRadioInputHandler, intervalCustomInputHandler, getSoundAndPlay, onFilesDrop, onBadgeClickChangeHandler, input_input_handler, radiogroup_currentValue_binding, input_change_handler, change_handler, input_change_handler_1, change_handler_1, input_change_handler_2, change_handler_2, select_change_handler, change_handler_3, select_change_handler_1 ];
}

class GeneralSettingsBlock extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$x, create_fragment$z, safe_not_equal, {});
    }
}

function create_fragment$y(ctx) {
    let h2;
    let t;
    return {
        c() {
            h2 = element("h2");
            t = text(ctx[1]);
            attr(h2, "class", "border-b border-dashed border-skin-delimiter text-base font-bold text-skin-text");
            attr(h2, "id", ctx[0]);
        },
        m(target, anchor) {
            insert(target, h2, anchor);
            append(h2, t);
        },
        p(ctx2, [dirty]) {
            if (dirty & 2) set_data(t, ctx2[1]);
            if (dirty & 1) attr(h2, "id", ctx2[0]);
        },
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(h2);
        }
    };
}

function instance$w($$self, $$props, $$invalidate) {
    let {id: id} = $$props;
    let {name: name} = $$props;
    $$self.$$set = $$props2 => {
        if ("id" in $$props2) $$invalidate(0, id = $$props2.id);
        if ("name" in $$props2) $$invalidate(1, name = $$props2.name);
    };
    return [ id, name ];
}

class Heading extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$w, create_fragment$y, safe_not_equal, {
            id: 0,
            name: 1
        });
    }
}

function create_if_block$k(ctx) {
    let h1;
    let t1;
    let section;
    let heading;
    let t2;
    let generalsettingsblock;
    let current;
    heading = new Heading({
        props: {
            id: routes.settings.id,
            name: routes.settings.name
        }
    });
    generalsettingsblock = new GeneralSettingsBlock({});
    return {
        c() {
            h1 = element("h1");
            h1.textContent = `${getMsg("optionsNavSettings")}`;
            t1 = space();
            section = element("section");
            create_component(heading.$$.fragment);
            t2 = space();
            create_component(generalsettingsblock.$$.fragment);
            attr(h1, "class", "mb-4 text-2xl font-bold uppercase tracking-widest text-skin-gray");
            attr(section, "class", "mb-10");
        },
        m(target, anchor) {
            insert(target, h1, anchor);
            insert(target, t1, anchor);
            insert(target, section, anchor);
            mount_component(heading, section, null);
            append(section, t2);
            mount_component(generalsettingsblock, section, null);
            current = true;
        },
        i(local) {
            if (current) return;
            transition_in(heading.$$.fragment, local);
            transition_in(generalsettingsblock.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(heading.$$.fragment, local);
            transition_out(generalsettingsblock.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) {
                detach(h1);
                detach(t1);
                detach(section);
            }
            destroy_component(heading);
            destroy_component(generalsettingsblock);
        }
    };
}

function create_fragment$x(ctx) {
    let div2;
    let current;
    let if_block = ctx[0].isLoaded && create_if_block$k();
    return {
        c() {
            div2 = element("div");
            if (if_block) if_block.c();
            attr(div2, "class", "w-full");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            if (if_block) if_block.m(div2, null);
            current = true;
        },
        p(ctx2, [dirty]) {
            if (ctx2[0].isLoaded) if (if_block) {
                if (dirty & 1) transition_in(if_block, 1);
            } else {
                if_block = create_if_block$k();
                if_block.c();
                transition_in(if_block, 1);
                if_block.m(div2, null);
            } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, (() => {
                    if_block = null;
                }));
                check_outros();
            }
        },
        i(local) {
            if (current) return;
            transition_in(if_block);
            current = true;
        },
        o(local) {
            transition_out(if_block);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div2);
            if (if_block) if_block.d();
        }
    };
}

function instance$v($$self, $$props, $$invalidate) {
    let $storageData;
    component_subscribe($$self, storageData, ($$value => $$invalidate(0, $storageData = $$value)));
    return [ $storageData ];
}

class SettingsPage extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$v, create_fragment$x, safe_not_equal, {});
    }
}

var top = "top";

var bottom = "bottom";

var right = "right";

var left = "left";

var auto = "auto";

var basePlacements = [ top, bottom, right, left ];

var start = "start";

var end = "end";

var clippingParents = "clippingParents";

var viewport = "viewport";

var popper = "popper";

var reference = "reference";

var variationPlacements = basePlacements.reduce((function(acc, placement) {
    return acc.concat([ placement + "-" + start, placement + "-" + end ]);
}), []);

var placements = [].concat(basePlacements, [ auto ]).reduce((function(acc, placement) {
    return acc.concat([ placement, placement + "-" + start, placement + "-" + end ]);
}), []);

var beforeRead = "beforeRead";

var read = "read";

var afterRead = "afterRead";

var beforeMain = "beforeMain";

var main = "main";

var afterMain = "afterMain";

var beforeWrite = "beforeWrite";

var write = "write";

var afterWrite = "afterWrite";

var modifierPhases = [ beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite ];

function getNodeName(element2) {
    return element2 ? (element2.nodeName || "").toLowerCase() : null;
}

function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}

function isElement$1(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach((function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element2 = state.elements[name];
        if (!isHTMLElement(element2) || !getNodeName(element2)) return;
        Object.assign(element2.style, style);
        Object.keys(attributes).forEach((function(name2) {
            var value = attributes[name2];
            if (value === false) element2.removeAttribute(name2); else element2.setAttribute(name2, value === true ? "" : value);
        }));
    }));
}

function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach((function(name) {
            var element2 = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
            var style = styleProperties.reduce((function(style2, property) {
                style2[property] = "";
                return style2;
            }), {});
            if (!isHTMLElement(element2) || !getNodeName(element2)) return;
            Object.assign(element2.style, style);
            Object.keys(attributes).forEach((function(attribute) {
                element2.removeAttribute(attribute);
            }));
        }));
    };
}

const applyStyles$1 = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect$2,
    requires: [ "computeStyles" ]
};

function getBasePlacement$1(placement) {
    return placement.split("-")[0];
}

var max = Math.max;

var min = Math.min;

var round = Math.round;

function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map((function(item) {
        return item.brand + "/" + item.version;
    })).join(" ");
    return navigator.userAgent;
}

function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element2, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element2.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element2)) {
        scaleX = element2.offsetWidth > 0 ? round(clientRect.width) / element2.offsetWidth || 1 : 1;
        scaleY = element2.offsetHeight > 0 ? round(clientRect.height) / element2.offsetHeight || 1 : 1;
    }
    var _ref = isElement$1(element2) ? getWindow(element2) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}

function getLayoutRect(element2) {
    var clientRect = getBoundingClientRect(element2);
    var width = element2.offsetWidth;
    var height = element2.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element2.offsetLeft,
        y: element2.offsetTop,
        width: width,
        height: height
    };
}

function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) return true; else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
            next = next.parentNode || next.host;
        } while (next);
    }
    return false;
}

function getComputedStyle(element2) {
    return getWindow(element2).getComputedStyle(element2);
}

function isTableElement(element2) {
    return [ "table", "td", "th" ].indexOf(getNodeName(element2)) >= 0;
}

function getDocumentElement(element2) {
    return ((isElement$1(element2) ? element2.ownerDocument : element2.document) || window.document).documentElement;
}

function getParentNode(element2) {
    if (getNodeName(element2) === "html") return element2;
    return element2.assignedSlot || element2.parentNode || (isShadowRoot(element2) ? element2.host : null) || getDocumentElement(element2);
}

function getTrueOffsetParent(element2) {
    if (!isHTMLElement(element2) || getComputedStyle(element2).position === "fixed") return null;
    return element2.offsetParent;
}

function getContainingBlock(element2) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element2)) {
        var elementCss = getComputedStyle(element2);
        if (elementCss.position === "fixed") return null;
    }
    var currentNode = getParentNode(element2);
    if (isShadowRoot(currentNode)) currentNode = currentNode.host;
    while (isHTMLElement(currentNode) && [ "html", "body" ].indexOf(getNodeName(currentNode)) < 0) {
        var css = getComputedStyle(currentNode);
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [ "transform", "perspective" ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode; else currentNode = currentNode.parentNode;
    }
    return null;
}

function getOffsetParent(element2) {
    var window2 = getWindow(element2);
    var offsetParent = getTrueOffsetParent(element2);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) return window2;
    return offsetParent || getContainingBlock(element2) || window2;
}

function getMainAxisFromPlacement(placement) {
    return [ "top", "bottom" ].indexOf(placement) >= 0 ? "x" : "y";
}

function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
}

function withinMaxClamp(min2, value, max2) {
    var v = within(min2, value, max2);
    return v > max2 ? max2 : v;
}

function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}

function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
    return keys.reduce((function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }), {});
}

var toPaddingObject = function(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement$1(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [ left, right ].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, 
    _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}

function effect$1(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) return;
    if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!contains(state.elements.popper, arrowElement)) return;
    state.elements.arrow = arrowElement;
}

const arrow$1 = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect$1,
    requires: [ "popperOffsets" ],
    requiresIfExists: [ "preventOverflow" ]
};

function getVariation(placement) {
    return placement.split("-")[1];
}

var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};

function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: round(x * dpr) / dpr || 0,
        y: round(y * dpr) / dpr || 0
    };
}

function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
        var offsetParent = getOffsetParent(popper2);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === getWindow(popper2)) {
            offsetParent = getDocumentElement(popper2);
            if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        }
        offsetParent;
        if (placement === top || (placement === left || placement === right) && variation === end) {
            sideY = bottom;
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === left || (placement === top || placement === bottom) && variation === end) {
            sideX = right;
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }, getWindow(popper2)) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", 
        _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", 
        _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", 
    _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}

function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
        placement: getBasePlacement$1(state.placement),
        variation: getVariation(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
}

const computeStyles$1 = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
};

var passive = {
    passive: true
};

function effect(_ref) {
    var state = _ref.state, instance2 = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach((function(scrollParent) {
        scrollParent.addEventListener("scroll", instance2.update, passive);
    }));
    if (resize) window2.addEventListener("resize", instance2.update, passive);
    return function() {
        if (scroll) scrollParents.forEach((function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance2.update, passive);
        }));
        if (resize) window2.removeEventListener("resize", instance2.update, passive);
    };
}

const eventListeners = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {},
    effect: effect,
    data: {}
};

var hash$1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};

function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (function(matched) {
        return hash$1[matched];
    }));
}

var hash = {
    start: "end",
    end: "start"
};

function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, (function(matched) {
        return hash[matched];
    }));
}

function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}

function getWindowScrollBarX(element2) {
    return getBoundingClientRect(getDocumentElement(element2)).left + getWindowScroll(element2).scrollLeft;
}

function getViewportRect(element2, strategy) {
    var win = getWindow(element2);
    var html = getDocumentElement(element2);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = isLayoutViewport();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + getWindowScrollBarX(element2),
        y: y
    };
}

function getDocumentRect(element2) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element2);
    var winScroll = getWindowScroll(element2);
    var body = (_element$ownerDocumen = element2.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element2);
    var y = -winScroll.scrollTop;
    if (getComputedStyle(body || html).direction === "rtl") x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}

function isScrollParent(element2) {
    var _getComputedStyle = getComputedStyle(element2), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
    if ([ "html", "body", "#document" ].indexOf(getNodeName(node)) >= 0) return node.ownerDocument.body;
    if (isHTMLElement(node) && isScrollParent(node)) return node;
    return getScrollParent(getParentNode(node));
}

function listScrollParents(element2, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = getScrollParent(element2);
    var isBody = scrollParent === ((_element$ownerDocumen = element2.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [ win ].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}

function getInnerBoundingClientRect(element2, strategy) {
    var rect = getBoundingClientRect(element2, false, strategy === "fixed");
    rect.top = rect.top + element2.clientTop;
    rect.left = rect.left + element2.clientLeft;
    rect.bottom = rect.top + element2.clientHeight;
    rect.right = rect.left + element2.clientWidth;
    rect.width = element2.clientWidth;
    rect.height = element2.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}

function getClientRectFromMixedType(element2, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element2, strategy)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element2)));
}

function getClippingParents(element2) {
    var clippingParents2 = listScrollParents(getParentNode(element2));
    var canEscapeClipping = [ "absolute", "fixed" ].indexOf(getComputedStyle(element2).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element2) ? getOffsetParent(element2) : element2;
    if (!isElement$1(clipperElement)) return [];
    return clippingParents2.filter((function(clippingParent) {
        return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    }));
}

function getClippingRect(element2, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element2) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [ rootBoundary ]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce((function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element2, clippingParent, strategy);
        accRect.top = max(rect.top, accRect.top);
        accRect.right = min(rect.right, accRect.right);
        accRect.bottom = min(rect.bottom, accRect.bottom);
        accRect.left = max(rect.left, accRect.left);
        return accRect;
    }), getClientRectFromMixedType(element2, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}

function computeOffsets(_ref) {
    var reference2 = _ref.reference, element2 = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement$1(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element2.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element2.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
            x: commonX,
            y: reference2.y - element2.height
        };
        break;

      case bottom:
        offsets = {
            x: commonX,
            y: reference2.y + reference2.height
        };
        break;

      case right:
        offsets = {
            x: reference2.x + reference2.width,
            y: commonY
        };
        break;

      case left:
        offsets = {
            x: reference2.x - element2.width,
            y: commonY
        };
        break;

      default:
        offsets = {
            x: reference2.x,
            y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch (variation) {
          case start:
            offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element2[len] / 2);
            break;

          case end:
            offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element2[len] / 2);
            break;
        }
    }
    return offsets;
}

function detectOverflow(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element2 = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement$1(element2) ? element2 : element2.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
        var offset2 = offsetData[placement];
        Object.keys(overflowOffsets).forEach((function(key) {
            var multiply = [ right, bottom ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [ top, bottom ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset2[axis] * multiply;
        }));
    }
    return overflowOffsets;
}

function computeAutoPlacement(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter((function(placement2) {
        return getVariation(placement2) === variation;
    })) : basePlacements;
    var allowedPlacements = placements$1.filter((function(placement2) {
        return allowedAutoPlacements.indexOf(placement2) >= 0;
    }));
    if (allowedPlacements.length === 0) allowedPlacements = placements$1;
    var overflows = allowedPlacements.reduce((function(acc, placement2) {
        acc[placement2] = detectOverflow(state, {
            placement: placement2,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[getBasePlacement$1(placement2)];
        return acc;
    }), {});
    return Object.keys(overflows).sort((function(a, b) {
        return overflows[a] - overflows[b];
    }));
}

function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement$1(placement) === auto) return [];
    var oppositePlacement = getOppositePlacement(placement);
    return [ getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement) ];
}

function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement$1(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [ getOppositePlacement(preferredPlacement) ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [ preferredPlacement ].concat(fallbackPlacements).reduce((function(acc, placement2) {
        return acc.concat(getBasePlacement$1(placement2) === auto ? computeAutoPlacement(state, {
            placement: placement2,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement2);
    }), []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map;
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i = 0; i < placements2.length; i++) {
        var placement = placements2[i];
        var _basePlacement = getBasePlacement$1(placement);
        var isStartVariation = getVariation(placement) === start;
        var isVertical = [ top, bottom ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = detectOverflow(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
        if (referenceRect[len] > popperRect[len]) mainVariationSide = getOppositePlacement(mainVariationSide);
        var altVariationSide = getOppositePlacement(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every((function(check) {
            return check;
        }))) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function(_i2) {
            var fittingPlacement = placements2.find((function(placement2) {
                var checks2 = checksMap.get(placement2);
                if (checks2) return checks2.slice(0, _i2).every((function(check) {
                    return check;
                }));
            }));
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for (var _i = numberOfChecks; _i > 0; _i--) {
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
}

const flip$1 = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: [ "offset" ],
    data: {
        _skip: false
    }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}

function isAnySideFullyClipped(overflow) {
    return [ top, right, bottom, left ].some((function(side) {
        return overflow[side] >= 0;
    }));
}

function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
        elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
    });
}

const hide$1 = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [ "preventOverflow" ],
    fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement$1(placement);
    var invertDistance = [ left, top ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
        placement: placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [ left, right ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}

function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [ 0, 0 ] : _options$offset;
    var data = placements.reduce((function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
        return acc;
    }), {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
}

const offset$1 = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [ "popperOffsets" ],
    fn: offset
};

function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
}

const popperOffsets$1 = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
};

function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
}

function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement$1(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets2) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? top : left;
        var altSide = mainAxis === "y" ? bottom : right;
        var len = mainAxis === "y" ? "height" : "width";
        var offset2 = popperOffsets2[mainAxis];
        var min$1 = offset2 + overflow[mainSide];
        var max$1 = offset2 - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide];
        var arrowLen = within(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset2 + maxOffset - offsetModifierValue;
        var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
        popperOffsets2[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? top : left;
        var _altSide = mainAxis === "x" ? bottom : right;
        var _offset = popperOffsets2[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [ top, left ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets2[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
}

const preventOverflow$1 = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: [ "offset" ]
};

function getHTMLElementScroll(element2) {
    return {
        scrollLeft: element2.scrollLeft,
        scrollTop: element2.scrollTop
    };
}

function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) return getWindowScroll(node); else return getHTMLElementScroll(node);
}

function isElementScaled(element2) {
    var rect = element2.getBoundingClientRect();
    var scaleX = round(rect.width) / element2.offsetWidth || 1;
    var scaleY = round(rect.height) / element2.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
}

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) scroll = getNodeScroll(offsetParent);
        if (isHTMLElement(offsetParent)) {
            offsets = getBoundingClientRect(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}

function order(modifiers) {
    var map = new Map;
    var visited = new Set;
    var result = [];
    modifiers.forEach((function(modifier) {
        map.set(modifier.name, modifier);
    }));
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach((function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        }));
        result.push(modifier);
    }
    modifiers.forEach((function(modifier) {
        if (!visited.has(modifier.name)) sort(modifier);
    }));
    return result;
}

function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce((function(acc, phase) {
        return acc.concat(orderedModifiers.filter((function(modifier) {
            return modifier.phase === phase;
        })));
    }), []);
}

function debounce$1(fn2) {
    var pending;
    return function() {
        if (!pending) pending = new Promise((function(resolve) {
            Promise.resolve().then((function() {
                pending = void 0;
                resolve(fn2());
            }));
        }));
        return pending;
    };
}

function mergeByName(modifiers) {
    var merged = modifiers.reduce((function(merged2, current) {
        var existing = merged2[current.name];
        merged2[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged2;
    }), {});
    return Object.keys(merged).map((function(key) {
        return merged[key];
    }));
}

var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};

function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
    return !args.some((function(element2) {
        return !(element2 && typeof element2.getBoundingClientRect === "function");
    }));
}

function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function(reference2, popper2, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference2,
                popper: popper2
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance2 = {
            state: state,
            setOptions: function(setOptionsAction) {
                var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options2);
                state.scrollParents = {
                    reference: isElement$1(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
                    popper: listScrollParents(popper2)
                };
                var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
                state.orderedModifiers = orderedModifiers.filter((function(m) {
                    return m.enabled;
                }));
                runModifierEffects();
                return instance2.update();
            },
            forceUpdate: function() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
                if (!areValidElements(reference3, popper3)) return;
                state.rects = {
                    reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
                    popper: getLayoutRect(popper3)
                };
                state.reset = false;
                state.placement = state.options.placement;
                state.orderedModifiers.forEach((function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                }));
                for (var index = 0; index < state.orderedModifiers.length; index++) {
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn2 === "function") state = fn2({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance2
                    }) || state;
                }
            },
            update: debounce$1((function() {
                return new Promise((function(resolve) {
                    instance2.forceUpdate();
                    resolve(state);
                }));
            })),
            destroy: function() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference2, popper2)) return instance2;
        instance2.setOptions(options).then((function(state2) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state2);
        }));
        function runModifierEffects() {
            state.orderedModifiers.forEach((function(_ref) {
                var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect3 = _ref.effect;
                if (typeof effect3 === "function") {
                    var cleanupFn = effect3({
                        state: state,
                        name: name,
                        instance: instance2,
                        options: options2
                    });
                    var noopFn = function() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            }));
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach((function(fn2) {
                return fn2();
            }));
            effectCleanupFns = [];
        }
        return instance2;
    };
}

var defaultModifiers = [ eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1 ];

var createPopper = popperGenerator({
    defaultModifiers: defaultModifiers
});

var BOX_CLASS = "tippy-box";

var CONTENT_CLASS = "tippy-content";

var BACKDROP_CLASS = "tippy-backdrop";

var ARROW_CLASS = "tippy-arrow";

var SVG_ARROW_CLASS = "tippy-svg-arrow";

var TOUCH_OPTIONS = {
    passive: true,
    capture: true
};

var TIPPY_DEFAULT_APPEND_TO = function() {
    return document.body;
};

function getValueAtIndexOrReturn(value, index, defaultValue) {
    if (Array.isArray(value)) {
        var v = value[index];
        return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
    }
    return value;
}

function isType(value, type) {
    var str = {}.toString.call(value);
    return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}

function invokeWithArgsOrReturn(value, args) {
    return typeof value === "function" ? value.apply(void 0, args) : value;
}

function debounce(fn5, ms) {
    if (ms === 0) return fn5;
    var timeout;
    return function(arg) {
        clearTimeout(timeout);
        timeout = setTimeout((function() {
            fn5(arg);
        }), ms);
    };
}

function splitBySpaces(value) {
    return value.split(/\s+/).filter(Boolean);
}

function normalizeToArray(value) {
    return [].concat(value);
}

function pushIfUnique(arr, value) {
    if (arr.indexOf(value) === -1) arr.push(value);
}

function unique(arr) {
    return arr.filter((function(item, index) {
        return arr.indexOf(item) === index;
    }));
}

function getBasePlacement(placement) {
    return placement.split("-")[0];
}

function arrayFrom(value) {
    return [].slice.call(value);
}

function removeUndefinedProps(obj) {
    return Object.keys(obj).reduce((function(acc, key) {
        if (obj[key] !== void 0) acc[key] = obj[key];
        return acc;
    }), {});
}

function div() {
    return document.createElement("div");
}

function isElement(value) {
    return [ "Element", "Fragment" ].some((function(type) {
        return isType(value, type);
    }));
}

function isNodeList(value) {
    return isType(value, "NodeList");
}

function isMouseEvent(value) {
    return isType(value, "MouseEvent");
}

function isReferenceElement(value) {
    return !!(value && value._tippy && value._tippy.reference === value);
}

function getArrayOfElements(value) {
    if (isElement(value)) return [ value ];
    if (isNodeList(value)) return arrayFrom(value);
    if (Array.isArray(value)) return value;
    return arrayFrom(document.querySelectorAll(value));
}

function setTransitionDuration(els, value) {
    els.forEach((function(el) {
        if (el) el.style.transitionDuration = value + "ms";
    }));
}

function setVisibilityState(els, state) {
    els.forEach((function(el) {
        if (el) el.setAttribute("data-state", state);
    }));
}

function getOwnerDocument(elementOrElements) {
    var _element$ownerDocumen;
    var _normalizeToArray = normalizeToArray(elementOrElements), element2 = _normalizeToArray[0];
    return element2 != null && (_element$ownerDocumen = element2.ownerDocument) != null && _element$ownerDocumen.body ? element2.ownerDocument : document;
}

function isCursorOutsideInteractiveBorder(popperTreeData, event) {
    var clientX = event.clientX, clientY = event.clientY;
    return popperTreeData.every((function(_ref) {
        var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
        var interactiveBorder = props.interactiveBorder;
        var basePlacement = getBasePlacement(popperState.placement);
        var offsetData = popperState.modifiersData.offset;
        if (!offsetData) return true;
        var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
        var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
        var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
        var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
        var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
        var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
        var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
        var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
        return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
    }));
}

function updateTransitionEndListener(box, action, listener) {
    var method = action + "EventListener";
    [ "transitionend", "webkitTransitionEnd" ].forEach((function(event) {
        box[method](event, listener);
    }));
}

function actualContains(parent, child) {
    var target = child;
    while (target) {
        var _target$getRootNode;
        if (parent.contains(target)) return true;
        target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
    }
    return false;
}

var currentInput = {
    isTouch: false
};

var lastMouseMoveTime = 0;

function onDocumentTouchStart() {
    if (currentInput.isTouch) return;
    currentInput.isTouch = true;
    if (window.performance) document.addEventListener("mousemove", onDocumentMouseMove);
}

function onDocumentMouseMove() {
    var now = performance.now();
    if (now - lastMouseMoveTime < 20) {
        currentInput.isTouch = false;
        document.removeEventListener("mousemove", onDocumentMouseMove);
    }
    lastMouseMoveTime = now;
}

function onWindowBlur() {
    var activeElement = document.activeElement;
    if (isReferenceElement(activeElement)) {
        var instance2 = activeElement._tippy;
        if (activeElement.blur && !instance2.state.isVisible) activeElement.blur();
    }
}

function bindGlobalEventListeners() {
    document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
    window.addEventListener("blur", onWindowBlur);
}

var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";

var isIE11 = isBrowser ? !!window.msCrypto : false;

var pluginProps = {
    animateFill: false,
    followCursor: false,
    inlinePositioning: false,
    sticky: false
};

var renderProps = {
    allowHTML: false,
    animation: "fade",
    arrow: true,
    content: "",
    inertia: false,
    maxWidth: 350,
    role: "tooltip",
    theme: "",
    zIndex: 9999
};

var defaultProps = Object.assign({
    appendTo: TIPPY_DEFAULT_APPEND_TO,
    aria: {
        content: "auto",
        expanded: "auto"
    },
    delay: 0,
    duration: [ 300, 250 ],
    getReferenceClientRect: null,
    hideOnClick: true,
    ignoreAttributes: false,
    interactive: false,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: "",
    offset: [ 0, 10 ],
    onAfterUpdate: function() {},
    onBeforeUpdate: function() {},
    onCreate: function() {},
    onDestroy: function() {},
    onHidden: function() {},
    onHide: function() {},
    onMount: function() {},
    onShow: function() {},
    onShown: function() {},
    onTrigger: function() {},
    onUntrigger: function() {},
    onClickOutside: function() {},
    placement: "top",
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: false,
    touch: true,
    trigger: "mouseenter focus",
    triggerTarget: null
}, pluginProps, renderProps);

var defaultKeys = Object.keys(defaultProps);

var setDefaultProps = function(partialProps) {
    var keys = Object.keys(partialProps);
    keys.forEach((function(key) {
        defaultProps[key] = partialProps[key];
    }));
};

function getExtendedPassedProps(passedProps) {
    var plugins = passedProps.plugins || [];
    var pluginProps2 = plugins.reduce((function(acc, plugin) {
        var name = plugin.name, defaultValue = plugin.defaultValue;
        if (name) {
            var _name;
            acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
        }
        return acc;
    }), {});
    return Object.assign({}, passedProps, pluginProps2);
}

function getDataAttributeProps(reference2, plugins) {
    var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
        plugins: plugins
    }))) : defaultKeys;
    var props = propKeys.reduce((function(acc, key) {
        var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
        if (!valueAsString) return acc;
        if (key === "content") acc[key] = valueAsString; else try {
            acc[key] = JSON.parse(valueAsString);
        } catch (e) {
            acc[key] = valueAsString;
        }
        return acc;
    }), {});
    return props;
}

function evaluateProps(reference2, props) {
    var out = Object.assign({}, props, {
        content: invokeWithArgsOrReturn(props.content, [ reference2 ])
    }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
    out.aria = Object.assign({}, defaultProps.aria, out.aria);
    out.aria = {
        expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
        content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
    };
    return out;
}

var innerHTML = function() {
    return "innerHTML";
};

function dangerouslySetInnerHTML(element2, html) {
    element2[innerHTML()] = html;
}

function createArrowElement(value) {
    var arrow2 = div();
    if (value === true) arrow2.className = ARROW_CLASS; else {
        arrow2.className = SVG_ARROW_CLASS;
        if (isElement(value)) arrow2.appendChild(value); else dangerouslySetInnerHTML(arrow2, value);
    }
    return arrow2;
}

function setContent(content, props) {
    if (isElement(props.content)) {
        dangerouslySetInnerHTML(content, "");
        content.appendChild(props.content);
    } else if (typeof props.content !== "function") if (props.allowHTML) dangerouslySetInnerHTML(content, props.content); else content.textContent = props.content;
}

function getChildren(popper2) {
    var box = popper2.firstElementChild;
    var boxChildren = arrayFrom(box.children);
    return {
        box: box,
        content: boxChildren.find((function(node) {
            return node.classList.contains(CONTENT_CLASS);
        })),
        arrow: boxChildren.find((function(node) {
            return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
        })),
        backdrop: boxChildren.find((function(node) {
            return node.classList.contains(BACKDROP_CLASS);
        }))
    };
}

function render(instance2) {
    var popper2 = div();
    var box = div();
    box.className = BOX_CLASS;
    box.setAttribute("data-state", "hidden");
    box.setAttribute("tabindex", "-1");
    var content = div();
    content.className = CONTENT_CLASS;
    content.setAttribute("data-state", "hidden");
    setContent(content, instance2.props);
    popper2.appendChild(box);
    box.appendChild(content);
    onUpdate(instance2.props, instance2.props);
    function onUpdate(prevProps, nextProps) {
        var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
        if (nextProps.theme) box2.setAttribute("data-theme", nextProps.theme); else box2.removeAttribute("data-theme");
        if (typeof nextProps.animation === "string") box2.setAttribute("data-animation", nextProps.animation); else box2.removeAttribute("data-animation");
        if (nextProps.inertia) box2.setAttribute("data-inertia", ""); else box2.removeAttribute("data-inertia");
        box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
        if (nextProps.role) box2.setAttribute("role", nextProps.role); else box2.removeAttribute("role");
        if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) setContent(content2, instance2.props);
        if (nextProps.arrow) {
            if (!arrow2) box2.appendChild(createArrowElement(nextProps.arrow)); else if (prevProps.arrow !== nextProps.arrow) {
                box2.removeChild(arrow2);
                box2.appendChild(createArrowElement(nextProps.arrow));
            }
        } else if (arrow2) box2.removeChild(arrow2);
    }
    return {
        popper: popper2,
        onUpdate: onUpdate
    };
}

render.$$tippy = true;

var idCounter = 1;

var mouseMoveListeners = [];

var mountedInstances = [];

function createTippy(reference2, passedProps) {
    var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isVisibleFromClick = false;
    var didHideDueToDocumentMouseDown = false;
    var didTouchMove = false;
    var ignoreOnFirstUpdate = false;
    var lastTriggerEvent;
    var currentTransitionEndListener;
    var onFirstUpdate;
    var listeners = [];
    var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
    var currentTarget;
    var id = idCounter++;
    var popperInstance = null;
    var plugins = unique(props.plugins);
    var state = {
        isEnabled: true,
        isVisible: false,
        isDestroyed: false,
        isMounted: false,
        isShown: false
    };
    var instance2 = {
        id: id,
        reference: reference2,
        popper: div(),
        popperInstance: popperInstance,
        props: props,
        state: state,
        plugins: plugins,
        clearDelayTimeouts: clearDelayTimeouts,
        setProps: setProps,
        setContent: setContent2,
        show: show,
        hide: hide2,
        hideWithInteractivity: hideWithInteractivity,
        enable: enable,
        disable: disable,
        unmount: unmount,
        destroy: destroy
    };
    if (!props.render) return instance2;
    var _props$render = props.render(instance2), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
    popper2.setAttribute("data-tippy-root", "");
    popper2.id = "tippy-" + instance2.id;
    instance2.popper = popper2;
    reference2._tippy = instance2;
    popper2._tippy = instance2;
    var pluginsHooks = plugins.map((function(plugin) {
        return plugin.fn(instance2);
    }));
    var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
    addListeners();
    handleAriaExpandedAttribute();
    handleStyles();
    invokeHook("onCreate", [ instance2 ]);
    if (props.showOnCreate) scheduleShow();
    popper2.addEventListener("mouseenter", (function() {
        if (instance2.props.interactive && instance2.state.isVisible) instance2.clearDelayTimeouts();
    }));
    popper2.addEventListener("mouseleave", (function() {
        if (instance2.props.interactive && instance2.props.trigger.indexOf("mouseenter") >= 0) getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    }));
    return instance2;
    function getNormalizedTouchSettings() {
        var touch = instance2.props.touch;
        return Array.isArray(touch) ? touch : [ touch, 0 ];
    }
    function getIsCustomTouchBehavior() {
        return getNormalizedTouchSettings()[0] === "hold";
    }
    function getIsDefaultRenderFn() {
        var _instance$props$rende;
        return !!((_instance$props$rende = instance2.props.render) != null && _instance$props$rende.$$tippy);
    }
    function getCurrentTarget() {
        return currentTarget || reference2;
    }
    function getDocument() {
        var parent = getCurrentTarget().parentNode;
        return parent ? getOwnerDocument(parent) : document;
    }
    function getDefaultTemplateChildren() {
        return getChildren(popper2);
    }
    function getDelay(isShow) {
        if (instance2.state.isMounted && !instance2.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") return 0;
        return getValueAtIndexOrReturn(instance2.props.delay, isShow ? 0 : 1, defaultProps.delay);
    }
    function handleStyles(fromHide) {
        if (fromHide === void 0) fromHide = false;
        popper2.style.pointerEvents = instance2.props.interactive && !fromHide ? "" : "none";
        popper2.style.zIndex = "" + instance2.props.zIndex;
    }
    function invokeHook(hook, args, shouldInvokePropsHook) {
        if (shouldInvokePropsHook === void 0) shouldInvokePropsHook = true;
        pluginsHooks.forEach((function(pluginHooks) {
            if (pluginHooks[hook]) pluginHooks[hook].apply(pluginHooks, args);
        }));
        if (shouldInvokePropsHook) {
            var _instance$props;
            (_instance$props = instance2.props)[hook].apply(_instance$props, args);
        }
    }
    function handleAriaContentAttribute() {
        var aria = instance2.props.aria;
        if (!aria.content) return;
        var attr2 = "aria-" + aria.content;
        var id2 = popper2.id;
        var nodes = normalizeToArray(instance2.props.triggerTarget || reference2);
        nodes.forEach((function(node) {
            var currentValue = node.getAttribute(attr2);
            if (instance2.state.isVisible) node.setAttribute(attr2, currentValue ? currentValue + " " + id2 : id2); else {
                var nextValue = currentValue && currentValue.replace(id2, "").trim();
                if (nextValue) node.setAttribute(attr2, nextValue); else node.removeAttribute(attr2);
            }
        }));
    }
    function handleAriaExpandedAttribute() {
        if (hasAriaExpanded || !instance2.props.aria.expanded) return;
        var nodes = normalizeToArray(instance2.props.triggerTarget || reference2);
        nodes.forEach((function(node) {
            if (instance2.props.interactive) node.setAttribute("aria-expanded", instance2.state.isVisible && node === getCurrentTarget() ? "true" : "false"); else node.removeAttribute("aria-expanded");
        }));
    }
    function cleanupInteractiveMouseListeners() {
        getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
        mouseMoveListeners = mouseMoveListeners.filter((function(listener) {
            return listener !== debouncedOnMouseMove;
        }));
    }
    function onDocumentPress(event) {
        if (currentInput.isTouch) if (didTouchMove || event.type === "mousedown") return;
        var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
        if (instance2.props.interactive && actualContains(popper2, actualTarget)) return;
        if (normalizeToArray(instance2.props.triggerTarget || reference2).some((function(el) {
            return actualContains(el, actualTarget);
        }))) {
            if (currentInput.isTouch) return;
            if (instance2.state.isVisible && instance2.props.trigger.indexOf("click") >= 0) return;
        } else invokeHook("onClickOutside", [ instance2, event ]);
        if (instance2.props.hideOnClick === true) {
            instance2.clearDelayTimeouts();
            instance2.hide();
            didHideDueToDocumentMouseDown = true;
            setTimeout((function() {
                didHideDueToDocumentMouseDown = false;
            }));
            if (!instance2.state.isMounted) removeDocumentPress();
        }
    }
    function onTouchMove() {
        didTouchMove = true;
    }
    function onTouchStart() {
        didTouchMove = false;
    }
    function addDocumentPress() {
        var doc = getDocument();
        doc.addEventListener("mousedown", onDocumentPress, true);
        doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
        doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
        doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
    }
    function removeDocumentPress() {
        var doc = getDocument();
        doc.removeEventListener("mousedown", onDocumentPress, true);
        doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
        doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
        doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
    }
    function onTransitionedOut(duration, callback) {
        onTransitionEnd(duration, (function() {
            if (!instance2.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) callback();
        }));
    }
    function onTransitionedIn(duration, callback) {
        onTransitionEnd(duration, callback);
    }
    function onTransitionEnd(duration, callback) {
        var box = getDefaultTemplateChildren().box;
        function listener(event) {
            if (event.target === box) {
                updateTransitionEndListener(box, "remove", listener);
                callback();
            }
        }
        if (duration === 0) return callback();
        updateTransitionEndListener(box, "remove", currentTransitionEndListener);
        updateTransitionEndListener(box, "add", listener);
        currentTransitionEndListener = listener;
    }
    function on(eventType, handler, options) {
        if (options === void 0) options = false;
        var nodes = normalizeToArray(instance2.props.triggerTarget || reference2);
        nodes.forEach((function(node) {
            node.addEventListener(eventType, handler, options);
            listeners.push({
                node: node,
                eventType: eventType,
                handler: handler,
                options: options
            });
        }));
    }
    function addListeners() {
        if (getIsCustomTouchBehavior()) {
            on("touchstart", onTrigger2, {
                passive: true
            });
            on("touchend", onMouseLeave, {
                passive: true
            });
        }
        splitBySpaces(instance2.props.trigger).forEach((function(eventType) {
            if (eventType === "manual") return;
            on(eventType, onTrigger2);
            switch (eventType) {
              case "mouseenter":
                on("mouseleave", onMouseLeave);
                break;

              case "focus":
                on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
                break;

              case "focusin":
                on("focusout", onBlurOrFocusOut);
                break;
            }
        }));
    }
    function removeListeners() {
        listeners.forEach((function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
        }));
        listeners = [];
    }
    function onTrigger2(event) {
        var _lastTriggerEvent;
        var shouldScheduleClickHide = false;
        if (!instance2.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) return;
        var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
        lastTriggerEvent = event;
        currentTarget = event.currentTarget;
        handleAriaExpandedAttribute();
        if (!instance2.state.isVisible && isMouseEvent(event)) mouseMoveListeners.forEach((function(listener) {
            return listener(event);
        }));
        if (event.type === "click" && (instance2.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance2.props.hideOnClick !== false && instance2.state.isVisible) shouldScheduleClickHide = true; else scheduleShow(event);
        if (event.type === "click") isVisibleFromClick = !shouldScheduleClickHide;
        if (shouldScheduleClickHide && !wasFocused) scheduleHide(event);
    }
    function onMouseMove(event) {
        var target = event.target;
        var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
        if (event.type === "mousemove" && isCursorOverReferenceOrPopper) return;
        var popperTreeData = getNestedPopperTree().concat(popper2).map((function(popper22) {
            var _instance$popperInsta;
            var instance22 = popper22._tippy;
            var state2 = (_instance$popperInsta = instance22.popperInstance) == null ? void 0 : _instance$popperInsta.state;
            if (state2) return {
                popperRect: popper22.getBoundingClientRect(),
                popperState: state2,
                props: props
            };
            return null;
        })).filter(Boolean);
        if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
            cleanupInteractiveMouseListeners();
            scheduleHide(event);
        }
    }
    function onMouseLeave(event) {
        var shouldBail = isEventListenerStopped(event) || instance2.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
        if (shouldBail) return;
        if (instance2.props.interactive) {
            instance2.hideWithInteractivity(event);
            return;
        }
        scheduleHide(event);
    }
    function onBlurOrFocusOut(event) {
        if (instance2.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) return;
        if (instance2.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) return;
        scheduleHide(event);
    }
    function isEventListenerStopped(event) {
        return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
    }
    function createPopperInstance() {
        destroyPopperInstance();
        var _instance$props2 = instance2.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
        var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
        var computedReference = getReferenceClientRect ? {
            getBoundingClientRect: getReferenceClientRect,
            contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
        } : reference2;
        var tippyModifier = {
            name: "$$tippy",
            enabled: true,
            phase: "beforeWrite",
            requires: [ "computeStyles" ],
            fn: function(_ref2) {
                var state2 = _ref2.state;
                if (getIsDefaultRenderFn()) {
                    var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
                    [ "placement", "reference-hidden", "escaped" ].forEach((function(attr2) {
                        if (attr2 === "placement") box.setAttribute("data-placement", state2.placement); else if (state2.attributes.popper["data-popper-" + attr2]) box.setAttribute("data-" + attr2, ""); else box.removeAttribute("data-" + attr2);
                    }));
                    state2.attributes.popper = {};
                }
            }
        };
        var modifiers = [ {
            name: "offset",
            options: {
                offset: offset2
            }
        }, {
            name: "preventOverflow",
            options: {
                padding: {
                    top: 2,
                    bottom: 2,
                    left: 5,
                    right: 5
                }
            }
        }, {
            name: "flip",
            options: {
                padding: 5
            }
        }, {
            name: "computeStyles",
            options: {
                adaptive: !moveTransition
            }
        }, tippyModifier ];
        if (getIsDefaultRenderFn() && arrow2) modifiers.push({
            name: "arrow",
            options: {
                element: arrow2,
                padding: 3
            }
        });
        modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
        instance2.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
            placement: placement,
            onFirstUpdate: onFirstUpdate,
            modifiers: modifiers
        }));
    }
    function destroyPopperInstance() {
        if (instance2.popperInstance) {
            instance2.popperInstance.destroy();
            instance2.popperInstance = null;
        }
    }
    function mount() {
        var appendTo = instance2.props.appendTo;
        var parentNode;
        var node = getCurrentTarget();
        if (instance2.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") parentNode = node.parentNode; else parentNode = invokeWithArgsOrReturn(appendTo, [ node ]);
        if (!parentNode.contains(popper2)) parentNode.appendChild(popper2);
        instance2.state.isMounted = true;
        createPopperInstance();
    }
    function getNestedPopperTree() {
        return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
    }
    function scheduleShow(event) {
        instance2.clearDelayTimeouts();
        if (event) invokeHook("onTrigger", [ instance2, event ]);
        addDocumentPress();
        var delay = getDelay(true);
        var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
        if (currentInput.isTouch && touchValue === "hold" && touchDelay) delay = touchDelay;
        if (delay) showTimeout = setTimeout((function() {
            instance2.show();
        }), delay); else instance2.show();
    }
    function scheduleHide(event) {
        instance2.clearDelayTimeouts();
        invokeHook("onUntrigger", [ instance2, event ]);
        if (!instance2.state.isVisible) {
            removeDocumentPress();
            return;
        }
        if (instance2.props.trigger.indexOf("mouseenter") >= 0 && instance2.props.trigger.indexOf("click") >= 0 && [ "mouseleave", "mousemove" ].indexOf(event.type) >= 0 && isVisibleFromClick) return;
        var delay = getDelay(false);
        if (delay) hideTimeout = setTimeout((function() {
            if (instance2.state.isVisible) instance2.hide();
        }), delay); else scheduleHideAnimationFrame = requestAnimationFrame((function() {
            instance2.hide();
        }));
    }
    function enable() {
        instance2.state.isEnabled = true;
    }
    function disable() {
        instance2.hide();
        instance2.state.isEnabled = false;
    }
    function clearDelayTimeouts() {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
        cancelAnimationFrame(scheduleHideAnimationFrame);
    }
    function setProps(partialProps) {
        if (instance2.state.isDestroyed) return;
        invokeHook("onBeforeUpdate", [ instance2, partialProps ]);
        removeListeners();
        var prevProps = instance2.props;
        var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
            ignoreAttributes: true
        }));
        instance2.props = nextProps;
        addListeners();
        if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
            cleanupInteractiveMouseListeners();
            debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
        }
        if (prevProps.triggerTarget && !nextProps.triggerTarget) normalizeToArray(prevProps.triggerTarget).forEach((function(node) {
            node.removeAttribute("aria-expanded");
        })); else if (nextProps.triggerTarget) reference2.removeAttribute("aria-expanded");
        handleAriaExpandedAttribute();
        handleStyles();
        if (onUpdate) onUpdate(prevProps, nextProps);
        if (instance2.popperInstance) {
            createPopperInstance();
            getNestedPopperTree().forEach((function(nestedPopper) {
                requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
            }));
        }
        invokeHook("onAfterUpdate", [ instance2, partialProps ]);
    }
    function setContent2(content) {
        instance2.setProps({
            content: content
        });
    }
    function show() {
        var isAlreadyVisible = instance2.state.isVisible;
        var isDestroyed = instance2.state.isDestroyed;
        var isDisabled = !instance2.state.isEnabled;
        var isTouchAndTouchDisabled = currentInput.isTouch && !instance2.props.touch;
        var duration = getValueAtIndexOrReturn(instance2.props.duration, 0, defaultProps.duration);
        if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) return;
        if (getCurrentTarget().hasAttribute("disabled")) return;
        invokeHook("onShow", [ instance2 ], false);
        if (instance2.props.onShow(instance2) === false) return;
        instance2.state.isVisible = true;
        if (getIsDefaultRenderFn()) popper2.style.visibility = "visible";
        handleStyles();
        addDocumentPress();
        if (!instance2.state.isMounted) popper2.style.transition = "none";
        if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
            setTransitionDuration([ box, content ], 0);
        }
        onFirstUpdate = function() {
            var _instance$popperInsta2;
            if (!instance2.state.isVisible || ignoreOnFirstUpdate) return;
            ignoreOnFirstUpdate = true;
            void popper2.offsetHeight;
            popper2.style.transition = instance2.props.moveTransition;
            if (getIsDefaultRenderFn() && instance2.props.animation) {
                var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
                setTransitionDuration([ _box, _content ], duration);
                setVisibilityState([ _box, _content ], "visible");
            }
            handleAriaContentAttribute();
            handleAriaExpandedAttribute();
            pushIfUnique(mountedInstances, instance2);
            (_instance$popperInsta2 = instance2.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
            invokeHook("onMount", [ instance2 ]);
            if (instance2.props.animation && getIsDefaultRenderFn()) onTransitionedIn(duration, (function() {
                instance2.state.isShown = true;
                invokeHook("onShown", [ instance2 ]);
            }));
        };
        mount();
    }
    function hide2() {
        var isAlreadyHidden = !instance2.state.isVisible;
        var isDestroyed = instance2.state.isDestroyed;
        var isDisabled = !instance2.state.isEnabled;
        var duration = getValueAtIndexOrReturn(instance2.props.duration, 1, defaultProps.duration);
        if (isAlreadyHidden || isDestroyed || isDisabled) return;
        invokeHook("onHide", [ instance2 ], false);
        if (instance2.props.onHide(instance2) === false) return;
        instance2.state.isVisible = false;
        instance2.state.isShown = false;
        ignoreOnFirstUpdate = false;
        isVisibleFromClick = false;
        if (getIsDefaultRenderFn()) popper2.style.visibility = "hidden";
        cleanupInteractiveMouseListeners();
        removeDocumentPress();
        handleStyles(true);
        if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
            if (instance2.props.animation) {
                setTransitionDuration([ box, content ], duration);
                setVisibilityState([ box, content ], "hidden");
            }
        }
        handleAriaContentAttribute();
        handleAriaExpandedAttribute();
        if (instance2.props.animation) {
            if (getIsDefaultRenderFn()) onTransitionedOut(duration, instance2.unmount);
        } else instance2.unmount();
    }
    function hideWithInteractivity(event) {
        getDocument().addEventListener("mousemove", debouncedOnMouseMove);
        pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
        debouncedOnMouseMove(event);
    }
    function unmount() {
        if (instance2.state.isVisible) instance2.hide();
        if (!instance2.state.isMounted) return;
        destroyPopperInstance();
        getNestedPopperTree().forEach((function(nestedPopper) {
            nestedPopper._tippy.unmount();
        }));
        if (popper2.parentNode) popper2.parentNode.removeChild(popper2);
        mountedInstances = mountedInstances.filter((function(i) {
            return i !== instance2;
        }));
        instance2.state.isMounted = false;
        invokeHook("onHidden", [ instance2 ]);
    }
    function destroy() {
        if (instance2.state.isDestroyed) return;
        instance2.clearDelayTimeouts();
        instance2.unmount();
        removeListeners();
        delete reference2._tippy;
        instance2.state.isDestroyed = true;
        invokeHook("onDestroy", [ instance2 ]);
    }
}

function tippy(targets, optionalProps) {
    if (optionalProps === void 0) optionalProps = {};
    var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
    bindGlobalEventListeners();
    var passedProps = Object.assign({}, optionalProps, {
        plugins: plugins
    });
    var elements = getArrayOfElements(targets);
    var instances = elements.reduce((function(acc, reference2) {
        var instance2 = reference2 && createTippy(reference2, passedProps);
        if (instance2) acc.push(instance2);
        return acc;
    }), []);
    return isElement(targets) ? instances[0] : instances;
}

tippy.defaultProps = defaultProps;

tippy.setDefaultProps = setDefaultProps;

tippy.currentInput = currentInput;

Object.assign({}, applyStyles$1, {
    effect: function(_ref) {
        var state = _ref.state;
        var initialStyles = {
            popper: {
                position: state.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
});

tippy.setDefaultProps({
    render: render
});

function tooltip(node, params) {
    const tip = tippy(node, {
        theme: "material",
        delay: [ 200, 0 ],
        duration: [ 300, 0 ],
        ...params
    });
    if (!params.content) tip.disable();
    return {
        update: newParams => {
            tip.setProps(newParams);
            if (!params.content) return tip.disable();
            tip.enable();
        },
        destroy: () => {
            tip.destroy();
        }
    };
}

function get_each_context$a(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[3] = list[i].id;
    child_ctx[4] = list[i].href;
    child_ctx[5] = list[i].name;
    child_ctx[6] = list[i].sections;
    return child_ctx;
}

function get_each_context_1$1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[3] = list[i].id;
    child_ctx[5] = list[i].name;
    return child_ctx;
}

function create_if_block_4(ctx) {
    let span;
    let raw_value = ctx[2][ctx[3]] + "";
    return {
        c() {
            span = element("span");
            attr(span, "class", "mr-1 h-5 w-5 svelte-uuq9kw");
            toggle_class(span, "heart", ctx[3] === "donate");
        },
        m(target, anchor) {
            insert(target, span, anchor);
            span.innerHTML = raw_value;
        },
        p(ctx2, dirty) {
            if (dirty & 0) toggle_class(span, "heart", ctx2[3] === "donate");
        },
        d(detaching) {
            if (detaching) detach(span);
        }
    };
}

function create_each_block_1$1(ctx) {
    let a;
    let t_value = ctx[5] + "";
    let t;
    return {
        c() {
            a = element("a");
            t = text(t_value);
            attr(a, "href", `${ctx[4]}#${String(ctx[3])}`);
            attr(a, "class", "ml-8 svelte-uuq9kw");
        },
        m(target, anchor) {
            insert(target, a, anchor);
            append(a, t);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(a);
        }
    };
}

function create_each_block$a(ctx) {
    let a;
    let t0;
    let t1_value = ctx[5] + "";
    let t1;
    let t2;
    let each_1_anchor;
    let if_block = ctx[2][ctx[3]] && create_if_block_4(ctx);
    let each_value_1 = ensure_array_like(Object.values(ctx[6]));
    let each_blocks = [];
    for (let i = 0; i < each_value_1.length; i += 1) each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
    return {
        c() {
            a = element("a");
            if (if_block) if_block.c();
            t0 = space();
            t1 = text(t1_value);
            t2 = space();
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            each_1_anchor = empty();
            attr(a, "href", ctx[4]);
            attr(a, "class", "flex items-center svelte-uuq9kw");
            toggle_class(a, "current", ctx[0] === ctx[3]);
        },
        m(target, anchor) {
            insert(target, a, anchor);
            if (if_block) if_block.m(a, null);
            append(a, t0);
            append(a, t1);
            insert(target, t2, anchor);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(target, anchor);
            insert(target, each_1_anchor, anchor);
        },
        p(ctx2, dirty) {
            if (ctx2[2][ctx2[3]]) if_block.p(ctx2, dirty);
            if (dirty & 1) toggle_class(a, "current", ctx2[0] === ctx2[3]);
            if (dirty & 0) {
                each_value_1 = ensure_array_like(Object.values(ctx2[6]));
                let i;
                for (i = 0; i < each_value_1.length; i += 1) {
                    const child_ctx = get_each_context_1$1(ctx2, each_value_1, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty); else {
                        each_blocks[i] = create_each_block_1$1(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
                    }
                }
                for (;i < each_blocks.length; i += 1) each_blocks[i].d(1);
                each_blocks.length = each_value_1.length;
            }
        },
        d(detaching) {
            if (detaching) {
                detach(a);
                detach(t2);
                detach(each_1_anchor);
            }
            if (if_block) if_block.d();
            destroy_each(each_blocks, detaching);
        }
    };
}

function create_if_block$j(ctx) {
    let div2;
    let span1;
    let b;
    let t1;
    let span0;
    let t2;
    let t3;
    let t4;
    let mounted;
    let dispose;
    let if_block0 = ctx[1].used && create_if_block_3$2(ctx);
    let if_block1 = ctx[1].remaining && create_if_block_2$4(ctx);
    let if_block2 = ctx[1].reset && create_if_block_1$7(ctx);
    return {
        c() {
            div2 = element("div");
            span1 = element("span");
            b = element("b");
            b.textContent = `${getMsg("rateLimits")}`;
            t1 = space();
            span0 = element("span");
            t2 = space();
            if (if_block0) if_block0.c();
            t3 = space();
            if (if_block1) if_block1.c();
            t4 = space();
            if (if_block2) if_block2.c();
            attr(b, "class", "font-bold");
            attr(span0, "class", "ml-2 inline-flex h-[0.85rem] w-[0.85rem] text-skin-text");
            attr(span1, "class", "col-span-2 mt-4 flex items-center border-b border-skin-delimiter");
            attr(div2, "class", "my-4 grid w-max grid-cols-2 gap-x-4 gap-y-1");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, span1);
            append(span1, b);
            append(span1, t1);
            append(span1, span0);
            span0.innerHTML = HelpCircleIcon;
            append(div2, t2);
            if (if_block0) if_block0.m(div2, null);
            append(div2, t3);
            if (if_block1) if_block1.m(div2, null);
            append(div2, t4);
            if (if_block2) if_block2.m(div2, null);
            if (!mounted) {
                dispose = action_destroyer(tooltip.call(null, span1, {
                    content: getMsg("rateLimitsDescription"),
                    allowHTML: true
                }));
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            if (ctx2[1].used) if (if_block0) if_block0.p(ctx2, dirty); else {
                if_block0 = create_if_block_3$2(ctx2);
                if_block0.c();
                if_block0.m(div2, t3);
            } else if (if_block0) {
                if_block0.d(1);
                if_block0 = null;
            }
            if (ctx2[1].remaining) if (if_block1) if_block1.p(ctx2, dirty); else {
                if_block1 = create_if_block_2$4(ctx2);
                if_block1.c();
                if_block1.m(div2, t4);
            } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
            }
            if (ctx2[1].reset) if (if_block2) if_block2.p(ctx2, dirty); else {
                if_block2 = create_if_block_1$7(ctx2);
                if_block2.c();
                if_block2.m(div2, null);
            } else if (if_block2) {
                if_block2.d(1);
                if_block2 = null;
            }
        },
        d(detaching) {
            if (detaching) detach(div2);
            if (if_block0) if_block0.d();
            if (if_block1) if_block1.d();
            if (if_block2) if_block2.d();
            mounted = false;
            dispose();
        }
    };
}

function create_if_block_3$2(ctx) {
    let div0;
    let t1;
    let div1;
    let t2_value = ctx[1].used + "";
    let t2;
    return {
        c() {
            div0 = element("div");
            div0.textContent = "used";
            t1 = space();
            div1 = element("div");
            t2 = text(t2_value);
        },
        m(target, anchor) {
            insert(target, div0, anchor);
            insert(target, t1, anchor);
            insert(target, div1, anchor);
            append(div1, t2);
        },
        p(ctx2, dirty) {
            if (dirty & 2 && t2_value !== (t2_value = ctx2[1].used + "")) set_data(t2, t2_value);
        },
        d(detaching) {
            if (detaching) {
                detach(div0);
                detach(t1);
                detach(div1);
            }
        }
    };
}

function create_if_block_2$4(ctx) {
    let div0;
    let t1;
    let div1;
    let t2_value = ctx[1].remaining + "";
    let t2;
    return {
        c() {
            div0 = element("div");
            div0.textContent = "remaining";
            t1 = space();
            div1 = element("div");
            t2 = text(t2_value);
        },
        m(target, anchor) {
            insert(target, div0, anchor);
            insert(target, t1, anchor);
            insert(target, div1, anchor);
            append(div1, t2);
        },
        p(ctx2, dirty) {
            if (dirty & 2 && t2_value !== (t2_value = ctx2[1].remaining + "")) set_data(t2, t2_value);
        },
        d(detaching) {
            if (detaching) {
                detach(div0);
                detach(t1);
                detach(div1);
            }
        }
    };
}

function create_if_block_1$7(ctx) {
    let div0;
    let t1;
    let div1;
    let t2_value = formatTime(ctx[1].reset) + "";
    let t2;
    return {
        c() {
            div0 = element("div");
            div0.textContent = "reset at";
            t1 = space();
            div1 = element("div");
            t2 = text(t2_value);
        },
        m(target, anchor) {
            insert(target, div0, anchor);
            insert(target, t1, anchor);
            insert(target, div1, anchor);
            append(div1, t2);
        },
        p(ctx2, dirty) {
            if (dirty & 2 && t2_value !== (t2_value = formatTime(ctx2[1].reset) + "")) set_data(t2, t2_value);
        },
        d(detaching) {
            if (detaching) {
                detach(div0);
                detach(t1);
                detach(div1);
            }
        }
    };
}

function create_fragment$w(ctx) {
    let aside;
    let a;
    let div0;
    let t0;
    let nav;
    let t1;
    let div1;
    let each_value = ensure_array_like(Object.values(routes));
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) each_blocks[i] = create_each_block$a(get_each_context$a(ctx, each_value, i));
    let if_block = ctx[1] && create_if_block$j(ctx);
    return {
        c() {
            aside = element("aside");
            a = element("a");
            div0 = element("div");
            t0 = space();
            nav = element("nav");
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            t1 = space();
            div1 = element("div");
            if (if_block) if_block.c();
            attr(div0, "class", "logo svelte-uuq9kw");
            attr(a, "href", "./watch.html");
            attr(a, "class", "self-center text-skin-text hover:text-skin-text svelte-uuq9kw");
            attr(nav, "class", "flex flex-col p-4 leading-8");
            attr(div1, "class", "mt-auto w-full text-xs");
            attr(aside, "class", "sticky top-4 flex min-h-[calc(100vh-1rem)] flex-col pt-4 text-sm");
        },
        m(target, anchor) {
            insert(target, aside, anchor);
            append(aside, a);
            append(a, div0);
            div0.innerHTML = LogoIcon;
            append(aside, t0);
            append(aside, nav);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(nav, null);
            append(aside, t1);
            append(aside, div1);
            if (if_block) if_block.m(div1, null);
        },
        p(ctx2, [dirty]) {
            if (dirty & 5) {
                each_value = ensure_array_like(Object.values(routes));
                let i;
                for (i = 0; i < each_value.length; i += 1) {
                    const child_ctx = get_each_context$a(ctx2, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty); else {
                        each_blocks[i] = create_each_block$a(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(nav, null);
                    }
                }
                for (;i < each_blocks.length; i += 1) each_blocks[i].d(1);
                each_blocks.length = each_value.length;
            }
            if (ctx2[1]) if (if_block) if_block.p(ctx2, dirty); else {
                if_block = create_if_block$j(ctx2);
                if_block.c();
                if_block.m(div1, null);
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(aside);
            destroy_each(each_blocks, detaching);
            if (if_block) if_block.d();
        }
    };
}

function formatTime(ts) {
    const d = new Date(ts);
    return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
}

function instance$u($$self, $$props, $$invalidate) {
    let $rateLimits;
    component_subscribe($$self, rateLimits, ($$value => $$invalidate(1, $rateLimits = $$value)));
    let {current: current} = $$props;
    const pageIcons = {
        watch: WatchListIcon,
        "import-export": BackupIcon,
        settings: SettingsIcon,
        info: HelpCircleIcon,
        donate: HeartIcon
    };
    $$self.$$set = $$props2 => {
        if ("current" in $$props2) $$invalidate(0, current = $$props2.current);
    };
    return [ current, $rateLimits, pageIcons ];
}

class Sidebar extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$u, create_fragment$w, safe_not_equal, {
            current: 0
        });
    }
}

function create_fragment$v(ctx) {
    let div1;
    let label;
    let span;
    let t0;
    let t1;
    let input;
    let t2;
    let div0;
    let t3;
    let tooltip_action;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[6].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
    let div1_levels = [ {
        tabindex: "0"
    }, {
        role: "button"
    }, ctx[4] ];
    let div_data_1 = {};
    for (let i = 0; i < div1_levels.length; i += 1) div_data_1 = assign(div_data_1, div1_levels[i]);
    return {
        c() {
            div1 = element("div");
            label = element("label");
            span = element("span");
            t0 = text(ctx[2]);
            t1 = space();
            input = element("input");
            t2 = space();
            div0 = element("div");
            t3 = space();
            if (default_slot) default_slot.c();
            attr(span, "class", "hidden");
            attr(input, "class", "peer hidden");
            attr(input, "type", "checkbox");
            attr(div0, "class", "ios-checkbox shrink-0");
            attr(label, "class", "flex max-w-max items-center space-x-1");
            set_attributes(div1, div_data_1);
        },
        m(target, anchor) {
            insert(target, div1, anchor);
            append(div1, label);
            append(label, span);
            append(span, t0);
            append(label, t1);
            append(label, input);
            input.checked = ctx[0];
            append(label, t2);
            append(label, div0);
            append(label, t3);
            if (default_slot) default_slot.m(label, null);
            current = true;
            if (!mounted) {
                dispose = [ listen(input, "change", ctx[10]), listen(input, "change", (function() {
                    if (is_function(ctx[1])) ctx[1].apply(this, arguments);
                })), listen(div1, "keydown", ctx[3]), listen(div1, "focus", ctx[7]), listen(div1, "mouseover", ctx[8]), listen(div1, "mouseleave", ctx[9]), action_destroyer(tooltip_action = tooltip.call(null, div1, {
                    content: ctx[2]
                })) ];
                mounted = true;
            }
        },
        p(new_ctx, [dirty]) {
            ctx = new_ctx;
            if (!current || dirty & 4) set_data(t0, ctx[2]);
            if (dirty & 1) input.checked = ctx[0];
            if (default_slot) if (default_slot.p && (!current || dirty & 32)) update_slot_base(default_slot, default_slot_template, ctx, ctx[5], !current ? get_all_dirty_from_scope(ctx[5]) : get_slot_changes(default_slot_template, ctx[5], dirty, null), null);
            set_attributes(div1, div_data_1 = get_spread_update(div1_levels, [ {
                tabindex: "0"
            }, {
                role: "button"
            }, dirty & 16 && ctx[4] ]));
            if (tooltip_action && is_function(tooltip_action.update) && dirty & 4) tooltip_action.update.call(null, {
                content: ctx[2]
            });
        },
        i(local) {
            if (current) return;
            transition_in(default_slot, local);
            current = true;
        },
        o(local) {
            transition_out(default_slot, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div1);
            if (default_slot) default_slot.d(detaching);
            mounted = false;
            run_all(dispose);
        }
    };
}

function instance$t($$self, $$props, $$invalidate) {
    const omit_props_names = [ "checked", "changeHandler", "tooltipText" ];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let {$$slots: slots = {}, $$scope: $$scope} = $$props;
    let {checked: checked = false} = $$props;
    let {changeHandler: changeHandler} = $$props;
    let {tooltipText: tooltipText = ""} = $$props;
    const btnClick = e => {
        var _a;
        if (e.key === "Enter" || e.key === " ") {
            e.stopPropagation();
            e.preventDefault();
            (_a = e.currentTarget.querySelector("input")) === null || _a === void 0 ? void 0 : _a.click();
        }
    };
    function focus_handler(event) {
        bubble.call(this, $$self, event);
    }
    function mouseover_handler(event) {
        bubble.call(this, $$self, event);
    }
    function mouseleave_handler(event) {
        bubble.call(this, $$self, event);
    }
    function input_change_handler() {
        checked = this.checked;
        $$invalidate(0, checked);
    }
    $$self.$$set = $$new_props => {
        $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
        $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
        if ("checked" in $$new_props) $$invalidate(0, checked = $$new_props.checked);
        if ("changeHandler" in $$new_props) $$invalidate(1, changeHandler = $$new_props.changeHandler);
        if ("tooltipText" in $$new_props) $$invalidate(2, tooltipText = $$new_props.tooltipText);
        if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
    };
    return [ checked, changeHandler, tooltipText, btnClick, $$restProps, $$scope, slots, focus_handler, mouseover_handler, mouseleave_handler, input_change_handler ];
}

class IosCheckbox extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$t, create_fragment$v, safe_not_equal, {
            checked: 0,
            changeHandler: 1,
            tooltipText: 2
        });
    }
}

function create_default_slot$a(ctx) {
    let span;
    return {
        c() {
            span = element("span");
            span.textContent = "Include accounts data";
            attr(span, "class", "text-sm");
        },
        m(target, anchor) {
            insert(target, span, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(span);
        }
    };
}

function create_if_block$i(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            div2.textContent = "Caution! Don't share access and refresh tokens for your Reddit accounts!";
            attr(div2, "class", "font-semibold text-skin-accent");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_catch_block_1(ctx) {
    return {
        c: noop,
        m: noop,
        p: noop,
        d: noop
    };
}

function create_then_block_1(ctx) {
    let button0;
    let div0;
    let raw0_value = (ctx[1] ? CheckMarkIcon : CopyIcon) + "";
    let t0;
    let t1_value = ctx[1] ? "copied" : "copy";
    let t1;
    let t2;
    let button1;
    let div1;
    let t3;
    let mounted;
    let dispose;
    function click_handler() {
        return ctx[5](ctx[7]);
    }
    function click_handler_1() {
        return ctx[6](ctx[7]);
    }
    return {
        c() {
            button0 = element("button");
            div0 = element("div");
            t0 = space();
            t1 = text(t1_value);
            t2 = space();
            button1 = element("button");
            div1 = element("div");
            t3 = text("\n                        export");
            attr(div0, "class", "mr-[0.125rem] h-5 w-5");
            attr(button0, "class", "flex items-center border-none bg-transparent px-1 py-0 hover:bg-transparent hover:text-skin-accent disabled:cursor-default svelte-eb0ou7");
            button0.disabled = ctx[1];
            toggle_class(button0, "success", ctx[1]);
            attr(div1, "class", "h-5 w-5");
            attr(button1, "class", "flex items-center border-none bg-transparent px-1 py-0 hover:bg-transparent hover:text-skin-accent disabled:cursor-default");
        },
        m(target, anchor) {
            insert(target, button0, anchor);
            append(button0, div0);
            div0.innerHTML = raw0_value;
            append(button0, t0);
            append(button0, t1);
            insert(target, t2, anchor);
            insert(target, button1, anchor);
            append(button1, div1);
            div1.innerHTML = JsonIcon;
            append(button1, t3);
            if (!mounted) {
                dispose = [ listen(button0, "click", click_handler), listen(button1, "click", click_handler_1) ];
                mounted = true;
            }
        },
        p(new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & 2 && raw0_value !== (raw0_value = (ctx[1] ? CheckMarkIcon : CopyIcon) + "")) div0.innerHTML = raw0_value;
            if (dirty & 2 && t1_value !== (t1_value = ctx[1] ? "copied" : "copy")) set_data(t1, t1_value);
            if (dirty & 2) button0.disabled = ctx[1];
            if (dirty & 2) toggle_class(button0, "success", ctx[1]);
        },
        d(detaching) {
            if (detaching) {
                detach(button0);
                detach(t2);
                detach(button1);
            }
            mounted = false;
            run_all(dispose);
        }
    };
}

function create_pending_block_1(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            div2.textContent = "Loading";
            attr(div2, "class", "mr-auto");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_catch_block(ctx) {
    return {
        c: noop,
        m: noop,
        p: noop,
        d: noop
    };
}

function create_then_block(ctx) {
    let t_value = ctx[7] + "";
    let t;
    return {
        c() {
            t = text(t_value);
        },
        m(target, anchor) {
            insert(target, t, anchor);
        },
        p(ctx2, dirty) {
            if (dirty & 4 && t_value !== (t_value = ctx2[7] + "")) set_data(t, t_value);
        },
        d(detaching) {
            if (detaching) detach(t);
        }
    };
}

function create_pending_block(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            div2.textContent = "Loading";
            attr(div2, "class", "h-60 w-full");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_fragment$u(ctx) {
    let section;
    let heading;
    let t0;
    let div0;
    let ioscheckbox;
    let updating_checked;
    let t1;
    let t2;
    let div4;
    let div3;
    let div1;
    let promise;
    let t3;
    let div2;
    let promise_1;
    let current;
    heading = new Heading({
        props: {
            id: "export",
            name: "Export config"
        }
    });
    function ioscheckbox_checked_binding(value) {
        ctx[4](value);
    }
    let ioscheckbox_props = {
        title: "Include accounts data",
        $$slots: {
            default: [ create_default_slot$a ]
        },
        $$scope: {
            ctx: ctx
        }
    };
    if (ctx[0] !== void 0) ioscheckbox_props.checked = ctx[0];
    ioscheckbox = new IosCheckbox({
        props: ioscheckbox_props
    });
    binding_callbacks.push((() => bind(ioscheckbox, "checked", ioscheckbox_checked_binding)));
    let if_block = ctx[0] && create_if_block$i();
    let info = {
        ctx: ctx,
        current: null,
        token: null,
        hasCatch: false,
        pending: create_pending_block_1,
        then: create_then_block_1,
        catch: create_catch_block_1,
        value: 7
    };
    handle_promise(promise = ctx[2], info);
    let info_1 = {
        ctx: ctx,
        current: null,
        token: null,
        hasCatch: false,
        pending: create_pending_block,
        then: create_then_block,
        catch: create_catch_block,
        value: 7
    };
    handle_promise(promise_1 = ctx[2], info_1);
    return {
        c() {
            section = element("section");
            create_component(heading.$$.fragment);
            t0 = space();
            div0 = element("div");
            create_component(ioscheckbox.$$.fragment);
            t1 = space();
            if (if_block) if_block.c();
            t2 = space();
            div4 = element("div");
            div3 = element("div");
            div1 = element("div");
            info.block.c();
            t3 = space();
            div2 = element("div");
            info_1.block.c();
            attr(div0, "class", "my-2 max-w-max");
            attr(div1, "class", "flex justify-end space-x-4 rounded-t-md border border-b-0 border-skin-base bg-skin-bg2 p-1");
            attr(div2, "class", "h-56 w-full overflow-y-scroll whitespace-pre-wrap break-all rounded-b-md border border-skin-base p-1 font-mono");
            attr(section, "class", "mb-8");
        },
        m(target, anchor) {
            insert(target, section, anchor);
            mount_component(heading, section, null);
            append(section, t0);
            append(section, div0);
            mount_component(ioscheckbox, div0, null);
            append(div0, t1);
            if (if_block) if_block.m(div0, null);
            append(section, t2);
            append(section, div4);
            append(div4, div3);
            append(div3, div1);
            info.block.m(div1, info.anchor = null);
            info.mount = () => div1;
            info.anchor = null;
            append(div3, t3);
            append(div3, div2);
            info_1.block.m(div2, info_1.anchor = null);
            info_1.mount = () => div2;
            info_1.anchor = null;
            current = true;
        },
        p(new_ctx, [dirty]) {
            ctx = new_ctx;
            const ioscheckbox_changes = {};
            if (dirty & 256) ioscheckbox_changes.$$scope = {
                dirty: dirty,
                ctx: ctx
            };
            if (!updating_checked && dirty & 1) {
                updating_checked = true;
                ioscheckbox_changes.checked = ctx[0];
                add_flush_callback((() => updating_checked = false));
            }
            ioscheckbox.$set(ioscheckbox_changes);
            if (ctx[0]) if (if_block) ; else {
                if_block = create_if_block$i();
                if_block.c();
                if_block.m(div0, null);
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
            info.ctx = ctx;
            if (dirty & 4 && promise !== (promise = ctx[2]) && handle_promise(promise, info)) ; else update_await_block_branch(info, ctx, dirty);
            info_1.ctx = ctx;
            if (dirty & 4 && promise_1 !== (promise_1 = ctx[2]) && handle_promise(promise_1, info_1)) ; else update_await_block_branch(info_1, ctx, dirty);
        },
        i(local) {
            if (current) return;
            transition_in(heading.$$.fragment, local);
            transition_in(ioscheckbox.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(heading.$$.fragment, local);
            transition_out(ioscheckbox.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(section);
            destroy_component(heading);
            destroy_component(ioscheckbox);
            if (if_block) if_block.d();
            info.block.d();
            info.token = null;
            info = null;
            info_1.block.d();
            info_1.token = null;
            info_1 = null;
        }
    };
}

function downloadText(text2, filename = "file.txt", type = "text/plain") {
    const element2 = document.createElement("a");
    const file = new Blob([ text2 ], {
        type: `${type};charset=utf-8`
    });
    element2.href = URL.createObjectURL(file);
    element2.download = filename;
    document.body.appendChild(element2);
    element2.click();
}

function instance$s($$self, $$props, $$invalidate) {
    let wasCopied = false;
    let withAccs = false;
    let dataPromise;
    function setClipboard(text2) {
        const type = "text/plain";
        const blob = new Blob([ text2 ], {
            type: type
        });
        const data = [ new ClipboardItem({
            [type]: blob
        }) ];
        navigator.clipboard.write(data).then((() => {
            $$invalidate(1, wasCopied = true);
            setTimeout((() => {
                $$invalidate(1, wasCopied = false);
            }), 2e3);
        }), (e => {
            console.error(e);
        }));
    }
    function ioscheckbox_checked_binding(value) {
        withAccs = value;
        $$invalidate(0, withAccs);
    }
    const click_handler = data => setClipboard(data);
    const click_handler_1 = data => downloadText(data, "reddit-post-notifier_config.json", "application/json");
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 1) $$invalidate(2, dataPromise = storage.getExportData(withAccs).then((d => JSON.stringify(d, null, 2))));
    };
    return [ withAccs, wasCopied, dataPromise, setClipboard, ioscheckbox_checked_binding, click_handler, click_handler_1 ];
}

class Export extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$s, create_fragment$u, safe_not_equal, {});
    }
}

function create_if_block_1$6(ctx) {
    let div2;
    let t;
    return {
        c() {
            div2 = element("div");
            t = text(ctx[2]);
            attr(div2, "class", "text-skin-error");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, t);
        },
        p(ctx2, dirty) {
            if (dirty & 4) set_data(t, ctx2[2]);
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_if_block$h(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            div2.textContent = "successfully imported";
            attr(div2, "class", "text-skin-success");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_fragment$t(ctx) {
    let section;
    let heading;
    let t0;
    let div2;
    let span;
    let t2;
    let label;
    let input;
    let t3;
    let textarea;
    let t4;
    let button;
    let t5;
    let t6;
    let t7;
    let current;
    let mounted;
    let dispose;
    heading = new Heading({
        props: {
            id: "import",
            name: "Import config"
        }
    });
    let if_block0 = ctx[2] && create_if_block_1$6(ctx);
    let if_block1 = ctx[4] && create_if_block$h();
    return {
        c() {
            section = element("section");
            create_component(heading.$$.fragment);
            t0 = space();
            div2 = element("div");
            span = element("span");
            span.textContent = "Paste configuration below or import from a file";
            t2 = space();
            label = element("label");
            input = element("input");
            t3 = space();
            textarea = element("textarea");
            t4 = space();
            button = element("button");
            t5 = text("Import");
            t6 = space();
            if (if_block0) if_block0.c();
            t7 = space();
            if (if_block1) if_block1.c();
            attr(span, "class", "text-sm");
            attr(input, "type", "file");
            attr(input, "accept", "application/json");
            attr(input, "id", "import-file");
            attr(label, "class", "flex items-center border-none bg-transparent px-1 py-0 hover:bg-transparent hover:text-skin-accent disabled:cursor-default");
            attr(label, "for", "import-file");
            attr(div2, "class", "flex items-center justify-between space-x-4 rounded-t-md border border-b-0 border-skin-base bg-skin-bg2 p-1");
            attr(textarea, "name", "import-conf");
            attr(textarea, "cols", "35");
            attr(textarea, "rows", "10");
            attr(textarea, "class", "svelte-11e579a");
            attr(button, "class", "standard-button");
            button.disabled = ctx[3];
            attr(section, "class", "mb-8 text-sm");
        },
        m(target, anchor) {
            insert(target, section, anchor);
            mount_component(heading, section, null);
            append(section, t0);
            append(section, div2);
            append(div2, span);
            append(div2, t2);
            append(div2, label);
            append(label, input);
            ctx[6](input);
            append(section, t3);
            append(section, textarea);
            set_input_value(textarea, ctx[0]);
            append(section, t4);
            append(section, button);
            append(button, t5);
            append(section, t6);
            if (if_block0) if_block0.m(section, null);
            append(section, t7);
            if (if_block1) if_block1.m(section, null);
            current = true;
            if (!mounted) {
                dispose = [ listen(textarea, "input", ctx[7]), listen(textarea, "change", ctx[8]), listen(button, "click", ctx[9]) ];
                mounted = true;
            }
        },
        p(ctx2, [dirty]) {
            if (dirty & 1) set_input_value(textarea, ctx2[0]);
            if (!current || dirty & 8) button.disabled = ctx2[3];
            if (ctx2[2]) if (if_block0) if_block0.p(ctx2, dirty); else {
                if_block0 = create_if_block_1$6(ctx2);
                if_block0.c();
                if_block0.m(section, t7);
            } else if (if_block0) {
                if_block0.d(1);
                if_block0 = null;
            }
            if (ctx2[4]) if (if_block1) ; else {
                if_block1 = create_if_block$h();
                if_block1.c();
                if_block1.m(section, null);
            } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
            }
        },
        i(local) {
            if (current) return;
            transition_in(heading.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(heading.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(section);
            destroy_component(heading);
            ctx[6](null);
            if (if_block0) if_block0.d();
            if (if_block1) if_block1.d();
            mounted = false;
            run_all(dispose);
        }
    };
}

function instance$r($$self, $$props, $$invalidate) {
    let data;
    let fileInput;
    let errMessage = "";
    let importing = false;
    let wasImported = false;
    onMount((() => {
        fileInput.addEventListener("change", (e => {
            if (!(e.currentTarget instanceof HTMLInputElement)) return;
            const {files: files} = e.currentTarget;
            if (!(files === null || files === void 0 ? void 0 : files.length)) return;
            const file = files[0];
            file.text().then((content => {
                $$invalidate(0, data = content);
                void onImport();
            })).catch((e2 => {
                $$invalidate(2, errMessage = e2.message);
            }));
        }));
    }));
    async function onImport() {
        $$invalidate(3, importing = true);
        try {
            if (!data) return;
            const parsed = JSON.parse(data);
            await storage.importData(parsed);
            $$invalidate(4, wasImported = true);
        } catch (error) {
            $$invalidate(2, errMessage = error.message);
        }
        $$invalidate(3, importing = false);
    }
    function input_binding($$value) {
        binding_callbacks[$$value ? "unshift" : "push"]((() => {
            fileInput = $$value;
            $$invalidate(1, fileInput);
        }));
    }
    function textarea_input_handler() {
        data = this.value;
        $$invalidate(0, data);
    }
    const change_handler = () => {
        $$invalidate(2, errMessage = "");
        $$invalidate(4, wasImported = false);
    };
    const click_handler = () => void onImport();
    return [ data, fileInput, errMessage, importing, wasImported, onImport, input_binding, textarea_input_handler, change_handler, click_handler ];
}

class Import extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$r, create_fragment$t, safe_not_equal, {});
    }
}

function create_fragment$s(ctx) {
    let export_1;
    let t;
    let import_1;
    let current;
    export_1 = new Export({});
    import_1 = new Import({});
    return {
        c() {
            create_component(export_1.$$.fragment);
            t = space();
            create_component(import_1.$$.fragment);
        },
        m(target, anchor) {
            mount_component(export_1, target, anchor);
            insert(target, t, anchor);
            mount_component(import_1, target, anchor);
            current = true;
        },
        p: noop,
        i(local) {
            if (current) return;
            transition_in(export_1.$$.fragment, local);
            transition_in(import_1.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(export_1.$$.fragment, local);
            transition_out(import_1.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(t);
            destroy_component(export_1, detaching);
            destroy_component(import_1, detaching);
        }
    };
}

class Backup extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, null, create_fragment$s, safe_not_equal, {});
    }
}

function create_fragment$r(ctx) {
    let div12;
    let details0;
    let summary0;
    let t1;
    let div0;
    let t2;
    let t3_value = (ctx[0] || 10) + "";
    let t3;
    let t4;
    let t5_value = (ctx[0] || 10) + "";
    let t5;
    let t6;
    let t7;
    let details2;
    let summary1;
    let t9;
    let div2;
    let span0;
    let t10;
    let b;
    let t12;
    let a0;
    let t13;
    let t14;
    let t15;
    let details1;
    let t21;
    let details3;
    let summary3;
    let t23;
    let div10;
    let div3;
    let t24;
    let a1;
    let t25;
    let t26;
    let a2;
    let t28;
    let a3;
    let t30;
    let t31;
    let br;
    let t32;
    let div8;
    let t41;
    let div9;
    let t42;
    let span1;
    let t43;
    let t44;
    let details4;
    let summary4;
    let t46;
    let div11;
    let raw1_value = getMsg("helpFiltersVsSearch") + "";
    return {
        c() {
            div12 = element("div");
            details0 = element("details");
            summary0 = element("summary");
            summary0.textContent = "Update interval and missing posts";
            t1 = space();
            div0 = element("div");
            t2 = text("The extension's update logic is simple. It just checks the latest ");
            t3 = text(t3_value);
            t4 = text(" posts in given Subreddits, Reddit\n            Searches, or following users. This means that the extension may miss some posts if more than ");
            t5 = text(t5_value);
            t6 = text(" of\n            them were posted during the selected interval. It often happens when you just open the browser after a long time\n            or set a big update interval for Subreddits with frequent updates.");
            t7 = space();
            details2 = element("details");
            summary1 = element("summary");
            summary1.textContent = "Watch for new posts in a subreddit";
            t9 = space();
            div2 = element("div");
            span0 = element("span");
            t10 = text("If you want to monitor\n                ");
            b = element("b");
            b.textContent = "every";
            t12 = text("\n                post in a Subreddit/Multireddit go to the\n                ");
            a0 = element("a");
            t13 = text("Subreddits section");
            t14 = text("\n                and add the Subreddit name to the list.");
            t15 = space();
            details1 = element("details");
            details1.innerHTML = `<summary class="svelte-9yugzc">Filter Subreddit posts</summary> <div><p>If you add filter rules, they will be applied to every post. The posts that don&#39;t match at least\n                        one rule will be excluded.</p> <p>To test whether it works correctly, click the &quot;fetch and display the latest posts&quot; button.</p></div>`;
            t21 = space();
            details3 = element("details");
            summary3 = element("summary");
            summary3.textContent = "Watch for specific posts with Reddit Search";
            t23 = space();
            div10 = element("div");
            div3 = element("div");
            t24 = text('You can stay up to date with Reddit Search by adding a query in the "search query" field in the\n                ');
            a1 = element("a");
            t25 = text("Reddit Search");
            t26 = text("\n                section. Look at the\n                ");
            a2 = element("a");
            a2.textContent = "Reddit Search wiki";
            t28 = text("\n                to learn supported keywords and\n                ");
            a3 = element("a");
            a3.textContent = "boolean operators\n                ";
            t30 = text(".");
            t31 = space();
            br = element("br");
            t32 = space();
            div8 = element("div");
            div8.innerHTML = `Search query examples:\n                <ul class="ml-8"><li><div>any posts that contain word France or Germany:</div> <div class="query-example svelte-9yugzc">France OR Germany</div></li> <li><div>posts that have Attack on Titan or its Japanese name in their title</div> <div class="query-example svelte-9yugzc">title:&quot;attack on titan&quot; OR title:&quot;shingeki no kyojin&quot;</div></li></ul>`;
            t41 = space();
            div9 = element("div");
            t42 = text("To receive notifications don't forget to select the checkbox with\n                ");
            span1 = element("span");
            t43 = text("\n                icon.");
            t44 = space();
            details4 = element("details");
            summary4 = element("summary");
            summary4.textContent = `${getMsg("helpFiltersVsSearchTitle")}`;
            t46 = space();
            div11 = element("div");
            attr(summary0, "class", "svelte-9yugzc");
            attr(div0, "class", "ml-8");
            attr(summary1, "class", "svelte-9yugzc");
            attr(a0, "href", ctx[1]);
            attr(details1, "class", "mt-2");
            details1.open = true;
            attr(div2, "class", "ml-8");
            attr(details2, "class", "mt-6");
            attr(summary3, "class", "svelte-9yugzc");
            attr(a1, "href", ctx[2]);
            attr(a2, "href", "https://www.reddit.com/wiki/search#wiki_field_search");
            attr(a2, "target", "_blank");
            attr(a2, "rel", "noreferrer");
            attr(a3, "href", "https://www.reddit.com/wiki/search#wiki_boolean_operators");
            attr(a3, "target", "_blank");
            attr(a3, "rel", "noreferrer");
            attr(span1, "class", "icon inline-block h-4 w-4 svelte-9yugzc");
            attr(div10, "class", "ml-8");
            attr(details3, "class", "mt-6");
            attr(summary4, "class", "svelte-9yugzc");
            attr(div11, "class", "ml-6");
            attr(details4, "class", "mt-6");
            attr(div12, "class", "text-base");
        },
        m(target, anchor) {
            insert(target, div12, anchor);
            append(div12, details0);
            append(details0, summary0);
            append(details0, t1);
            append(details0, div0);
            append(div0, t2);
            append(div0, t3);
            append(div0, t4);
            append(div0, t5);
            append(div0, t6);
            append(div12, t7);
            append(div12, details2);
            append(details2, summary1);
            append(details2, t9);
            append(details2, div2);
            append(div2, span0);
            append(span0, t10);
            append(span0, b);
            append(span0, t12);
            append(span0, a0);
            append(a0, t13);
            append(span0, t14);
            append(div2, t15);
            append(div2, details1);
            append(div12, t21);
            append(div12, details3);
            append(details3, summary3);
            append(details3, t23);
            append(details3, div10);
            append(div10, div3);
            append(div3, t24);
            append(div3, a1);
            append(a1, t25);
            append(div3, t26);
            append(div3, a2);
            append(div3, t28);
            append(div3, a3);
            append(div3, t30);
            append(div10, t31);
            append(div10, br);
            append(div10, t32);
            append(div10, div8);
            append(div10, t41);
            append(div10, div9);
            append(div9, t42);
            append(div9, span1);
            span1.innerHTML = BellIcon;
            append(div9, t43);
            append(div12, t44);
            append(div12, details4);
            append(details4, summary4);
            append(details4, t46);
            append(details4, div11);
            div11.innerHTML = raw1_value;
        },
        p(ctx2, [dirty]) {
            if (dirty & 1 && t3_value !== (t3_value = (ctx2[0] || 10) + "")) set_data(t3, t3_value);
            if (dirty & 1 && t5_value !== (t5_value = (ctx2[0] || 10) + "")) set_data(t5, t5_value);
        },
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(div12);
        }
    };
}

function instance$q($$self, $$props, $$invalidate) {
    let $storageData;
    component_subscribe($$self, storageData, ($$value => $$invalidate(3, $storageData = $$value)));
    let limit = 10;
    const subredditHref = `${routes.settings.href}#${routes.watch.sections.subreddit.id}`;
    const searchHref = `${routes.settings.href}#${routes.watch.sections["reddit-search"].id}`;
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 8) $$invalidate(0, limit = $storageData.options.limit || 10);
    };
    return [ limit, subredditHref, searchHref, $storageData ];
}

class HelpBlock extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$q, create_fragment$r, safe_not_equal, {});
    }
}

function create_fragment$q(ctx) {
    let table;
    return {
        c() {
            table = element("table");
            table.innerHTML = `<thead><tr><th align="center" class="svelte-17p93yu">Key</th> <th class="svelte-17p93yu">Function</th></tr></thead> <tbody><tr><td align="center" class="svelte-17p93yu"><span class="kbd svelte-17p93yu">Alt</span>+<span class="kbd svelte-17p93yu">Shift</span>+<span class="kbd svelte-17p93yu">S</span></td> <td class="svelte-17p93yu">Open the extension&#39;s popup</td></tr> <tr><td align="center" class="svelte-17p93yu"><span class="kbd svelte-17p93yu">↓</span>, <span class="kbd svelte-17p93yu">j</span></td> <td class="svelte-17p93yu">Select the next item</td></tr> <tr><td align="center" class="svelte-17p93yu"><span class="kbd svelte-17p93yu">↑</span>, <span class="kbd svelte-17p93yu">k</span></td> <td class="svelte-17p93yu">Select the previous item</td></tr> <tr><td align="center" class="svelte-17p93yu"><span class="kbd svelte-17p93yu">→</span>,\n                <span class="kbd svelte-17p93yu">l</span>,\n                <span class="kbd svelte-17p93yu">Enter</span></td> <td class="svelte-17p93yu">Expand selected posts group; open selected post in the new tab</td></tr> <tr><td align="center" class="svelte-17p93yu"><span class="kbd svelte-17p93yu">←</span>,\n                <span class="kbd svelte-17p93yu">h</span>,\n                <span class="kbd svelte-17p93yu">Backspace</span></td> <td class="svelte-17p93yu">Collapse selected posts group</td></tr> <tr><td align="center" class="svelte-17p93yu"><span class="kbd svelte-17p93yu">Space</span></td> <td class="svelte-17p93yu">Mark selected item as read (remove it)</td></tr> <tr><td align="center" class="svelte-17p93yu"><span class="kbd svelte-17p93yu">p</span></td> <td class="svelte-17p93yu">Pin selected post; remove already pinned post</td></tr></tbody>`;
            attr(table, "class", "border-collapse text-base");
        },
        m(target, anchor) {
            insert(target, table, anchor);
        },
        p: noop,
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(table);
        }
    };
}

class ShortcutsTable extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, null, create_fragment$q, safe_not_equal, {});
    }
}

function create_fragment$p(ctx) {
    let section0;
    let heading0;
    let t0;
    let helpblock;
    let t1;
    let section1;
    let heading1;
    let t2;
    let shortcutstable;
    let t3;
    let div2;
    let current;
    heading0 = new Heading({
        props: {
            id: ctx[0].help.id,
            name: ctx[0].help.name
        }
    });
    helpblock = new HelpBlock({});
    heading1 = new Heading({
        props: {
            id: ctx[0].shortcuts.id,
            name: ctx[0].shortcuts.name
        }
    });
    shortcutstable = new ShortcutsTable({});
    return {
        c() {
            section0 = element("section");
            create_component(heading0.$$.fragment);
            t0 = space();
            create_component(helpblock.$$.fragment);
            t1 = space();
            section1 = element("section");
            create_component(heading1.$$.fragment);
            t2 = space();
            create_component(shortcutstable.$$.fragment);
            t3 = space();
            div2 = element("div");
            attr(section0, "class", "mb-8");
            attr(section1, "class", "mb-8");
            attr(div2, "class", "h-52");
        },
        m(target, anchor) {
            insert(target, section0, anchor);
            mount_component(heading0, section0, null);
            append(section0, t0);
            mount_component(helpblock, section0, null);
            insert(target, t1, anchor);
            insert(target, section1, anchor);
            mount_component(heading1, section1, null);
            append(section1, t2);
            mount_component(shortcutstable, section1, null);
            insert(target, t3, anchor);
            insert(target, div2, anchor);
            current = true;
        },
        p: noop,
        i(local) {
            if (current) return;
            transition_in(heading0.$$.fragment, local);
            transition_in(helpblock.$$.fragment, local);
            transition_in(heading1.$$.fragment, local);
            transition_in(shortcutstable.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(heading0.$$.fragment, local);
            transition_out(helpblock.$$.fragment, local);
            transition_out(heading1.$$.fragment, local);
            transition_out(shortcutstable.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) {
                detach(section0);
                detach(t1);
                detach(section1);
                detach(t3);
                detach(div2);
            }
            destroy_component(heading0);
            destroy_component(helpblock);
            destroy_component(heading1);
            destroy_component(shortcutstable);
        }
    };
}

function instance$p($$self) {
    const s = routes.info.sections;
    return [ s ];
}

class InfoPage extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$p, create_fragment$p, safe_not_equal, {});
    }
}

function create_fragment$o(ctx) {
    let article;
    let div2;
    let div0;
    let b;
    let t1;
    let span0;
    let t3;
    let div1;
    let a0;
    let span1;
    let t4;
    let span2;
    let t6;
    let span3;
    let t8;
    let a1;
    let span4;
    let t9;
    let span5;
    let t11;
    let span6;
    let t13;
    let a2;
    let span7;
    let t14;
    let span8;
    return {
        c() {
            article = element("article");
            div2 = element("div");
            div0 = element("div");
            b = element("b");
            b.textContent = "Reddit Post Notifier";
            t1 = space();
            span0 = element("span");
            span0.textContent = `${`v. ${ctx[0]}`}`;
            t3 = space();
            div1 = element("div");
            a0 = element("a");
            span1 = element("span");
            t4 = space();
            span2 = element("span");
            span2.textContent = "rating";
            t6 = space();
            span3 = element("span");
            span3.textContent = "|";
            t8 = space();
            a1 = element("a");
            span4 = element("span");
            t9 = space();
            span5 = element("span");
            span5.textContent = "github";
            t11 = space();
            span6 = element("span");
            span6.textContent = "|";
            t13 = space();
            a2 = element("a");
            span7 = element("span");
            t14 = space();
            span8 = element("span");
            span8.textContent = "support development";
            attr(b, "class", "text-xl");
            attr(span0, "class", "ml-1 text-base");
            attr(span1, "class", "mr-1 h-4 w-4 text-skin-text group-hover:text-skin-accent");
            attr(a0, "href", ctx[1]);
            attr(a0, "class", "group inline-flex items-center");
            attr(a0, "target", "_blank");
            attr(a0, "rel", "noreferrer");
            attr(span4, "class", "mr-1 h-4 w-4 text-skin-text group-hover:text-skin-accent");
            attr(a1, "href", "https://github.com/flytaly/reddit-post-notifier");
            attr(a1, "target", "_blank");
            attr(a1, "rel", "noreferrer");
            attr(a1, "class", "group inline-flex items-center");
            attr(span7, "class", "mr-1 h-4 w-4 text-rose-200 group-hover:text-rose-500");
            attr(a2, "href", routes.donate.href);
            attr(a2, "class", "group group inline-flex items-center");
            attr(div1, "class", "flex gap-1 text-sm");
            attr(article, "class", "flex items-center");
        },
        m(target, anchor) {
            insert(target, article, anchor);
            append(article, div2);
            append(div2, div0);
            append(div0, b);
            append(div0, t1);
            append(div0, span0);
            append(div2, t3);
            append(div2, div1);
            append(div1, a0);
            append(a0, span1);
            span1.innerHTML = StarIcon;
            append(a0, t4);
            append(a0, span2);
            append(div1, t6);
            append(div1, span3);
            append(div1, t8);
            append(div1, a1);
            append(a1, span4);
            span4.innerHTML = GithubIcon;
            append(a1, t9);
            append(a1, span5);
            append(div1, t11);
            append(div1, span6);
            append(div1, t13);
            append(div1, a2);
            append(a2, span7);
            span7.innerHTML = HeartIcon;
            append(a2, t14);
            append(a2, span8);
        },
        p: noop,
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(article);
        }
    };
}

function instance$o($$self) {
    const {version: version} = browser.runtime.getManifest();
    const addonHref = "https://chrome.google.com/webstore/detail/reddit-post-notifier/hoolgoecmeegpbidbbcefgkjegdejibd/reviews";
    return [ version, addonHref ];
}

class ShortInfo extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$o, create_fragment$o, safe_not_equal, {});
    }
}

function create_fragment$n(ctx) {
    let button;
    let span;
    let t;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[3].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[2], null);
    return {
        c() {
            button = element("button");
            span = element("span");
            t = space();
            if (default_slot) default_slot.c();
            attr(span, "class", "mr-1 h-5 w-5");
            attr(button, "class", "standard-button flex items-center rounded border-transparent bg-transparent p-1 text-skin-accent2 hover:border-skin-accent2 disabled:hover:border-skin-gray");
            button.disabled = ctx[1];
        },
        m(target, anchor) {
            insert(target, button, anchor);
            append(button, span);
            span.innerHTML = AddIcon;
            append(button, t);
            if (default_slot) default_slot.m(button, null);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", (function() {
                    if (is_function(ctx[0])) ctx[0].apply(this, arguments);
                }));
                mounted = true;
            }
        },
        p(new_ctx, [dirty]) {
            ctx = new_ctx;
            if (default_slot) if (default_slot.p && (!current || dirty & 4)) update_slot_base(default_slot, default_slot_template, ctx, ctx[2], !current ? get_all_dirty_from_scope(ctx[2]) : get_slot_changes(default_slot_template, ctx[2], dirty, null), null);
            if (!current || dirty & 2) button.disabled = ctx[1];
        },
        i(local) {
            if (current) return;
            transition_in(default_slot, local);
            current = true;
        },
        o(local) {
            transition_out(default_slot, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(button);
            if (default_slot) default_slot.d(detaching);
            mounted = false;
            dispose();
        }
    };
}

function instance$n($$self, $$props, $$invalidate) {
    let {$$slots: slots = {}, $$scope: $$scope} = $$props;
    let {clickHandler: clickHandler} = $$props;
    let {disabled: disabled = false} = $$props;
    $$self.$$set = $$props2 => {
        if ("clickHandler" in $$props2) $$invalidate(0, clickHandler = $$props2.clickHandler);
        if ("disabled" in $$props2) $$invalidate(1, disabled = $$props2.disabled);
        if ("$$scope" in $$props2) $$invalidate(2, $$scope = $$props2.$$scope);
    };
    return [ clickHandler, disabled, $$scope, slots ];
}

class AddButton extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$n, create_fragment$n, safe_not_equal, {
            clickHandler: 0,
            disabled: 1
        });
    }
}

function create_fragment$m(ctx) {
    let div2;
    let current;
    const default_slot_template = ctx[1].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);
    return {
        c() {
            div2 = element("div");
            if (default_slot) default_slot.c();
            attr(div2, "class", "my-2 text-sm leading-6 text-skin-gray");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            if (default_slot) default_slot.m(div2, null);
            current = true;
        },
        p(ctx2, [dirty]) {
            if (default_slot) if (default_slot.p && (!current || dirty & 1)) update_slot_base(default_slot, default_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(default_slot_template, ctx2[0], dirty, null), null);
        },
        i(local) {
            if (current) return;
            transition_in(default_slot, local);
            current = true;
        },
        o(local) {
            transition_out(default_slot, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div2);
            if (default_slot) default_slot.d(detaching);
        }
    };
}

function instance$m($$self, $$props, $$invalidate) {
    let {$$slots: slots = {}, $$scope: $$scope} = $$props;
    $$self.$$set = $$props2 => {
        if ("$$scope" in $$props2) $$invalidate(0, $$scope = $$props2.$$scope);
    };
    return [ $$scope, slots ];
}

class BlockDescription extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$m, create_fragment$m, safe_not_equal, {});
    }
}

function create_else_block$6(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            attr(div2, "class", "h-5 w-5");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            div2.innerHTML = NotifyOffIcon;
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_if_block$g(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            attr(div2, "class", "h-5 w-5");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            div2.innerHTML = NotifyIcon;
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_fragment$l(ctx) {
    let div1;
    let label;
    let input;
    let t0;
    let div0;
    let t1;
    let span;
    let tooltip_action;
    let mounted;
    let dispose;
    function select_block_type(ctx2, dirty) {
        if (ctx2[0]) return create_if_block$g;
        return create_else_block$6;
    }
    let current_block_type = select_block_type(ctx);
    let if_block = current_block_type(ctx);
    let div1_levels = [ {
        class: "toggle-button"
    }, {
        tabindex: "0"
    }, {
        role: "button"
    }, ctx[4] ];
    let div_data_1 = {};
    for (let i = 0; i < div1_levels.length; i += 1) div_data_1 = assign(div_data_1, div1_levels[i]);
    return {
        c() {
            div1 = element("div");
            label = element("label");
            input = element("input");
            t0 = space();
            div0 = element("div");
            if_block.c();
            t1 = space();
            span = element("span");
            span.textContent = `${getMsg("notifyLabel")}`;
            attr(input, "class", "peer hidden");
            attr(input, "type", "checkbox");
            attr(input, "aria-label", ctx[2]);
            attr(span, "class", "ml-[2px]");
            attr(div0, "class", "flex");
            attr(label, "class", "flex max-w-max items-center space-x-1");
            set_attributes(div1, div_data_1);
            toggle_class(div1, "toggle-button-on", ctx[0]);
        },
        m(target, anchor) {
            insert(target, div1, anchor);
            append(div1, label);
            append(label, input);
            input.checked = ctx[0];
            append(label, t0);
            append(label, div0);
            if_block.m(div0, null);
            append(div0, t1);
            append(div0, span);
            if (!mounted) {
                dispose = [ listen(input, "change", ctx[5]), listen(input, "change", (function() {
                    if (is_function(ctx[1])) ctx[1].apply(this, arguments);
                })), listen(div1, "keydown", ctx[3]), action_destroyer(tooltip_action = tooltip.call(null, div1, {
                    content: ctx[2]
                })) ];
                mounted = true;
            }
        },
        p(new_ctx, [dirty]) {
            ctx = new_ctx;
            if (dirty & 4) attr(input, "aria-label", ctx[2]);
            if (dirty & 1) input.checked = ctx[0];
            if (current_block_type !== (current_block_type = select_block_type(ctx))) {
                if_block.d(1);
                if_block = current_block_type(ctx);
                if (if_block) {
                    if_block.c();
                    if_block.m(div0, t1);
                }
            }
            set_attributes(div1, div_data_1 = get_spread_update(div1_levels, [ {
                class: "toggle-button"
            }, {
                tabindex: "0"
            }, {
                role: "button"
            }, dirty & 16 && ctx[4] ]));
            if (tooltip_action && is_function(tooltip_action.update) && dirty & 4) tooltip_action.update.call(null, {
                content: ctx[2]
            });
            toggle_class(div1, "toggle-button-on", ctx[0]);
        },
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(div1);
            if_block.d();
            mounted = false;
            run_all(dispose);
        }
    };
}

function instance$l($$self, $$props, $$invalidate) {
    const omit_props_names = [ "checked", "changeHandler", "tooltipText" ];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let {checked: checked = false} = $$props;
    let {changeHandler: changeHandler} = $$props;
    let {tooltipText: tooltipText = ""} = $$props;
    const btnClick = e => {
        var _a;
        if (e.key === "Enter" || e.key === " ") {
            e.stopPropagation();
            e.preventDefault();
            (_a = e.currentTarget.querySelector("input")) === null || _a === void 0 ? void 0 : _a.click();
        }
    };
    function input_change_handler() {
        checked = this.checked;
        $$invalidate(0, checked);
    }
    $$self.$$set = $$new_props => {
        $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
        $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
        if ("checked" in $$new_props) $$invalidate(0, checked = $$new_props.checked);
        if ("changeHandler" in $$new_props) $$invalidate(1, changeHandler = $$new_props.changeHandler);
        if ("tooltipText" in $$new_props) $$invalidate(2, tooltipText = $$new_props.tooltipText);
    };
    return [ checked, changeHandler, tooltipText, btnClick, $$restProps, input_change_handler ];
}

class NotifyToggle extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$l, create_fragment$l, safe_not_equal, {
            checked: 0,
            changeHandler: 1,
            tooltipText: 2
        });
    }
}

function create_if_block$f(ctx) {
    let div1;
    let div0;
    let t0;
    let span;
    let t1;
    return {
        c() {
            div1 = element("div");
            div0 = element("div");
            t0 = space();
            span = element("span");
            t1 = text(ctx[0]);
            attr(div0, "class", "h-4 w-4 animate-spin");
            attr(div0, "title", "loading");
            attr(div1, "class", "flex space-x-1");
        },
        m(target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            div0.innerHTML = LoadingIcon;
            append(div1, t0);
            append(div1, span);
            append(span, t1);
        },
        p(ctx2, dirty) {
            if (dirty & 1) set_data(t1, ctx2[0]);
        },
        d(detaching) {
            if (detaching) detach(div1);
        }
    };
}

function create_fragment$k(ctx) {
    let if_block_anchor;
    let if_block = ctx[1] && create_if_block$f(ctx);
    return {
        c() {
            if (if_block) if_block.c();
            if_block_anchor = empty();
        },
        m(target, anchor) {
            if (if_block) if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
        },
        p(ctx2, [dirty]) {
            if (ctx2[1]) if (if_block) if_block.p(ctx2, dirty); else {
                if_block = create_if_block$f(ctx2);
                if_block.c();
                if_block.m(if_block_anchor.parentNode, if_block_anchor);
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(if_block_anchor);
            if (if_block) if_block.d(detaching);
        }
    };
}

function instance$k($$self, $$props, $$invalidate) {
    let {label: label = "Loading"} = $$props;
    let {show: show = false} = $$props;
    $$self.$$set = $$props2 => {
        if ("label" in $$props2) $$invalidate(0, label = $$props2.label);
        if ("show" in $$props2) $$invalidate(1, show = $$props2.show);
    };
    return [ label, show ];
}

class Spinner extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$k, create_fragment$k, safe_not_equal, {
            label: 0,
            show: 1
        });
    }
}

function get_each_context$9(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[5] = list[i];
    return child_ctx;
}

function create_else_block$5(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            div2.textContent = "No items.";
        },
        m(target, anchor) {
            insert(target, div2, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_if_block$e(ctx) {
    let span;
    let t_value = `[${String(ctx[5].flair || "")}] `;
    let t;
    return {
        c() {
            span = element("span");
            t = text(t_value);
            attr(span, "class", "text-skin-text");
        },
        m(target, anchor) {
            insert(target, span, anchor);
            append(span, t);
        },
        p(ctx2, dirty) {
            if (dirty & 4 && t_value !== (t_value = `[${String(ctx2[5].flair || "")}] `)) set_data(t, t_value);
        },
        d(detaching) {
            if (detaching) detach(span);
        }
    };
}

function create_each_block$9(ctx) {
    let span0;
    let t0_value = ctx[5].date + "";
    let t0;
    let span0_title_value;
    let t1;
    let div2;
    let span1;
    let t2_value = ctx[5].type + "";
    let t2;
    let t3;
    let span2;
    let t5;
    let b0;
    let t6_value = ctx[5].subreddit + "";
    let t6;
    let t7;
    let span3;
    let t9;
    let b1;
    let t10_value = ctx[5].author + "";
    let t10;
    let t11;
    let span4;
    let t13;
    let a;
    let t14;
    let t15_value = ctx[5].text + "";
    let t15;
    let t16;
    let a_href_value;
    let if_block = ctx[5].flair && create_if_block$e(ctx);
    return {
        c() {
            span0 = element("span");
            t0 = text(t0_value);
            t1 = space();
            div2 = element("div");
            span1 = element("span");
            t2 = text(t2_value);
            t3 = space();
            span2 = element("span");
            span2.textContent = "in";
            t5 = space();
            b0 = element("b");
            t6 = text(t6_value);
            t7 = space();
            span3 = element("span");
            span3.textContent = "by";
            t9 = space();
            b1 = element("b");
            t10 = text(t10_value);
            t11 = space();
            span4 = element("span");
            span4.textContent = ":";
            t13 = space();
            a = element("a");
            if (if_block) if_block.c();
            t14 = space();
            t15 = text(t15_value);
            t16 = space();
            attr(span0, "title", span0_title_value = ctx[5].fullDate);
            attr(b0, "class", "font-medium");
            attr(b1, "class", "font-medium");
            attr(a, "class", "overflow-hidden overflow-ellipsis whitespace-nowrap break-all hover:underline");
            attr(a, "href", a_href_value = ctx[5].link);
            attr(a, "target", "_blank");
            attr(a, "rel", "noreferrer");
        },
        m(target, anchor) {
            insert(target, span0, anchor);
            append(span0, t0);
            insert(target, t1, anchor);
            insert(target, div2, anchor);
            append(div2, span1);
            append(span1, t2);
            append(div2, t3);
            append(div2, span2);
            append(div2, t5);
            append(div2, b0);
            append(b0, t6);
            append(div2, t7);
            append(div2, span3);
            append(div2, t9);
            append(div2, b1);
            append(b1, t10);
            append(div2, t11);
            append(div2, span4);
            insert(target, t13, anchor);
            insert(target, a, anchor);
            if (if_block) if_block.m(a, null);
            append(a, t14);
            append(a, t15);
            append(a, t16);
        },
        p(ctx2, dirty) {
            if (dirty & 4 && t0_value !== (t0_value = ctx2[5].date + "")) set_data(t0, t0_value);
            if (dirty & 4 && span0_title_value !== (span0_title_value = ctx2[5].fullDate)) attr(span0, "title", span0_title_value);
            if (dirty & 4 && t2_value !== (t2_value = ctx2[5].type + "")) set_data(t2, t2_value);
            if (dirty & 4 && t6_value !== (t6_value = ctx2[5].subreddit + "")) set_data(t6, t6_value);
            if (dirty & 4 && t10_value !== (t10_value = ctx2[5].author + "")) set_data(t10, t10_value);
            if (ctx2[5].flair) if (if_block) if_block.p(ctx2, dirty); else {
                if_block = create_if_block$e(ctx2);
                if_block.c();
                if_block.m(a, t14);
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
            if (dirty & 4 && t15_value !== (t15_value = ctx2[5].text + "")) set_data(t15, t15_value);
            if (dirty & 4 && a_href_value !== (a_href_value = ctx2[5].link)) attr(a, "href", a_href_value);
        },
        d(detaching) {
            if (detaching) {
                detach(span0);
                detach(t1);
                detach(div2);
                detach(t13);
                detach(a);
            }
            if (if_block) if_block.d();
        }
    };
}

function create_fragment$j(ctx) {
    let article;
    let header;
    let div1;
    let div0;
    let t0;
    let t1;
    let button;
    let t2;
    let div2;
    let mounted;
    let dispose;
    let each_value = ensure_array_like(ctx[2]);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) each_blocks[i] = create_each_block$9(get_each_context$9(ctx, each_value, i));
    let each_1_else = null;
    if (!each_value.length) each_1_else = create_else_block$5();
    return {
        c() {
            article = element("article");
            header = element("header");
            div1 = element("div");
            div0 = element("div");
            t0 = text(ctx[0]);
            t1 = space();
            button = element("button");
            t2 = space();
            div2 = element("div");
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            if (each_1_else) each_1_else.c();
            attr(button, "class", "mr-2 h-4 w-4 border-none bg-transparent p-0");
            attr(button, "title", "close");
            attr(div1, "class", "my-1 flex items-center justify-between");
            attr(div2, "class", "user-items-grid text-xs svelte-odvv19");
        },
        m(target, anchor) {
            insert(target, article, anchor);
            append(article, header);
            append(header, div1);
            append(div1, div0);
            append(div0, t0);
            append(div1, t1);
            append(div1, button);
            button.innerHTML = XCircleIcon;
            append(article, t2);
            append(article, div2);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(div2, null);
            if (each_1_else) each_1_else.m(div2, null);
            if (!mounted) {
                dispose = listen(button, "click", (function() {
                    if (is_function(ctx[1])) ctx[1].apply(this, arguments);
                }));
                mounted = true;
            }
        },
        p(new_ctx, [dirty]) {
            ctx = new_ctx;
            if (dirty & 1) set_data(t0, ctx[0]);
            if (dirty & 4) {
                each_value = ensure_array_like(ctx[2]);
                let i;
                for (i = 0; i < each_value.length; i += 1) {
                    const child_ctx = get_each_context$9(ctx, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty); else {
                        each_blocks[i] = create_each_block$9(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(div2, null);
                    }
                }
                for (;i < each_blocks.length; i += 1) each_blocks[i].d(1);
                each_blocks.length = each_value.length;
                if (!each_value.length && each_1_else) each_1_else.p(ctx, dirty); else if (!each_value.length) {
                    each_1_else = create_else_block$5();
                    each_1_else.c();
                    each_1_else.m(div2, null);
                } else if (each_1_else) {
                    each_1_else.d(1);
                    each_1_else = null;
                }
            }
        },
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(article);
            destroy_each(each_blocks, detaching);
            if (each_1_else) each_1_else.d();
            mounted = false;
            dispose();
        }
    };
}

function notEmpty(value) {
    return value !== null && value !== void 0;
}

function instance$j($$self, $$props, $$invalidate) {
    let {items: items = []} = $$props;
    let {title: title = ""} = $$props;
    let {onClose: onClose = (() => {})} = $$props;
    let {limit: limit = 5} = $$props;
    let displayItems = [];
    $$self.$$set = $$props2 => {
        if ("items" in $$props2) $$invalidate(3, items = $$props2.items);
        if ("title" in $$props2) $$invalidate(0, title = $$props2.title);
        if ("onClose" in $$props2) $$invalidate(1, onClose = $$props2.onClose);
        if ("limit" in $$props2) $$invalidate(4, limit = $$props2.limit);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 24) $$invalidate(2, displayItems = items.slice(0, limit).map((({kind: kind, data: data}) => {
            const link = `https://reddit.com/${data.permalink}`;
            const date = new Date(data.created * 1e3).toLocaleDateString();
            const fullDate = new Date(data.created * 1e3).toLocaleString();
            if (kind === "t3") return {
                type: "post",
                subreddit: `r/${data.subreddit}`,
                text: data.title,
                date: date,
                fullDate: fullDate,
                link: link,
                flair: data.link_flair_text || "",
                author: data.author
            };
            if (kind === "t1") return {
                type: "comment",
                subreddit: `r/${data.subreddit}`,
                text: data.body,
                date: date,
                fullDate: fullDate,
                link: link,
                flair: "",
                author: data.author
            };
            return;
        })).filter(notEmpty));
    };
    return [ title, onClose, displayItems, items, limit ];
}

class RedditItemsList extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$j, create_fragment$j, safe_not_equal, {
            items: 3,
            title: 0,
            onClose: 1,
            limit: 4
        });
    }
}

var NotificationId = (NotificationId2 => {
    NotificationId2["mail"] = "mail";
    NotificationId2["post"] = "post";
    NotificationId2["user"] = "user";
    NotificationId2["test"] = "test";
    return NotificationId2;
})(NotificationId || {});

function isMessage(n) {
    return n.type === "mail";
}

function isPost(n) {
    return n.type === "post";
}

function isUser(n) {
    return n.type === "user";
}

function isTest(n) {
    return n.type === "test";
}

function notify(notif, soundId) {
    async function createNotification(id, options, links) {
        await browser.notifications.create(id, options);
        if (soundId) void playAudio(soundId);
        if (links) void storage.saveNotificationsData(id, links);
    }
    const opts = {
        type: "basic",
        iconUrl: browser.runtime.getURL("/images/icon-96.png")
    };
    if (isTest(notif)) {
        const nOpts = {
            ...opts,
            title: "Test title",
            message: notif.message
        };
        void createNotification(`${"test"}__${Date.now()}`, nOpts);
        return;
    }
    if (!notif.items.length) return;
    if (isMessage(notif)) {
        const message = notif.items.map((i => {
            if (i.username) return `${i.username || ""} (${i.len})`;
            return `${i.len} unread messages`;
        })).join(",\n");
        const nOpts = {
            ...opts,
            title: "Reddit: new mail",
            message: message
        };
        void storage.getOptions().then((opts2 => {
            const url = getInboxUrl(opts2);
            return createNotification(`${"mail"}__${Date.now()}`, nOpts, [ url ]);
        }));
    }
    if (isPost(notif)) {
        const nOpts = {
            ...opts,
            title: "Reddit: new posts",
            message: `New posts in: ${notif.items.map((({name: name, len: len}) => `${name} (${len})`)).join(", ")}`
        };
        const links = notif.items.filter((item => item.link)).map((item => item.link));
        void createNotification(`${"post"}__${Date.now()}`, nOpts, [ ...links ]);
    }
    if (isUser(notif)) {
        const nOpts = {
            ...opts,
            title: "Reddit: new users activities",
            message: notif.items.map((({len: len, name: name}) => `${name} (${len})`)).join(", ")
        };
        const links = notif.items.filter((item => item.link)).map((item => item.link));
        void createNotification(`${"post"}__${Date.now()}`, nOpts, links);
    }
}

class AuthError extends Error {
    constructor(message, id, invalidateToken) {
        super();
        this.name = "AuthError";
        this.message = message;
        this.id = id;
        this.invalidateToken = invalidateToken || false;
    }
}

function isAuthError(e) {
    return (e == null ? void 0 : e.name) === "AuthError";
}

const redditScopes = {
    creddits: {
        description: "Spend my reddit gold creddits on giving gold to other users.",
        id: "creddits",
        name: "Spend reddit gold creddits"
    },
    modcontributors: {
        description: "Add/remove users to approved submitter lists and ban/unban or mute/unmute users from subreddits I moderate.",
        id: "modcontributors",
        name: "Approve submitters and ban users"
    },
    modmail: {
        description: "Access and manage modmail via mod.reddit.com.",
        id: "modmail",
        name: "New Modmail"
    },
    modconfig: {
        description: "Manage the configuration, sidebar, and CSS of subreddits I moderate.",
        id: "modconfig",
        name: "Moderate Subreddit Configuration"
    },
    subscribe: {
        description: 'Manage my subreddit subscriptions. Manage "friends" - users whose content I follow.',
        id: "subscribe",
        name: "Edit My Subscriptions"
    },
    structuredstyles: {
        description: "Edit structured styles for a subreddit I moderate.",
        id: "structuredstyles",
        name: "Edit structured styles"
    },
    vote: {
        description: "Submit and change my votes on comments and submissions.",
        id: "vote",
        name: "Vote"
    },
    wikiedit: {
        description: "Edit wiki pages on my behalf",
        id: "wiki",
        name: "Wiki Editing"
    },
    mysubreddits: {
        description: "Access the list of subreddits I moderate, contribute to, and subscribe to.",
        id: "mysubreddits",
        name: "My Subreddits"
    },
    submit: {
        description: "Submit links and comments from my account.",
        id: "submit",
        name: "Submit Content"
    },
    modlog: {
        description: "Access the moderation log in subreddits I moderate.",
        id: "modlog",
        name: "Moderation Log"
    },
    modposts: {
        description: "Approve, remove, mark nsfw, and distinguish content in subreddits I moderate.",
        id: "modposts",
        name: "Moderate Posts"
    },
    modflair: {
        description: "Manage and assign flair in subreddits I moderate.",
        id: "modflair",
        name: "Moderate Flair"
    },
    save: {
        description: "Save and unsave comments and submissions.",
        id: "save",
        name: "Save Content"
    },
    modothers: {
        description: "Invite or remove other moderators from subreddits I moderate.",
        id: "modothers",
        name: "Invite or remove other moderators"
    },
    read: {
        description: "Access posts and comments through my account.",
        id: "read",
        name: "Read Content"
    },
    privatemessages: {
        description: "Access my inbox and send private messages to other users.",
        id: "privatemessages",
        name: "Private Messages"
    },
    report: {
        description: "Report content for rules violations. Hide & show individual submissions.",
        id: "report",
        name: "Report content"
    },
    identity: {
        description: "Access my reddit username and signup date.",
        id: "identity",
        name: "My Identity"
    },
    livemanage: {
        description: "Manage settings and contributors of live threads I contribute to.",
        id: "livemanage",
        name: "Manage live threads"
    },
    account: {
        description: "Update preferences and related account information. Will not have access to your email or password.",
        id: "account",
        name: "Update account information"
    },
    modtraffic: {
        description: "Access traffic stats in subreddits I moderate.",
        id: "modtraffic",
        name: "Subreddit Traffic"
    },
    wikiread: {
        description: "Read wiki pages through my account",
        id: "wikiread",
        name: "Read Wiki Pages"
    },
    edit: {
        description: "Edit and delete my comments and submissions.",
        id: "edit",
        name: "Edit Posts"
    },
    modwiki: {
        description: "Change editors and visibility of wiki pages in subreddits I moderate.",
        id: "modwiki",
        name: "Moderate Wiki"
    },
    modself: {
        description: "Accept invitations to moderate a subreddit. Remove myself as a moderator or contributor of subreddits I moderate or contribute to.",
        id: "modself",
        name: "Make changes to your subreddit moderator and contributor status"
    },
    history: {
        description: "Access my voting history and comments or submissions I've saved or hidden.",
        id: "history",
        name: "History"
    },
    flair: {
        description: "Select my subreddit flair. Change link flair on my submissions.",
        id: "flair",
        name: "Manage My Flair"
    }
};

const {clientId: clientId, clientSecret: clientSecret, redirectUri: redirectUri, userAgent: userAgent} = config;

function isErrorTokenResponse(r) {
    return !r.access_token;
}

const BASE_URL = "https://www.reddit.com/api/v1";

const auth = {
    authState: "",
    get accessTokenURL() {
        return `${BASE_URL}/access_token`;
    },
    async getAccessToken(account) {
        const {accessToken: accessToken, expiresIn: expiresIn, refreshToken: refreshToken} = account.auth;
        const now = new Date;
        const expires = new Date((expiresIn || 0) - 6e4 * 5);
        const token = expires > now && accessToken ? accessToken : await auth.renewAccessToken(refreshToken, account.id);
        return token;
    },
    generateAuthState() {
        return (Math.random() * Number.MAX_SAFE_INTEGER).toString(36);
    },
    getAuthURL(authState) {
        const params = {
            response_type: "code",
            redirect_uri: encodeURIComponent(redirectUri || ""),
            client_id: clientId,
            scope: `${redditScopes.identity.id} ${redditScopes.read.id} ${redditScopes.privatemessages.id} ${redditScopes.history.id}`,
            state: authState,
            duration: "permanent"
        };
        return `${BASE_URL}/authorize?${mapObjToQueryStr(params)}`;
    },
    async getAuthCode(authState, id) {
        const response = await browser.identity.launchWebAuthFlow({
            url: auth.getAuthURL(authState),
            interactive: true
        });
        const responseURL = new URL(response);
        if (responseURL.searchParams.has("error")) throw new AuthError(responseURL.searchParams.get("error") || "", id);
        if (responseURL.searchParams.get("state") === authState) return responseURL.searchParams.get("code");
        return false;
    },
    fetchAuthInit(params) {
        const base64Credentials = btoa(`${clientId || ""}:${clientSecret || ""}`);
        return {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Basic ${base64Credentials}`,
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": userAgent
            },
            body: mapObjToQueryStr(params)
        };
    },
    async getTokens(code, id) {
        const params = {
            grant_type: "authorization_code",
            redirect_uri: encodeURIComponent(redirectUri || ""),
            code: code
        };
        const response = await fetch(auth.accessTokenURL, auth.fetchAuthInit(params));
        if (response.status !== 200) throw new AuthError(`Couldn't receive tokens. ${response.status}: ${response.statusText || ""}`, id);
        const body = await response.json();
        if (isErrorTokenResponse(body)) throw new AuthError(`Couldn't receive tokens. Error: ${body.error || ""}`, id);
        return body;
    },
    async renewAccessToken(refreshToken, id) {
        const params = {
            grant_type: "refresh_token",
            refresh_token: refreshToken || ""
        };
        const response = await fetch(auth.accessTokenURL, auth.fetchAuthInit(params));
        if (response.status >= 500) throw new AuthError(`Couldn't refresh access token. ${response.status}: ${response.statusText || ""}`, id, false);
        let body;
        try {
            body = await response.json();
        } catch (e) {
            const error = e;
            body = {
                error: `${error.status}`,
                message: error.message
            };
        }
        if (isErrorTokenResponse(body)) throw new AuthError(`Couldn't refresh access token. ${body.error || ""}: ${body.message || ""}`, id, true);
        await storage.saveAuthData({
            data: body,
            id: id
        });
        return body.access_token;
    },
    async login(id) {
        if (!id) id = generateId();
        auth.authState = auth.generateAuthState();
        const code = await auth.getAuthCode(auth.authState, id);
        if (!code) throw new AuthError("Couldn't get auth code", id);
        const authData = await auth.getTokens(code, id);
        await storage.saveAuthData({
            data: authData,
            id: id
        });
        return id;
    }
};

const RateLimitHeaders = {
    remaining: "x-ratelimit-remaining",
    reset: "x-ratelimit-reset",
    used: "x-ratelimit-used"
};

function getRateLimits(response) {
    const rateLimits2 = {
        used: response.headers.get(RateLimitHeaders.used),
        reset: response.headers.get(RateLimitHeaders.reset),
        remaining: response.headers.get(RateLimitHeaders.remaining)
    };
    return {
        used: rateLimits2.used ? Number.parseInt(rateLimits2.used) : null,
        reset: rateLimits2.reset ? Number.parseInt(rateLimits2.reset) : null,
        remaining: rateLimits2.remaining ? Number.parseInt(rateLimits2.remaining) : null
    };
}

class RedditApiClient {
    constructor(onRateLimits) {
        this.fetchOpts = {
            cache: "reload"
        };
        this.authOrigin = "https://oauth.reddit.com";
        this.publicOrigin = "https://www.reddit.com";
        this.headers = {
            Accept: "application/json"
        };
        this.onRateLimits = onRateLimits;
    }
    async GET(endpoint, queryParams = {}) {
        const query = mapObjToQueryStr({
            ...queryParams,
            raw_json: "1"
        });
        const init2 = {
            method: "GET",
            headers: {
                ...this.headers
            },
            ...this.fetchOpts
        };
        if (this.accessToken) {
            if (!init2.headers) init2.headers = {};
            const headers = init2.headers;
            headers["User-Agent"] = config.userAgent;
            headers.Authorization = `bearer ${this.accessToken}`;
        }
        const origin = this.accessToken ? this.authOrigin : this.publicOrigin;
        const actualEndpoint = this.accessToken ? endpoint : `${endpoint}.json`;
        const result = await fetch(encodeURI(`${origin}${actualEndpoint}?${query}`), init2);
        if (this.onRateLimits && !this.accessToken) this.onRateLimits(getRateLimits(result));
        if (result.ok) return result.json();
        try {
            const errorResponse = await result.json();
            return errorResponse;
        } catch (error) {
            throw new Error(`status code: ${result.status}. ${result.statusText}`);
        }
    }
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    getSubreddit(subreddit) {
        return {
            new: async listing => this.GET(`/r/${subreddit}/new`, listing),
            search: async listing => this.search(listing, subreddit)
        };
    }
    user(username) {
        return {
            overview: async listing => this.GET(`/user/${username}/overview`, listing),
            comments: async listing => this.GET(`/user/${username}/comments`, listing),
            submitted: async listing => this.GET(`/user/${username}/submitted`, listing)
        };
    }
    search(listing, subreddit = null) {
        const listingSortByNew = {
            sort: "new",
            ...listing
        };
        if (subreddit) return this.GET(`/r/${subreddit}/search`, listingSortByNew);
        return this.GET("/search", listingSortByNew);
    }
    get messages() {
        return {
            unread: async listing => this.GET("/message/unread", listing),
            inbox: async listing => this.GET("/message/inbox", listing)
        };
    }
    me() {
        return this.GET("/api/me");
    }
}

const separator = /[\p{Z}\p{S}\p{P}\p{C}]+/u;

const tokenizer = str => str.split(separator);

const normalize = str => str.trim().toLowerCase();

const engStemming = [ "ance", "ence", "ness", "able", "ible", "ment", "ful", "ent", "ism", "ed", "s" ];

const stemRegExp = new RegExp(`(${engStemming.join("|")})\\b`);

function stemmer(word, minLen = 3) {
    if (word.length <= minLen) return word;
    return word.replace(stemRegExp, "");
}

function intersect(arrays) {
    const idsList = arrays[0];
    if (arrays.length < 1) return [];
    const resultIds = [];
    for (let i = 0; i < idsList.length; i++) {
        const id = idsList[i];
        let count = 1;
        for (let j = 1; j < arrays.length; j++) if (arrays[j].includes(id)) count += 1;
        if (count === arrays.length) resultIds.push(id);
    }
    return resultIds;
}

class Index {
    constructor(opts = {}) {
        this.normalize = opts.normalize ?? normalize;
        this.stemmer = opts.stemmer ?? stemmer;
        this.tokenizer = opts.tokenizer ?? tokenizer;
        this.map = {};
    }
    add(id, str) {
        if (!str || !id) return;
        const tokens = this.getTokens(str);
        if (!tokens.length) return;
        const duplicates = {};
        let token = "";
        for (let i = 0; i < tokens.length; i++) {
            token = this.stemmer ? this.stemmer(tokens[i]) : tokens[i];
            if (!token || duplicates[token]) continue;
            duplicates[token] = 1;
            if (!this.map[token]) this.map[token] = [];
            this.map[token].push(id);
        }
    }
    getTokens(str) {
        str = this.normalize ? this.normalize(str) : str;
        return this.tokenizer ? this.tokenizer(str) : [ str ];
    }
    search(query) {
        if (!query) return [];
        const queryTokens = this.getTokens(query);
        const result = [];
        for (let i = 0; i < queryTokens.length; i++) {
            const token = this.stemmer ? this.stemmer(queryTokens[i]) : queryTokens[i];
            result.push(this.map[token] || []);
        }
        return intersect(result);
    }
}

class Document {
    constructor({fields: fields, id: id = "id"}) {
        this.indexes = {};
        this.fields = fields;
        fields.forEach((f => {
            if (f.field) this.indexes[f.field] = new Index(f.options);
        }));
        this.id = id;
    }
    add(document2) {
        this.fields.forEach((f => {
            const text2 = document2[f.field];
            if (text2) this.indexes[f.field].add(document2[this.id], document2[f.field]);
        }));
    }
    search(searchData) {
        let result = [];
        for (let i = 0; i < searchData.length; i++) {
            const {field: field, query: query} = searchData[i] || {};
            const fieldIndex = this.indexes[field];
            if (!fieldIndex || !query) continue;
            const matchIds = fieldIndex.search(query);
            if (!matchIds.length) return [];
            if (!result.length) result = matchIds; else {
                result = intersect([ result, matchIds ]);
                if (!result.length) return [];
            }
        }
        return result;
    }
}

const allFields = [ "title", "selftext", "author", "link_flair_text" ];

function postFilter(posts, queriesLists, fields = allFields) {
    const usedFields = fields.map((field => {
        const result2 = {
            field: field
        };
        if (field === "author") result2.options = {
            normalize: false,
            stemmer: false,
            tokenizer: false
        };
        if (field === "link_flair_text") result2.options = {
            stemmer: false
        };
        return result2;
    }));
    const doc = new Document({
        fields: usedFields,
        id: "id"
    });
    posts.forEach((p => doc.add(p.data)));
    const result = new Set;
    for (let i = 0; i < queriesLists.length; i++) {
        const qList = queriesLists[i];
        if (!qList) continue;
        const ids = doc.search(qList);
        ids.forEach((id => result.add(id)));
    }
    return posts.filter((p => result.has(p.data.id)));
}

function wait(ms = 1e3) {
    return new Promise((resolve => setTimeout(resolve, ms)));
}

function filterNewItems(timestamp, items) {
    const newPosts = [];
    for (const item of items) if (item.data.created > timestamp) newPosts.push(item); else return newPosts;
    return newPosts;
}

function extractNewItems(response, info) {
    const items = response.data.children;
    const newItems = info.lastPostCreated ? filterNewItems(info.lastPostCreated, items) : items;
    if (newItems.length !== 0) return newItems;
    return null;
}

function isErrorResponse(result) {
    return result.data === void 0;
}

class NotifierApp {
    constructor(onRateLimits) {
        this.reddit = new RedditApiClient(onRateLimits);
    }
    async updateSubreddit({subOpts: subOpts, subData: subData = {}, listing: listing}) {
        var _a, _b;
        const {subreddit: subreddit, id: id, filterOpts: filterOpts} = subOpts;
        const info = subData;
        if (info.error && info.lastUpdate && Date.now() - info.lastUpdate < 1e3 * 60 * 2) return null;
        let response;
        try {
            response = await this.reddit.getSubreddit(subreddit).new(listing);
        } catch (error) {
            response = {
                message: error.message
            };
        }
        if (isErrorResponse(response)) {
            console.error(`Error during fetching new posts from r/${subreddit}: `, response);
            await storage.saveSubredditData(id, {
                error: response
            });
            return null;
        }
        let newPosts = extractNewItems(response, info) || [];
        let lastPostCreated = null;
        if (newPosts.length && (filterOpts == null ? void 0 : filterOpts.enabled) && ((_a = filterOpts == null ? void 0 : filterOpts.rules) == null ? void 0 : _a.length)) {
            lastPostCreated = (_b = newPosts[0].data) == null ? void 0 : _b.created;
            newPosts = postFilter(newPosts, filterOpts.rules, filterOpts.fields);
        }
        await storage.saveSubredditData(id, {
            posts: newPosts,
            lastPostCreated: lastPostCreated
        });
        return newPosts;
    }
    async updateQuery({query: query, queryData: queryData, listing: listing = {}}) {
        const {id: id, subreddit: subreddit, query: q} = query;
        if (!q || !id) return null;
        const data = queryData || {};
        if (data.error && data.lastUpdate && Date.now() - data.lastUpdate < 1e3 * 60 * 10) return null;
        let response;
        try {
            response = subreddit ? await this.reddit.getSubreddit(subreddit).search({
                ...listing,
                q: q,
                restrict_sr: "on"
            }) : await this.reddit.search({
                ...listing,
                q: q
            });
        } catch (error) {
            response = {
                message: error.message
            };
        }
        if (isErrorResponse(response)) {
            console.error(`Error during fetching posts query ${query.query || ""} on ${query.subreddit || "reddit"}: `, response);
            await storage.saveQueryData(query.id, {
                error: response
            });
            return null;
        }
        const newPosts = extractNewItems(response, data) || [];
        await storage.saveQueryData(query.id, {
            posts: newPosts,
            error: null
        });
        return newPosts;
    }
    async updateUnreadMsg(mail) {
        try {
            this.clearAccessToken();
            const response = await this.reddit.messages.unread();
            if (isErrorResponse(response)) throw new Error(response.message);
            const newMessages = extractNewItems(response, mail || {});
            await storage.saveMessageData({
                unreadMessages: newMessages
            });
            return newMessages;
        } catch (error) {
            const message = error.message || error;
            console.error("Error during fetching unread messages ", message);
            await storage.saveMessageData({
                error: {
                    message: message
                }
            });
            return null;
        }
    }
    async updateUnreadAccountMsg(account) {
        try {
            const token = await auth.getAccessToken(account);
            if (!token) return null;
            this.reddit.setAccessToken(token);
            const response = await this.reddit.messages.unread();
            if (isErrorResponse(response)) throw new Error(response.message);
            const newMessages = extractNewItems(response, account.mail || {});
            await storage.saveAccMessageData(account.id, {
                unreadMessages: newMessages
            });
            return newMessages;
        } catch (error) {
            if (isAuthError(error)) return this.onAuthError(error);
            const message = error.message || error;
            console.error(`Error during fetching unread messages`, message);
            await storage.saveAccMessageData(account.id, {
                error: {
                    message: message
                }
            });
            return null;
        }
    }
    async updateFollowingUser(user) {
        var _a, _b;
        user = {
            ...user
        };
        const fetchUser = this.reddit.user(user.username);
        let response;
        try {
            switch (user.watch) {
              case "comments":
                response = await fetchUser.comments();
                break;

              case "submitted":
                response = await fetchUser.submitted();
                break;

              default:
                response = await fetchUser.overview();
            }
        } catch (error) {
            response = {
                message: error.message
            };
        }
        if (isErrorResponse(response)) {
            console.error(`Error during fetching ${user.username}'s activities`, response);
            user.error = response;
            return {
                user: user
            };
        }
        if (!((_b = (_a = response.data) == null ? void 0 : _a.children) == null ? void 0 : _b.length)) return {
            user: user
        };
        const newItems = extractNewItems(response, user);
        if (!newItems) return {
            user: user
        };
        const itemsToSave = newItems.map((p => p.kind === RedditObjectKind.link ? filterPostDataProperties(p) : p));
        user.data = [ ...itemsToSave, ...user.data || [] ].slice(0, 50);
        user.error = null;
        user.lastPostCreated = itemsToSave[0].data.created;
        user.lastUpdate = Date.now();
        return {
            user: user,
            newItemsLen: itemsToSave.length
        };
    }
    async updateUsersList(usersList, options, ignorePollInterval = false) {
        const pollInterval = ignorePollInterval ? 0 : options.pollUserInterval * 1e3;
        const notifyInfo = {
            type: NotificationId.user,
            items: []
        };
        let updated = 0;
        for (let i = 0; i < usersList.length; i++) {
            const ts = Date.now();
            if (ts - (usersList[i].lastUpdate || 0) < pollInterval) continue;
            const {user: user, newItemsLen: newItemsLen} = await this.updateFollowingUser(usersList[i]);
            usersList[i] = user;
            if (user.notify && newItemsLen) {
                const link = getUserProfileUrl(user.username, user.watch, options);
                notifyInfo.items.push({
                    len: newItemsLen,
                    link: link,
                    name: user.username
                });
            }
            user.lastUpdate = ts;
            updated += 1;
            if (i < usersList.length - 1) await wait(1e3);
        }
        await storage.saveUsersList(usersList);
        if (notifyInfo.items.length) notify(notifyInfo, options.notificationSoundId);
        return updated;
    }
    async setAccessToken(accounts) {
        try {
            accounts = accounts || await storage.getAccounts();
            const withScopes = [ redditScopes.identity.id, redditScopes.read.id, redditScopes.privatemessages.id, redditScopes.history.id ];
            const account = getAccountByScope(accounts, withScopes);
            if (!account) return this.clearAccessToken();
            const token = await auth.getAccessToken(account);
            this.reddit.setAccessToken(token || null);
        } catch (e) {
            if (isAuthError(e)) return this.onAuthError(e);
            console.error(e);
        }
    }
    async onAuthError(e) {
        console.error(e);
        this.clearAccessToken();
        await storage.setAuthError(e);
        return null;
    }
    clearAccessToken() {
        this.reddit.setAccessToken(null);
    }
    async updateMail(mail, options) {
        const msgNotify = {
            type: NotificationId.mail,
            items: []
        };
        const newMessages = await this.updateUnreadMsg(mail);
        if ((newMessages == null ? void 0 : newMessages.length) && (mail == null ? void 0 : mail.mailNotify)) msgNotify.items.push({
            len: newMessages.length,
            username: ""
        });
        if (msgNotify.items.length) notify(msgNotify, options.notificationSoundId);
    }
    async updateAccountMail(accounts, options) {
        var _a;
        const msgNotify = {
            type: NotificationId.mail,
            items: []
        };
        for (const ac of Object.values(accounts || {})) if (ac.auth.refreshToken && ac.checkMail && ((_a = ac.auth.scope) == null ? void 0 : _a.includes("privatemessages"))) {
            const newMessages = await this.updateUnreadAccountMsg(ac);
            if ((newMessages == null ? void 0 : newMessages.length) && ac.mailNotify) msgNotify.items.push({
                username: ac.name || "",
                len: newMessages.length
            });
            await wait(options.waitTimeout * 1e3);
        }
        if (msgNotify.items.length) notify(msgNotify, options.notificationSoundId);
    }
    async updateAccountInfo(user) {
        if (!user) return user;
        const ac = {
            ...user
        };
        try {
            if (ac == null ? void 0 : ac.auth.refreshToken) {
                if (!ac.auth.scope || !ac.auth.scope.includes(redditScopes.identity.id)) throw new AuthError("Extension doesn't have permissions to fetch user's identity", ac.id);
                const token = await auth.getAccessToken(ac);
                this.reddit.setAccessToken(token || null);
                const response = await this.reddit.me();
                if (isErrorResponse(response)) {
                    console.error("Error during fetching account information", response);
                    ac.error = `Couldn't fetch account information: ${response.message || ""}`;
                    return ac;
                }
                if (response.data) {
                    const d = response.data;
                    ac.redditId = d.id;
                    ac.name = d.name;
                    ac.img = d.icon_img;
                    ac.inboxCount = d.inbox_count;
                    ac.hasMail = d.has_mail;
                    ac.totalKarma = d.total_karma;
                    ac.error = null;
                    ac.auth.error = null;
                }
            }
        } catch (error) {
            if (isAuthError(error)) {
                ac.auth.error = error.message;
                return ac;
            }
            ac.error = error == null ? void 0 : error.message;
        }
        return ac;
    }
    async updateAccounts(accounts, id) {
        const updated = {
            ...accounts
        };
        const updateArray = !id ? Object.values(accounts) : [ accounts[id] ];
        for (const acc of updateArray) updated[acc.id] = await this.updateAccountInfo(accounts[acc.id]);
        const names = [];
        const filtered = Object.fromEntries(Object.entries(updated).filter((([, v]) => {
            if (names.includes(v.name || "")) return false;
            if (v.name) names.push(v.name);
            return true;
        })));
        await storage.saveAccounts(filtered);
    }
    async update(isForcedByUser = false) {
        var _a, _b;
        const {queries: queryData, queriesList: queriesList, subredditList: subredditList, subreddits: subData, accounts: accounts, options: options, usersList: usersList, mail: mail} = await storage.getAllData();
        const {waitTimeout: waitTimeout, limit: limit = 10, notificationSoundId: notificationSoundId} = options;
        let shouldThrottle = false;
        async function throttle() {
            if (!shouldThrottle) return;
            await wait(waitTimeout * 1e3);
            shouldThrottle = false;
        }
        if (usersList) {
            const updated = await this.updateUsersList(usersList, options, isForcedByUser);
            if (updated) shouldThrottle = true;
        }
        let postNotif = {
            type: NotificationId.post,
            items: []
        };
        for (const subOpts of subredditList) {
            await throttle();
            if (subOpts.disabled) continue;
            const actualLimit = ((_a = subOpts.filterOpts) == null ? void 0 : _a.enabled) && !((_b = subData[subOpts.id]) == null ? void 0 : _b.lastPostCreated) ? Math.max(limit, 25) : limit;
            const newPosts = await this.updateSubreddit({
                subOpts: subOpts,
                subData: subData[subOpts.id],
                listing: {
                    limit: actualLimit
                }
            });
            if (subOpts.notify && (newPosts == null ? void 0 : newPosts.length)) {
                const link = getSubredditUrl(subOpts.subreddit, options);
                postNotif.items.push({
                    name: subOpts.name || subOpts.subreddit,
                    len: newPosts.length,
                    link: link
                });
            }
            shouldThrottle = true;
        }
        if (postNotif.items.length) notify(postNotif, notificationSoundId);
        postNotif = {
            type: NotificationId.post,
            items: []
        };
        for (const query of queriesList) {
            if (query.disabled) continue;
            await throttle();
            const newMessages = await this.updateQuery({
                query: query,
                queryData: queryData[query.id],
                listing: {
                    limit: limit
                }
            });
            if (query.notify && (newMessages == null ? void 0 : newMessages.length)) postNotif.items.push({
                name: query.name || query.query || "",
                len: newMessages.length,
                link: getSearchQueryUrl(query.query || "", query.subreddit, options)
            });
            shouldThrottle = true;
        }
        if (postNotif.items.length) notify(postNotif, notificationSoundId);
        if (accounts) await this.updateAccountMail(accounts, options);
        if (mail == null ? void 0 : mail.checkMail) await this.updateMail(mail, options);
    }
}

function create_default_slot_1$5(ctx) {
    let span;
    return {
        c() {
            span = element("span");
            span.textContent = "Comments";
        },
        m(target, anchor) {
            insert(target, span, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(span);
        }
    };
}

function create_default_slot$9(ctx) {
    let span;
    return {
        c() {
            span = element("span");
            span.textContent = "Posts";
        },
        m(target, anchor) {
            insert(target, span, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(span);
        }
    };
}

function create_if_block$d(ctx) {
    let button;
    let div0;
    let t0;
    let span;
    let t2;
    let div1;
    let spinner;
    let t3;
    let t4;
    let current;
    let mounted;
    let dispose;
    spinner = new Spinner({
        props: {
            show: ctx[10]
        }
    });
    let if_block0 = ctx[7] && !ctx[9] && create_if_block_2$3(ctx);
    let if_block1 = ctx[9] && create_if_block_1$5(ctx);
    return {
        c() {
            button = element("button");
            div0 = element("div");
            t0 = space();
            span = element("span");
            span.textContent = `${getMsg("optionsFollowUserFetch")}`;
            t2 = space();
            div1 = element("div");
            create_component(spinner.$$.fragment);
            t3 = space();
            if (if_block0) if_block0.c();
            t4 = space();
            if (if_block1) if_block1.c();
            attr(div0, "class", "mr-1 h-5 w-5");
            attr(button, "class", "flex items-center border-transparent bg-transparent p-0 text-xs text-skin-accent2 hover:bg-transparent");
            button.disabled = ctx[11];
            attr(div1, "class", "mb-2 ml-2");
        },
        m(target, anchor) {
            insert(target, button, anchor);
            append(button, div0);
            div0.innerHTML = RefreshIcon2;
            append(button, t0);
            append(button, span);
            insert(target, t2, anchor);
            insert(target, div1, anchor);
            mount_component(spinner, div1, null);
            append(div1, t3);
            if (if_block0) if_block0.m(div1, null);
            append(div1, t4);
            if (if_block1) if_block1.m(div1, null);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", ctx[19]);
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            if (!current || dirty & 2048) button.disabled = ctx2[11];
            const spinner_changes = {};
            if (dirty & 1024) spinner_changes.show = ctx2[10];
            spinner.$set(spinner_changes);
            if (ctx2[7] && !ctx2[9]) if (if_block0) {
                if_block0.p(ctx2, dirty);
                if (dirty & 640) transition_in(if_block0, 1);
            } else {
                if_block0 = create_if_block_2$3(ctx2);
                if_block0.c();
                transition_in(if_block0, 1);
                if_block0.m(div1, t4);
            } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, (() => {
                    if_block0 = null;
                }));
                check_outros();
            }
            if (ctx2[9]) if (if_block1) if_block1.p(ctx2, dirty); else {
                if_block1 = create_if_block_1$5(ctx2);
                if_block1.c();
                if_block1.m(div1, null);
            } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
            }
        },
        i(local) {
            if (current) return;
            transition_in(spinner.$$.fragment, local);
            transition_in(if_block0);
            current = true;
        },
        o(local) {
            transition_out(spinner.$$.fragment, local);
            transition_out(if_block0);
            current = false;
        },
        d(detaching) {
            if (detaching) {
                detach(button);
                detach(t2);
                detach(div1);
            }
            destroy_component(spinner);
            if (if_block0) if_block0.d();
            if (if_block1) if_block1.d();
            mounted = false;
            dispose();
        }
    };
}

function create_if_block_2$3(ctx) {
    let reddititemslist;
    let current;
    reddititemslist = new RedditItemsList({
        props: {
            title: `${ctx[0].username}' latest activities on reddit: `,
            items: ctx[0].data,
            onClose: ctx[20]
        }
    });
    return {
        c() {
            create_component(reddititemslist.$$.fragment);
        },
        m(target, anchor) {
            mount_component(reddititemslist, target, anchor);
            current = true;
        },
        p(ctx2, dirty) {
            const reddititemslist_changes = {};
            if (dirty & 1) reddititemslist_changes.title = `${ctx2[0].username}' latest activities on reddit: `;
            if (dirty & 1) reddititemslist_changes.items = ctx2[0].data;
            if (dirty & 128) reddititemslist_changes.onClose = ctx2[20];
            reddititemslist.$set(reddititemslist_changes);
        },
        i(local) {
            if (current) return;
            transition_in(reddititemslist.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(reddititemslist.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            destroy_component(reddititemslist, detaching);
        }
    };
}

function create_if_block_1$5(ctx) {
    let span;
    let t;
    return {
        c() {
            span = element("span");
            t = text(ctx[9]);
            attr(span, "class", "text-skin-error");
        },
        m(target, anchor) {
            insert(target, span, anchor);
            append(span, t);
        },
        p(ctx2, dirty) {
            if (dirty & 512) set_data(t, ctx2[9]);
        },
        d(detaching) {
            if (detaching) detach(span);
        }
    };
}

function create_fragment$i(ctx) {
    var _a;
    let div0;
    let input;
    let t0;
    let button0;
    let t1;
    let t2;
    let ioscheckbox0;
    let t3;
    let ioscheckbox1;
    let t4;
    let notifytoggle;
    let updating_checked;
    let t5;
    let div2;
    let button1;
    let div1;
    let raw_value = DeleteIcon + "";
    let t6;
    let div3;
    let current;
    let mounted;
    let dispose;
    ioscheckbox0 = new IosCheckbox({
        props: {
            checked: ctx[5],
            changeHandler: ctx[15],
            title: "watch for user's comments",
            $$slots: {
                default: [ create_default_slot_1$5 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    ioscheckbox1 = new IosCheckbox({
        props: {
            checked: ctx[6],
            changeHandler: ctx[16],
            title: "watch for user's submissions",
            $$slots: {
                default: [ create_default_slot$9 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    function notifytoggle_checked_binding(value) {
        ctx[18](value);
    }
    let notifytoggle_props = {
        changeHandler: ctx[1],
        title: "Show notification on new user activities"
    };
    if (ctx[0].notify !== void 0) notifytoggle_props.checked = ctx[0].notify;
    notifytoggle = new NotifyToggle({
        props: notifytoggle_props
    });
    binding_callbacks.push((() => bind(notifytoggle, "checked", notifytoggle_checked_binding)));
    let if_block = ((_a = ctx[0].username) == null ? void 0 : _a.length) && create_if_block$d(ctx);
    return {
        c() {
            div0 = element("div");
            input = element("input");
            t0 = space();
            button0 = element("button");
            t1 = text(ctx[8]);
            t2 = space();
            create_component(ioscheckbox0.$$.fragment);
            t3 = space();
            create_component(ioscheckbox1.$$.fragment);
            t4 = space();
            create_component(notifytoggle.$$.fragment);
            t5 = space();
            div2 = element("div");
            button1 = element("button");
            div1 = element("div");
            t6 = space();
            div3 = element("div");
            if (if_block) if_block.c();
            attr(input, "size", "13");
            attr(input, "maxlength", "20");
            attr(input, "class", "m-0 rounded-l rounded-r-none border-none hover:shadow-none");
            attr(input, "type", "text");
            input.value = ctx[3];
            attr(button0, "class", "min-w-[4rem] rounded-l-none rounded-r border-0 border-l px-2 py-0 text-xs");
            attr(div0, "class", "flex rounded border border-skin-base bg-skin-input hover:shadow-input");
            attr(div1, "class", "h-5 w-5");
            attr(button1, "class", "icon-button ml-auto text-skin-accent");
            attr(button1, "aria-label", getMsg("optionWatchInputDelete"));
            attr(div2, "class", "ml-auto");
            attr(div3, "class", "col-span-full mb-3 mt-1");
        },
        m(target, anchor) {
            insert(target, div0, anchor);
            append(div0, input);
            append(div0, t0);
            append(div0, button0);
            append(button0, t1);
            insert(target, t2, anchor);
            mount_component(ioscheckbox0, target, anchor);
            insert(target, t3, anchor);
            mount_component(ioscheckbox1, target, anchor);
            insert(target, t4, anchor);
            mount_component(notifytoggle, target, anchor);
            insert(target, t5, anchor);
            insert(target, div2, anchor);
            append(div2, button1);
            append(button1, div1);
            div1.innerHTML = raw_value;
            insert(target, t6, anchor);
            insert(target, div3, anchor);
            if (if_block) if_block.m(div3, null);
            current = true;
            if (!mounted) {
                dispose = [ listen(input, "input", ctx[17]), listen(input, "change", ctx[13]), listen(button0, "click", ctx[12]), listen(button1, "click", (function() {
                    if (is_function(ctx[2])) ctx[2].apply(this, arguments);
                })) ];
                mounted = true;
            }
        },
        p(new_ctx, [dirty]) {
            var _a2;
            ctx = new_ctx;
            if (!current || dirty & 8 && input.value !== ctx[3]) input.value = ctx[3];
            if (!current || dirty & 256) set_data(t1, ctx[8]);
            const ioscheckbox0_changes = {};
            if (dirty & 32) ioscheckbox0_changes.checked = ctx[5];
            if (dirty & 2097152) ioscheckbox0_changes.$$scope = {
                dirty: dirty,
                ctx: ctx
            };
            ioscheckbox0.$set(ioscheckbox0_changes);
            const ioscheckbox1_changes = {};
            if (dirty & 64) ioscheckbox1_changes.checked = ctx[6];
            if (dirty & 2097152) ioscheckbox1_changes.$$scope = {
                dirty: dirty,
                ctx: ctx
            };
            ioscheckbox1.$set(ioscheckbox1_changes);
            const notifytoggle_changes = {};
            if (dirty & 2) notifytoggle_changes.changeHandler = ctx[1];
            if (!updating_checked && dirty & 1) {
                updating_checked = true;
                notifytoggle_changes.checked = ctx[0].notify;
                add_flush_callback((() => updating_checked = false));
            }
            notifytoggle.$set(notifytoggle_changes);
            if ((_a2 = ctx[0].username) == null ? void 0 : _a2.length) if (if_block) {
                if_block.p(ctx, dirty);
                if (dirty & 1) transition_in(if_block, 1);
            } else {
                if_block = create_if_block$d(ctx);
                if_block.c();
                transition_in(if_block, 1);
                if_block.m(div3, null);
            } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, (() => {
                    if_block = null;
                }));
                check_outros();
            }
        },
        i(local) {
            if (current) return;
            transition_in(ioscheckbox0.$$.fragment, local);
            transition_in(ioscheckbox1.$$.fragment, local);
            transition_in(notifytoggle.$$.fragment, local);
            transition_in(if_block);
            current = true;
        },
        o(local) {
            transition_out(ioscheckbox0.$$.fragment, local);
            transition_out(ioscheckbox1.$$.fragment, local);
            transition_out(notifytoggle.$$.fragment, local);
            transition_out(if_block);
            current = false;
        },
        d(detaching) {
            if (detaching) {
                detach(div0);
                detach(t2);
                detach(t3);
                detach(t4);
                detach(t5);
                detach(div2);
                detach(t6);
                detach(div3);
            }
            destroy_component(ioscheckbox0, detaching);
            destroy_component(ioscheckbox1, detaching);
            destroy_component(notifytoggle, detaching);
            if (if_block) if_block.d();
            mounted = false;
            run_all(dispose);
        }
    };
}

function instance$i($$self, $$props, $$invalidate) {
    let $isBlocked;
    component_subscribe($$self, isBlocked, ($$value => $$invalidate(11, $isBlocked = $$value)));
    let {userInfo: userInfo} = $$props;
    let {commitChanges: commitChanges} = $$props;
    let {onDelete: onDelete} = $$props;
    let username = userInfo.username;
    let inputSaved = true;
    let comments = true;
    let posts = true;
    let showUserData = false;
    let saveBtnMessage = "";
    let errorMsg = "";
    let isLoading = false;
    const saveWatchTarget = () => {
        if (posts) $$invalidate(0, userInfo.watch = "submitted", userInfo);
        if (comments) $$invalidate(0, userInfo.watch = "comments", userInfo);
        if (comments && posts) $$invalidate(0, userInfo.watch = "overview", userInfo); else if (!comments && !posts) $$invalidate(0, userInfo.watch = userInfo.watch === "comments" ? "submitted" : "comments", userInfo);
        $$invalidate(0, userInfo = {
            ...userInfo,
            lastUpdate: null,
            lastPostCreated: null,
            data: []
        });
        commitChanges();
    };
    const saveUsername = () => {
        $$invalidate(4, inputSaved = true);
        $$invalidate(7, showUserData = false);
        $$invalidate(3, username = username.replace(/\s/g, ""));
        $$invalidate(0, userInfo = {
            ...userInfo,
            username: username,
            error: null,
            lastUpdate: null,
            lastPostCreated: null,
            data: []
        });
        commitChanges();
    };
    async function fetchUser() {
        $$invalidate(10, isLoading = true);
        isBlocked.block();
        const app = new NotifierApp;
        app.reddit.fetchOpts = {
            cache: "default"
        };
        try {
            const {user: user} = await app.updateFollowingUser({
                ...userInfo,
                data: [],
                lastPostCreated: 0
            });
            $$invalidate(0, userInfo = user);
            $$invalidate(7, showUserData = true);
            commitChanges();
        } catch (e) {
            $$invalidate(9, errorMsg = e.message || "");
        }
        $$invalidate(10, isLoading = false);
    }
    const commentChange = e => {
        $$invalidate(5, comments = e.currentTarget.checked);
        saveWatchTarget();
    };
    const postChange = e => {
        $$invalidate(6, posts = e.currentTarget.checked);
        saveWatchTarget();
    };
    const input_handler = e => {
        $$invalidate(3, username = e.currentTarget.value);
        $$invalidate(4, inputSaved = false);
    };
    function notifytoggle_checked_binding(value) {
        if ($$self.$$.not_equal(userInfo.notify, value)) {
            userInfo.notify = value;
            $$invalidate(0, userInfo);
        }
    }
    const click_handler = () => void fetchUser();
    const func = () => {
        $$invalidate(7, showUserData = false);
    };
    $$self.$$set = $$props2 => {
        if ("userInfo" in $$props2) $$invalidate(0, userInfo = $$props2.userInfo);
        if ("commitChanges" in $$props2) $$invalidate(1, commitChanges = $$props2.commitChanges);
        if ("onDelete" in $$props2) $$invalidate(2, onDelete = $$props2.onDelete);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 25) if (userInfo.username !== username && inputSaved) $$invalidate(3, username = userInfo.username);
        if ($$self.$$.dirty & 1) switch (userInfo.watch) {
          case "comments":
            $$invalidate(5, comments = true);
            $$invalidate(6, posts = false);
            break;

          case "submitted":
            $$invalidate(5, comments = false);
            $$invalidate(6, posts = true);
            break;

          default:
            $$invalidate(5, comments = true);
            $$invalidate(6, posts = true);
        }
        if ($$self.$$.dirty & 25) if (!username) $$invalidate(8, saveBtnMessage = " "); else $$invalidate(8, saveBtnMessage = username === userInfo.username || inputSaved ? "saved" : "save");
        if ($$self.$$.dirty & 1) if (userInfo.error) $$invalidate(9, errorMsg = `${userInfo.error.error || ""} ${userInfo.error.message || ""}`); else $$invalidate(9, errorMsg = "");
    };
    return [ userInfo, commitChanges, onDelete, username, inputSaved, comments, posts, showUserData, saveBtnMessage, errorMsg, isLoading, $isBlocked, saveWatchTarget, saveUsername, fetchUser, commentChange, postChange, input_handler, notifytoggle_checked_binding, click_handler, func ];
}

class FollowUserInput extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$i, create_fragment$i, safe_not_equal, {
            userInfo: 0,
            commitChanges: 1,
            onDelete: 2
        });
    }
}

function get_each_context$8(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[12] = list[i];
    child_ctx[13] = list;
    child_ctx[14] = i;
    return child_ctx;
}

function create_default_slot_1$4(ctx) {
    let t_value = getMsg("optionsFollowUserDescription") + "";
    let t;
    return {
        c() {
            t = text(t_value);
        },
        m(target, anchor) {
            insert(target, t, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(t);
        }
    };
}

function create_description_slot(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            div2.textContent = `${getMsg("optionsFollowUserMinUpdate")}`;
            attr(div2, "slot", "description");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_controls_slot(ctx) {
    let div2;
    let div1;
    let radiogroup;
    let t0;
    let div0;
    let t1_value = getMsg("optionsFollowUserGlobal", String(Math.round(ctx[2].updateInterval / 60 * 10) / 10)) + "";
    let t1;
    let current;
    radiogroup = new RadioGroup({
        props: {
            onChange: ctx[7],
            valueList: ctx[6],
            currentValue: String(ctx[1].options.pollUserInterval)
        }
    });
    return {
        c() {
            div2 = element("div");
            div1 = element("div");
            create_component(radiogroup.$$.fragment);
            t0 = space();
            div0 = element("div");
            t1 = text(t1_value);
            attr(div0, "class", "mt-4");
            attr(div1, "class", "flex flex-col");
            attr(div2, "slot", "controls");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, div1);
            mount_component(radiogroup, div1, null);
            append(div1, t0);
            append(div1, div0);
            append(div0, t1);
            current = true;
        },
        p(ctx2, dirty) {
            const radiogroup_changes = {};
            if (dirty & 2) radiogroup_changes.currentValue = String(ctx2[1].options.pollUserInterval);
            radiogroup.$set(radiogroup_changes);
            if ((!current || dirty & 4) && t1_value !== (t1_value = getMsg("optionsFollowUserGlobal", String(Math.round(ctx2[2].updateInterval / 60 * 10) / 10)) + "")) set_data(t1, t1_value);
        },
        i(local) {
            if (current) return;
            transition_in(radiogroup.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(radiogroup.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div2);
            destroy_component(radiogroup);
        }
    };
}

function create_each_block$8(ctx) {
    let followuserinput;
    let updating_userInfo;
    let current;
    function func() {
        return ctx[9](ctx[14]);
    }
    function followuserinput_userInfo_binding(value) {
        ctx[10](value, ctx[12], ctx[13], ctx[14]);
    }
    let followuserinput_props = {
        commitChanges: ctx[4],
        onDelete: func
    };
    if (ctx[12] !== void 0) followuserinput_props.userInfo = ctx[12];
    followuserinput = new FollowUserInput({
        props: followuserinput_props
    });
    binding_callbacks.push((() => bind(followuserinput, "userInfo", followuserinput_userInfo_binding)));
    return {
        c() {
            create_component(followuserinput.$$.fragment);
        },
        m(target, anchor) {
            mount_component(followuserinput, target, anchor);
            current = true;
        },
        p(new_ctx, dirty) {
            ctx = new_ctx;
            const followuserinput_changes = {};
            if (!updating_userInfo && dirty & 1) {
                updating_userInfo = true;
                followuserinput_changes.userInfo = ctx[12];
                add_flush_callback((() => updating_userInfo = false));
            }
            followuserinput.$set(followuserinput_changes);
        },
        i(local) {
            if (current) return;
            transition_in(followuserinput.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(followuserinput.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            destroy_component(followuserinput, detaching);
        }
    };
}

function create_default_slot$8(ctx) {
    let t_value = getMsg("optionsFollowUserAdd") + "";
    let t;
    return {
        c() {
            t = text(t_value);
        },
        m(target, anchor) {
            insert(target, t, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(t);
        }
    };
}

function create_fragment$h(ctx) {
    let div7;
    let blockdescription;
    let t0;
    let optionsitem;
    let t1;
    let div6;
    let div0;
    let t3;
    let div1;
    let t5;
    let div2;
    let t7;
    let div3;
    let t9;
    let div4;
    let t11;
    let div5;
    let t12;
    let t13;
    let addbutton;
    let current;
    blockdescription = new BlockDescription({
        props: {
            $$slots: {
                default: [ create_default_slot_1$4 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    optionsitem = new OptionsItem({
        props: {
            title: "Minimum update interval",
            $$slots: {
                controls: [ create_controls_slot ],
                description: [ create_description_slot ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    let each_value = ensure_array_like(ctx[0] || []);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) each_blocks[i] = create_each_block$8(get_each_context$8(ctx, each_value, i));
    const out = i => transition_out(each_blocks[i], 1, 1, (() => {
        each_blocks[i] = null;
    }));
    addbutton = new AddButton({
        props: {
            clickHandler: ctx[11],
            $$slots: {
                default: [ create_default_slot$8 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    return {
        c() {
            div7 = element("div");
            create_component(blockdescription.$$.fragment);
            t0 = space();
            create_component(optionsitem.$$.fragment);
            t1 = space();
            div6 = element("div");
            div0 = element("div");
            div0.textContent = "Username";
            t3 = space();
            div1 = element("div");
            div1.innerHTML = `<span>Comments</span>`;
            t5 = space();
            div2 = element("div");
            div2.innerHTML = `<span>Posts</span>`;
            t7 = space();
            div3 = element("div");
            div3.textContent = "Notification";
            t9 = space();
            div4 = element("div");
            div4.textContent = "Delete";
            t11 = space();
            div5 = element("div");
            t12 = space();
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            t13 = space();
            create_component(addbutton.$$.fragment);
            attr(div1, "class", "text-center");
            attr(div2, "class", "text-center");
            attr(div3, "class", "text-center");
            attr(div4, "class", "ml-auto");
            attr(div5, "class", "col-span-full my-2");
            attr(div6, "class", "user-input-grid text-sm font-medium svelte-xxhsxk");
        },
        m(target, anchor) {
            insert(target, div7, anchor);
            mount_component(blockdescription, div7, null);
            append(div7, t0);
            mount_component(optionsitem, div7, null);
            append(div7, t1);
            append(div7, div6);
            append(div6, div0);
            append(div6, t3);
            append(div6, div1);
            append(div6, t5);
            append(div6, div2);
            append(div6, t7);
            append(div6, div3);
            append(div6, t9);
            append(div6, div4);
            append(div6, t11);
            append(div6, div5);
            append(div6, t12);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(div6, null);
            append(div7, t13);
            mount_component(addbutton, div7, null);
            current = true;
        },
        p(ctx2, [dirty]) {
            const blockdescription_changes = {};
            if (dirty & 32768) blockdescription_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            blockdescription.$set(blockdescription_changes);
            const optionsitem_changes = {};
            if (dirty & 32774) optionsitem_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            optionsitem.$set(optionsitem_changes);
            if (dirty & 49) {
                each_value = ensure_array_like(ctx2[0] || []);
                let i;
                for (i = 0; i < each_value.length; i += 1) {
                    const child_ctx = get_each_context$8(ctx2, each_value, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                        transition_in(each_blocks[i], 1);
                    } else {
                        each_blocks[i] = create_each_block$8(child_ctx);
                        each_blocks[i].c();
                        transition_in(each_blocks[i], 1);
                        each_blocks[i].m(div6, null);
                    }
                }
                group_outros();
                for (i = each_value.length; i < each_blocks.length; i += 1) out(i);
                check_outros();
            }
            const addbutton_changes = {};
            if (dirty & 32768) addbutton_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            addbutton.$set(addbutton_changes);
        },
        i(local) {
            if (current) return;
            transition_in(blockdescription.$$.fragment, local);
            transition_in(optionsitem.$$.fragment, local);
            for (let i = 0; i < each_value.length; i += 1) transition_in(each_blocks[i]);
            transition_in(addbutton.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(blockdescription.$$.fragment, local);
            transition_out(optionsitem.$$.fragment, local);
            each_blocks = each_blocks.filter(Boolean);
            for (let i = 0; i < each_blocks.length; i += 1) transition_out(each_blocks[i]);
            transition_out(addbutton.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div7);
            destroy_component(blockdescription);
            destroy_component(optionsitem);
            destroy_each(each_blocks, detaching);
            destroy_component(addbutton);
        }
    };
}

function instance$h($$self, $$props, $$invalidate) {
    let $storageData;
    component_subscribe($$self, storageData, ($$value => $$invalidate(1, $storageData = $$value)));
    let options = $storageData.options;
    let usersList = $storageData.usersList || [];
    let prevLen = usersList.length;
    const addUsers = (num = 1) => {
        const newUsers = Array.from({
            length: num
        }).map((() => ({
            username: "",
            data: [],
            watch: "overview"
        })));
        $$invalidate(0, usersList = [ ...usersList, ...newUsers ]);
        set_store_value(storageData, $storageData.usersList = usersList, $storageData);
        $$invalidate(8, prevLen = $storageData.usersList.length);
    };
    const saveInputs = () => {
        const saved = new Set;
        const unique2 = usersList.filter((u => {
            if (!u.username || saved.has(u.username)) return false;
            saved.add(u.username);
            return true;
        }));
        void storage.saveUsersList(unique2);
    };
    const removeUser = index => {
        $$invalidate(0, usersList = usersList.filter(((_, idx) => index !== idx)));
        $$invalidate(8, prevLen = usersList.length);
        saveInputs();
    };
    const intervalList = [ {
        value: String(60),
        id: "1m",
        label: "1m"
    }, {
        value: String(5 * 60),
        id: "5m",
        label: "5m"
    }, {
        value: String(10 * 60),
        id: "10m",
        label: "10m"
    }, {
        value: String(15 * 60),
        id: "15m",
        label: "15m"
    }, {
        value: String(30 * 60),
        id: "30m",
        label: "30m"
    }, {
        value: String(60 * 60),
        id: "1h",
        label: "1h"
    } ];
    const changeIntervalHandler = value => {
        void storage.saveOptions({
            pollUserInterval: Number.parseInt(value) || DEFAULT_OPTIONS$1.updateInterval
        });
    };
    const func = index => removeUser(index);
    function followuserinput_userInfo_binding(value, userInfo, each_value, index) {
        each_value[index] = value;
        $$invalidate(0, usersList), $$invalidate(1, $storageData);
    }
    const func_1 = () => addUsers();
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 2) $$invalidate(2, options = $storageData.options);
        if ($$self.$$.dirty & 2) $$invalidate(0, usersList = $storageData.usersList || []);
        if ($$self.$$.dirty & 257) if (!usersList.length || usersList.length < prevLen) addUsers(Math.max(prevLen - usersList.length, 1));
    };
    return [ usersList, $storageData, options, addUsers, saveInputs, removeUser, intervalList, changeIntervalHandler, prevLen, func, followuserinput_userInfo_binding, func_1 ];
}

class FollowUsersBlock extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$h, create_fragment$h, safe_not_equal, {});
    }
}

const genEmpty$1 = () => ({
    id: generateId()
});

function createStore$1() {
    const {set: set, subscribe: subscribe, update: update} = writable([], (() => {
        void storage.getQueriesList().then((list => {
            set((list == null ? void 0 : list.length) ? [ ...list ] : []);
        }));
    }));
    async function saveQuery(qOpts, clearData) {
        update((prev => prev.map((opts => opts.id === qOpts.id ? qOpts : opts))));
        await storage.saveQuery(qOpts);
        if (clearData) await storage.removePostsFrom({
            searchId: qOpts.id,
            clearTS: true
        });
    }
    async function removeQuery(id) {
        await storage.removeQueries([ id ]);
        update((prev => prev.filter((s => s.id !== id))));
    }
    return {
        set: set,
        subscribe: subscribe,
        update: update,
        addQuery: () => update((prev => [ ...prev, genEmpty$1() ])),
        saveQuery: saveQuery,
        removeQuery: removeQuery
    };
}

const searchStore = createStore$1();

function create_fragment$g(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            attr(div2, "class", "h-4 text-skin-accent2 svelte-1ttkx96");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            div2.innerHTML = HelpCircleIcon;
            ctx[2](div2);
        },
        p: noop,
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(div2);
            ctx[2](null);
        }
    };
}

function instance$g($$self, $$props, $$invalidate) {
    let {message: message} = $$props;
    let ref;
    onMount((() => {
        tippy(ref, {
            content: message
        });
    }));
    function div_binding($$value) {
        binding_callbacks[$$value ? "unshift" : "push"]((() => {
            ref = $$value;
            $$invalidate(0, ref);
        }));
    }
    $$self.$$set = $$props2 => {
        if ("message" in $$props2) $$invalidate(1, message = $$props2.message);
    };
    return [ ref, message, div_binding ];
}

class TooltipIcon extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$g, create_fragment$g, safe_not_equal, {
            message: 1
        });
    }
}

const get_posts_block_slot_changes = dirty => ({});

const get_posts_block_slot_context = ctx => ({});

const get_toggles_slot_changes = dirty => ({});

const get_toggles_slot_context = ctx => ({});

function create_if_block_1$4(ctx) {
    let div1;
    let div0;
    let raw_value = WarningIcon + "";
    let tooltip_action;
    let mounted;
    let dispose;
    return {
        c() {
            div1 = element("div");
            div0 = element("div");
            attr(div0, "class", "h-5 w-5 text-skin-error");
            attr(div1, "class", "flex justify-center");
            attr(div1, "data-testid", "warning-icon");
        },
        m(target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            div0.innerHTML = raw_value;
            if (!mounted) {
                dispose = action_destroyer(tooltip_action = tooltip.call(null, div1, {
                    content: ctx[4]
                }));
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            if (tooltip_action && is_function(tooltip_action.update) && dirty & 16) tooltip_action.update.call(null, {
                content: ctx2[4]
            });
        },
        d(detaching) {
            if (detaching) detach(div1);
            mounted = false;
            dispose();
        }
    };
}

function create_if_block$c(ctx) {
    let div2;
    let current;
    const default_slot_template = ctx[11].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[10], null);
    return {
        c() {
            div2 = element("div");
            if (default_slot) default_slot.c();
            attr(div2, "class", "col-span-full m-2 pb-2");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            if (default_slot) default_slot.m(div2, null);
            current = true;
        },
        p(ctx2, dirty) {
            if (default_slot) if (default_slot.p && (!current || dirty & 1024)) update_slot_base(default_slot, default_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(default_slot_template, ctx2[10], dirty, null), null);
        },
        i(local) {
            if (current) return;
            transition_in(default_slot, local);
            current = true;
        },
        o(local) {
            transition_out(default_slot, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div2);
            if (default_slot) default_slot.d(detaching);
        }
    };
}

function create_fragment$f(ctx) {
    let div5;
    let div4;
    let button0;
    let div0;
    let t0;
    let t1;
    let t2;
    let button1;
    let div1;
    let raw0_value = RefreshIcon2 + "";
    let t3;
    let span0;
    let t5;
    let ioscheckbox;
    let updating_checked;
    let t6;
    let t7;
    let button2;
    let span1;
    let raw1_value = edit + "";
    let t8;
    let span2;
    let t10;
    let button3;
    let div2;
    let raw2_value = DeleteIcon + "";
    let t11;
    let div3;
    let t12;
    let current;
    let mounted;
    let dispose;
    let if_block0 = ctx[4] && create_if_block_1$4(ctx);
    function ioscheckbox_checked_binding(value) {
        ctx[12](value);
    }
    let ioscheckbox_props = {
        tooltipText: getMsg("optionWatchInputDisable"),
        changeHandler: ctx[7],
        "data-testid": "isActive"
    };
    if (ctx[0] !== void 0) ioscheckbox_props.checked = ctx[0];
    ioscheckbox = new IosCheckbox({
        props: ioscheckbox_props
    });
    binding_callbacks.push((() => bind(ioscheckbox, "checked", ioscheckbox_checked_binding)));
    const toggles_slot_template = ctx[11].toggles;
    const toggles_slot = create_slot(toggles_slot_template, ctx, ctx[10], get_toggles_slot_context);
    const posts_block_slot_template = ctx[11]["posts-block"];
    const posts_block_slot = create_slot(posts_block_slot_template, ctx, ctx[10], get_posts_block_slot_context);
    let if_block1 = ctx[1] && create_if_block$c(ctx);
    let div5_levels = [ {
        class: "rounded-md hover:ring-1 hover:ring-skin-delimiter"
    }, ctx[9] ];
    let div_data_5 = {};
    for (let i = 0; i < div5_levels.length; i += 1) div_data_5 = assign(div_data_5, div5_levels[i]);
    return {
        c() {
            div5 = element("div");
            div4 = element("div");
            button0 = element("button");
            div0 = element("div");
            t0 = text(ctx[2]);
            t1 = space();
            if (if_block0) if_block0.c();
            t2 = space();
            button1 = element("button");
            div1 = element("div");
            t3 = space();
            span0 = element("span");
            span0.textContent = `${getMsg("optionsSubredditFetch")}`;
            t5 = space();
            create_component(ioscheckbox.$$.fragment);
            t6 = space();
            if (toggles_slot) toggles_slot.c();
            t7 = space();
            button2 = element("button");
            span1 = element("span");
            t8 = space();
            span2 = element("span");
            span2.textContent = "Edit";
            t10 = space();
            button3 = element("button");
            div2 = element("div");
            t11 = space();
            div3 = element("div");
            if (posts_block_slot) posts_block_slot.c();
            t12 = space();
            if (if_block1) if_block1.c();
            attr(div0, "class", "w-full overflow-hidden text-ellipsis whitespace-nowrap");
            toggle_class(div0, "font-bold", ctx[2]);
            attr(button0, "class", "flex h-full border-none p-0 px-2 text-left text-sm");
            attr(button0, "data-testid", "input-name");
            attr(div1, "class", "mr-1 h-5 w-5 text-skin-accent2");
            attr(button1, "class", "flex items-center p-0 text-skin-text hover:text-skin-accent2 disabled:text-skin-gray");
            button1.disabled = ctx[3];
            attr(span1, "class", "h-5 w-5");
            attr(button2, "class", "flex items-center justify-start border-transparent bg-transparent px-2 py-0");
            attr(div2, "class", "h-5 w-5");
            attr(button3, "class", "icon-button text-skin-accent");
            attr(button3, "aria-label", getMsg("optionWatchInputDelete"));
            attr(div3, "class", "col-span-full");
            attr(div4, "class", "watch-item-grid rounded-md border border-dashed border-transparent bg-skin-bg svelte-1onijf6");
            toggle_class(div4, "delimiter", ctx[1]);
            set_attributes(div5, div_data_5);
            toggle_class(div5, "expanded", ctx[1]);
            toggle_class(div5, "svelte-1onijf6", true);
        },
        m(target, anchor) {
            insert(target, div5, anchor);
            append(div5, div4);
            append(div4, button0);
            append(button0, div0);
            append(div0, t0);
            append(button0, t1);
            if (if_block0) if_block0.m(button0, null);
            append(div4, t2);
            append(div4, button1);
            append(button1, div1);
            div1.innerHTML = raw0_value;
            append(button1, t3);
            append(button1, span0);
            append(div4, t5);
            mount_component(ioscheckbox, div4, null);
            append(div4, t6);
            if (toggles_slot) toggles_slot.m(div4, null);
            append(div4, t7);
            append(div4, button2);
            append(button2, span1);
            span1.innerHTML = raw1_value;
            append(button2, t8);
            append(button2, span2);
            append(div4, t10);
            append(div4, button3);
            append(button3, div2);
            div2.innerHTML = raw2_value;
            append(div4, t11);
            append(div4, div3);
            if (posts_block_slot) posts_block_slot.m(div3, null);
            append(div5, t12);
            if (if_block1) if_block1.m(div5, null);
            current = true;
            if (!mounted) {
                dispose = [ listen(button0, "click", ctx[8]), listen(button1, "click", (function() {
                    if (is_function(ctx[6])) ctx[6].apply(this, arguments);
                })), action_destroyer(tooltip.call(null, button1, {
                    content: getMsg("optionsWatchInputFetchDesc")
                })), listen(button2, "click", ctx[8]), action_destroyer(tooltip.call(null, button3, {
                    content: getMsg("optionWatchInputDelete")
                })), listen(button3, "click", (function() {
                    if (is_function(ctx[5])) ctx[5].apply(this, arguments);
                })) ];
                mounted = true;
            }
        },
        p(new_ctx, [dirty]) {
            ctx = new_ctx;
            if (!current || dirty & 4) set_data(t0, ctx[2]);
            if (!current || dirty & 4) toggle_class(div0, "font-bold", ctx[2]);
            if (ctx[4]) if (if_block0) if_block0.p(ctx, dirty); else {
                if_block0 = create_if_block_1$4(ctx);
                if_block0.c();
                if_block0.m(button0, null);
            } else if (if_block0) {
                if_block0.d(1);
                if_block0 = null;
            }
            if (!current || dirty & 8) button1.disabled = ctx[3];
            const ioscheckbox_changes = {};
            if (dirty & 128) ioscheckbox_changes.changeHandler = ctx[7];
            if (!updating_checked && dirty & 1) {
                updating_checked = true;
                ioscheckbox_changes.checked = ctx[0];
                add_flush_callback((() => updating_checked = false));
            }
            ioscheckbox.$set(ioscheckbox_changes);
            if (toggles_slot) if (toggles_slot.p && (!current || dirty & 1024)) update_slot_base(toggles_slot, toggles_slot_template, ctx, ctx[10], !current ? get_all_dirty_from_scope(ctx[10]) : get_slot_changes(toggles_slot_template, ctx[10], dirty, get_toggles_slot_changes), get_toggles_slot_context);
            if (posts_block_slot) if (posts_block_slot.p && (!current || dirty & 1024)) update_slot_base(posts_block_slot, posts_block_slot_template, ctx, ctx[10], !current ? get_all_dirty_from_scope(ctx[10]) : get_slot_changes(posts_block_slot_template, ctx[10], dirty, get_posts_block_slot_changes), get_posts_block_slot_context);
            if (!current || dirty & 2) toggle_class(div4, "delimiter", ctx[1]);
            if (ctx[1]) if (if_block1) {
                if_block1.p(ctx, dirty);
                if (dirty & 2) transition_in(if_block1, 1);
            } else {
                if_block1 = create_if_block$c(ctx);
                if_block1.c();
                transition_in(if_block1, 1);
                if_block1.m(div5, null);
            } else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, (() => {
                    if_block1 = null;
                }));
                check_outros();
            }
            set_attributes(div5, div_data_5 = get_spread_update(div5_levels, [ {
                class: "rounded-md hover:ring-1 hover:ring-skin-delimiter"
            }, dirty & 512 && ctx[9] ]));
            toggle_class(div5, "expanded", ctx[1]);
            toggle_class(div5, "svelte-1onijf6", true);
        },
        i(local) {
            if (current) return;
            transition_in(ioscheckbox.$$.fragment, local);
            transition_in(toggles_slot, local);
            transition_in(posts_block_slot, local);
            transition_in(if_block1);
            current = true;
        },
        o(local) {
            transition_out(ioscheckbox.$$.fragment, local);
            transition_out(toggles_slot, local);
            transition_out(posts_block_slot, local);
            transition_out(if_block1);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div5);
            if (if_block0) if_block0.d();
            destroy_component(ioscheckbox);
            if (toggles_slot) toggles_slot.d(detaching);
            if (posts_block_slot) posts_block_slot.d(detaching);
            if (if_block1) if_block1.d();
            mounted = false;
            run_all(dispose);
        }
    };
}

function instance$f($$self, $$props, $$invalidate) {
    const omit_props_names = [ "isActive", "name", "disabled", "errorMessage", "showEditBlock", "onDelete", "onFetch", "onActiveToggle" ];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let {$$slots: slots = {}, $$scope: $$scope} = $$props;
    let {isActive: isActive = false} = $$props;
    let {name: name = ""} = $$props;
    let {disabled: disabled = false} = $$props;
    let {errorMessage: errorMessage = ""} = $$props;
    let {showEditBlock: showEditBlock = false} = $$props;
    let {onDelete: onDelete} = $$props;
    let {onFetch: onFetch} = $$props;
    let {onActiveToggle: onActiveToggle} = $$props;
    const toggleEditBlock = () => {
        $$invalidate(1, showEditBlock = !showEditBlock);
    };
    function ioscheckbox_checked_binding(value) {
        isActive = value;
        $$invalidate(0, isActive);
    }
    $$self.$$set = $$new_props => {
        $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
        $$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
        if ("isActive" in $$new_props) $$invalidate(0, isActive = $$new_props.isActive);
        if ("name" in $$new_props) $$invalidate(2, name = $$new_props.name);
        if ("disabled" in $$new_props) $$invalidate(3, disabled = $$new_props.disabled);
        if ("errorMessage" in $$new_props) $$invalidate(4, errorMessage = $$new_props.errorMessage);
        if ("showEditBlock" in $$new_props) $$invalidate(1, showEditBlock = $$new_props.showEditBlock);
        if ("onDelete" in $$new_props) $$invalidate(5, onDelete = $$new_props.onDelete);
        if ("onFetch" in $$new_props) $$invalidate(6, onFetch = $$new_props.onFetch);
        if ("onActiveToggle" in $$new_props) $$invalidate(7, onActiveToggle = $$new_props.onActiveToggle);
        if ("$$scope" in $$new_props) $$invalidate(10, $$scope = $$new_props.$$scope);
    };
    return [ isActive, showEditBlock, name, disabled, errorMessage, onDelete, onFetch, onActiveToggle, toggleEditBlock, $$restProps, $$scope, slots, ioscheckbox_checked_binding ];
}

class WatchItem extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$f, create_fragment$f, safe_not_equal, {
            isActive: 0,
            name: 2,
            disabled: 3,
            errorMessage: 4,
            showEditBlock: 1,
            onDelete: 5,
            onFetch: 6,
            onActiveToggle: 7
        });
    }
}

function create_if_block_2$2(ctx) {
    let div2;
    let div0;
    let t0;
    let div1;
    let t1;
    return {
        c() {
            div2 = element("div");
            div0 = element("div");
            t0 = space();
            div1 = element("div");
            t1 = text(ctx[10]);
            attr(div0, "class", "mr-1 h-4 w-4 flex-shrink-0 text-skin-error");
            attr(div2, "class", "flex items-center font-bold text-skin-error");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, div0);
            div0.innerHTML = WarningIcon;
            append(div2, t0);
            append(div2, div1);
            append(div1, t1);
        },
        p(ctx2, dirty) {
            if (dirty & 1024) set_data(t1, ctx2[10]);
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_else_block$4(ctx) {
    let span;
    let t0;
    let t1;
    return {
        c() {
            span = element("span");
            t0 = text(ctx[7]);
            t1 = text("  ");
        },
        m(target, anchor) {
            insert(target, span, anchor);
            append(span, t0);
            append(span, t1);
        },
        p(ctx2, dirty) {
            if (dirty & 128) set_data(t0, ctx2[7]);
        },
        d(detaching) {
            if (detaching) detach(span);
        }
    };
}

function create_if_block_1$3(ctx) {
    let div1;
    let div0;
    let t0;
    let span;
    let t1;
    return {
        c() {
            div1 = element("div");
            div0 = element("div");
            t0 = space();
            span = element("span");
            t1 = text(ctx[7]);
            attr(div0, "class", "mr-1 h-4 w-4 flex-shrink-0");
            attr(div1, "class", "flex items-center");
        },
        m(target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            div0.innerHTML = SaveIcon;
            append(div1, t0);
            append(div1, span);
            append(span, t1);
        },
        p(ctx2, dirty) {
            if (dirty & 128) set_data(t1, ctx2[7]);
        },
        d(detaching) {
            if (detaching) detach(div1);
        }
    };
}

function create_default_slot$7(ctx) {
    let fieldset;
    let div1;
    let t0;
    let div0;
    let t1;
    let div4;
    let label0;
    let t2_value = getMsg("optionSearchName") + "";
    let t2;
    let t3;
    let span1;
    let input0;
    let t4;
    let span0;
    let tooltipicon0;
    let t5;
    let label1;
    let t6_value = getMsg("optionSearchSubreddit") + "";
    let t6;
    let t7;
    let span3;
    let input1;
    let t8;
    let span2;
    let tooltipicon1;
    let t9;
    let label2;
    let t10_value = getMsg("optionSearchQuery") + "";
    let t10;
    let t11;
    let span5;
    let input2;
    let t12;
    let span4;
    let tooltipicon2;
    let t13;
    let div2;
    let t14;
    let div3;
    let a;
    let current;
    let mounted;
    let dispose;
    let if_block0 = ctx[10] && create_if_block_2$2(ctx);
    function select_block_type(ctx2, dirty) {
        if (ctx2[7] && ctx2[7] !== "...") return create_if_block_1$3;
        return create_else_block$4;
    }
    let current_block_type = select_block_type(ctx);
    let if_block1 = current_block_type(ctx);
    tooltipicon0 = new TooltipIcon({
        props: {
            message: getMsg("optionSearchName_title")
        }
    });
    tooltipicon1 = new TooltipIcon({
        props: {
            message: getMsg("optionSearchSubreddit_title")
        }
    });
    tooltipicon2 = new TooltipIcon({
        props: {
            message: getMsg("optionSearchQuery_title")
        }
    });
    return {
        c() {
            fieldset = element("fieldset");
            div1 = element("div");
            if (if_block0) if_block0.c();
            t0 = space();
            div0 = element("div");
            if_block1.c();
            t1 = space();
            div4 = element("div");
            label0 = element("label");
            t2 = text(t2_value);
            t3 = space();
            span1 = element("span");
            input0 = element("input");
            t4 = space();
            span0 = element("span");
            create_component(tooltipicon0.$$.fragment);
            t5 = space();
            label1 = element("label");
            t6 = text(t6_value);
            t7 = space();
            span3 = element("span");
            input1 = element("input");
            t8 = space();
            span2 = element("span");
            create_component(tooltipicon1.$$.fragment);
            t9 = space();
            label2 = element("label");
            t10 = text(t10_value);
            t11 = space();
            span5 = element("span");
            input2 = element("input");
            t12 = space();
            span4 = element("span");
            create_component(tooltipicon2.$$.fragment);
            t13 = space();
            div2 = element("div");
            t14 = space();
            div3 = element("div");
            a = element("a");
            a.textContent = `${getMsg("optionSearchWiki")}`;
            attr(div0, "class", "mr-4 min-h-[1rem] font-medium text-skin-success");
            attr(div1, "class", "mb-3 flex justify-between rounded-b text-xs");
            attr(label0, "for", ctx[12].name);
            attr(input0, "class", "w-60 max-w-full");
            attr(input0, "type", "text");
            attr(input0, "title", getMsg("optionSearchName_title"));
            attr(input0, "id", ctx[12].name);
            attr(input0, "placeholder", getMsg("optionSearchName_placeholder"));
            attr(span0, "class", "ml-2");
            attr(span1, "class", "flex items-center");
            attr(label1, "for", ctx[12].subreddit);
            attr(label1, "class", "font-bold");
            attr(input1, "class", "w-60 max-w-full");
            attr(input1, "type", "text");
            attr(input1, "title", getMsg("optionSearchSubreddit_title"));
            attr(input1, "id", ctx[12].subreddit);
            attr(input1, "placeholder", getMsg("optionSearchSubreddit_placeholder"));
            attr(span2, "class", "ml-2");
            attr(span3, "class", "flex items-center");
            attr(label2, "for", ctx[12].query);
            attr(label2, "class", "font-bold");
            attr(input2, "class", "w-full");
            attr(input2, "type", "text");
            attr(input2, "title", getMsg("optionSearchQuery_title"));
            attr(input2, "placeholder", getMsg("optionSearchQuery_placeholder"));
            attr(input2, "id", ctx[12].query);
            attr(span4, "class", "ml-2");
            attr(span5, "class", "flex items-center");
            attr(a, "class", "text-sm underline");
            attr(a, "href", "https://www.reddit.com/wiki/search/#wiki_manual_filtering");
            attr(a, "target", "_blank");
            attr(a, "rel", "noreferrer");
            attr(div3, "class", "-mt-1");
            attr(div4, "class", "mb-2 grid grid-cols-[auto,1fr] items-center gap-2");
        },
        m(target, anchor) {
            insert(target, fieldset, anchor);
            append(fieldset, div1);
            if (if_block0) if_block0.m(div1, null);
            append(div1, t0);
            append(div1, div0);
            if_block1.m(div0, null);
            append(fieldset, t1);
            append(fieldset, div4);
            append(div4, label0);
            append(label0, t2);
            append(div4, t3);
            append(div4, span1);
            append(span1, input0);
            set_input_value(input0, ctx[0].name);
            append(span1, t4);
            append(span1, span0);
            mount_component(tooltipicon0, span0, null);
            append(div4, t5);
            append(div4, label1);
            append(label1, t6);
            append(div4, t7);
            append(div4, span3);
            append(span3, input1);
            set_input_value(input1, ctx[0].subreddit);
            ctx[23](input1);
            append(span3, t8);
            append(span3, span2);
            mount_component(tooltipicon1, span2, null);
            append(div4, t9);
            append(div4, label2);
            append(label2, t10);
            append(div4, t11);
            append(div4, span5);
            append(span5, input2);
            set_input_value(input2, ctx[0].query);
            append(span5, t12);
            append(span5, span4);
            mount_component(tooltipicon2, span4, null);
            append(div4, t13);
            append(div4, div2);
            append(div4, t14);
            append(div4, div3);
            append(div3, a);
            current = true;
            if (!mounted) {
                dispose = [ listen(input0, "input", ctx[21]), listen(input0, "input", ctx[14]), listen(input1, "input", ctx[22]), listen(input1, "input", ctx[14]), listen(input2, "input", ctx[24]), listen(input2, "input", ctx[14]) ];
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            if (ctx2[10]) if (if_block0) if_block0.p(ctx2, dirty); else {
                if_block0 = create_if_block_2$2(ctx2);
                if_block0.c();
                if_block0.m(div1, t0);
            } else if (if_block0) {
                if_block0.d(1);
                if_block0 = null;
            }
            if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block1) if_block1.p(ctx2, dirty); else {
                if_block1.d(1);
                if_block1 = current_block_type(ctx2);
                if (if_block1) {
                    if_block1.c();
                    if_block1.m(div0, null);
                }
            }
            if (dirty & 1 && input0.value !== ctx2[0].name) set_input_value(input0, ctx2[0].name);
            if (dirty & 1 && input1.value !== ctx2[0].subreddit) set_input_value(input1, ctx2[0].subreddit);
            if (dirty & 1 && input2.value !== ctx2[0].query) set_input_value(input2, ctx2[0].query);
        },
        i(local) {
            if (current) return;
            transition_in(tooltipicon0.$$.fragment, local);
            transition_in(tooltipicon1.$$.fragment, local);
            transition_in(tooltipicon2.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(tooltipicon0.$$.fragment, local);
            transition_out(tooltipicon1.$$.fragment, local);
            transition_out(tooltipicon2.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(fieldset);
            if (if_block0) if_block0.d();
            if_block1.d();
            destroy_component(tooltipicon0);
            ctx[23](null);
            destroy_component(tooltipicon1);
            destroy_component(tooltipicon2);
            mounted = false;
            run_all(dispose);
        }
    };
}

function create_if_block$b(ctx) {
    let div2;
    let reddititemslist;
    let current;
    reddititemslist = new RedditItemsList({
        props: {
            title: "The latest posts in the search.",
            items: ctx[1].posts || [],
            limit: 8,
            onClose: ctx[20]
        }
    });
    return {
        c() {
            div2 = element("div");
            create_component(reddititemslist.$$.fragment);
            attr(div2, "class", "border border-skin-delimiter p-1");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            mount_component(reddititemslist, div2, null);
            current = true;
        },
        p(ctx2, dirty) {
            const reddititemslist_changes = {};
            if (dirty & 2) reddititemslist_changes.items = ctx2[1].posts || [];
            if (dirty & 64) reddititemslist_changes.onClose = ctx2[20];
            reddititemslist.$set(reddititemslist_changes);
        },
        i(local) {
            if (current) return;
            transition_in(reddititemslist.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(reddititemslist.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div2);
            destroy_component(reddititemslist);
        }
    };
}

function create_posts_block_slot$1(ctx) {
    let div1;
    let div0;
    let spinner;
    let t;
    let current;
    spinner = new Spinner({
        props: {
            show: ctx[5]
        }
    });
    let if_block = ctx[6] && create_if_block$b(ctx);
    return {
        c() {
            div1 = element("div");
            div0 = element("div");
            create_component(spinner.$$.fragment);
            t = space();
            if (if_block) if_block.c();
            attr(div0, "class", "col-span-full");
            attr(div1, "slot", "posts-block");
        },
        m(target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            mount_component(spinner, div0, null);
            append(div0, t);
            if (if_block) if_block.m(div0, null);
            current = true;
        },
        p(ctx2, dirty) {
            const spinner_changes = {};
            if (dirty & 32) spinner_changes.show = ctx2[5];
            spinner.$set(spinner_changes);
            if (ctx2[6]) if (if_block) {
                if_block.p(ctx2, dirty);
                if (dirty & 64) transition_in(if_block, 1);
            } else {
                if_block = create_if_block$b(ctx2);
                if_block.c();
                transition_in(if_block, 1);
                if_block.m(div0, null);
            } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, (() => {
                    if_block = null;
                }));
                check_outros();
            }
        },
        i(local) {
            if (current) return;
            transition_in(spinner.$$.fragment, local);
            transition_in(if_block);
            current = true;
        },
        o(local) {
            transition_out(spinner.$$.fragment, local);
            transition_out(if_block);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div1);
            destroy_component(spinner);
            if (if_block) if_block.d();
        }
    };
}

function create_toggles_slot$1(ctx) {
    let div2;
    let notifytoggle;
    let updating_checked;
    let current;
    function notifytoggle_checked_binding(value) {
        ctx[19](value);
    }
    let notifytoggle_props = {
        changeHandler: ctx[18],
        tooltipText: getMsg("optionSearchNotify"),
        "data-testid": "notify"
    };
    if (ctx[0].notify !== void 0) notifytoggle_props.checked = ctx[0].notify;
    notifytoggle = new NotifyToggle({
        props: notifytoggle_props
    });
    binding_callbacks.push((() => bind(notifytoggle, "checked", notifytoggle_checked_binding)));
    return {
        c() {
            div2 = element("div");
            create_component(notifytoggle.$$.fragment);
            attr(div2, "slot", "toggles");
            attr(div2, "class", "flex gap-3");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            mount_component(notifytoggle, div2, null);
            current = true;
        },
        p(ctx2, dirty) {
            const notifytoggle_changes = {};
            if (!updating_checked && dirty & 1) {
                updating_checked = true;
                notifytoggle_changes.checked = ctx2[0].notify;
                add_flush_callback((() => updating_checked = false));
            }
            notifytoggle.$set(notifytoggle_changes);
        },
        i(local) {
            if (current) return;
            transition_in(notifytoggle.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(notifytoggle.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div2);
            destroy_component(notifytoggle);
        }
    };
}

function create_fragment$e(ctx) {
    let watchitem;
    let updating_showEditBlock;
    let updating_isActive;
    let current;
    function watchitem_showEditBlock_binding(value) {
        ctx[27](value);
    }
    function watchitem_isActive_binding(value) {
        ctx[28](value);
    }
    let watchitem_props = {
        name: ctx[8] || ctx[2] ? ctx[8] : "click here to edit...",
        onActiveToggle: ctx[25],
        onDelete: ctx[15],
        onFetch: ctx[26],
        disabled: ctx[11] || !ctx[0].query || !!ctx[3],
        "data-testid": "search-inputs",
        errorMessage: ctx[10],
        $$slots: {
            toggles: [ create_toggles_slot$1 ],
            "posts-block": [ create_posts_block_slot$1 ],
            default: [ create_default_slot$7 ]
        },
        $$scope: {
            ctx: ctx
        }
    };
    if (ctx[2] !== void 0) watchitem_props.showEditBlock = ctx[2];
    if (ctx[9] !== void 0) watchitem_props.isActive = ctx[9];
    watchitem = new WatchItem({
        props: watchitem_props
    });
    binding_callbacks.push((() => bind(watchitem, "showEditBlock", watchitem_showEditBlock_binding)));
    binding_callbacks.push((() => bind(watchitem, "isActive", watchitem_isActive_binding)));
    return {
        c() {
            create_component(watchitem.$$.fragment);
        },
        m(target, anchor) {
            mount_component(watchitem, target, anchor);
            current = true;
        },
        p(ctx2, [dirty]) {
            const watchitem_changes = {};
            if (dirty & 260) watchitem_changes.name = ctx2[8] || ctx2[2] ? ctx2[8] : "click here to edit...";
            if (dirty & 2057) watchitem_changes.disabled = ctx2[11] || !ctx2[0].query || !!ctx2[3];
            if (dirty & 1024) watchitem_changes.errorMessage = ctx2[10];
            if (dirty & 1073743091) watchitem_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            if (!updating_showEditBlock && dirty & 4) {
                updating_showEditBlock = true;
                watchitem_changes.showEditBlock = ctx2[2];
                add_flush_callback((() => updating_showEditBlock = false));
            }
            if (!updating_isActive && dirty & 512) {
                updating_isActive = true;
                watchitem_changes.isActive = ctx2[9];
                add_flush_callback((() => updating_isActive = false));
            }
            watchitem.$set(watchitem_changes);
        },
        i(local) {
            if (current) return;
            transition_in(watchitem.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(watchitem.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            destroy_component(watchitem, detaching);
        }
    };
}

function instance$e($$self, $$props, $$invalidate) {
    let $isBlocked;
    component_subscribe($$self, isBlocked, ($$value => $$invalidate(11, $isBlocked = $$value)));
    let {queryObject: queryObject} = $$props;
    let {queryData: queryData} = $$props;
    let subredditInputRef;
    let isLoading = false;
    let showPosts = false;
    let saveMsg = "";
    let name = "";
    let isActive = !queryObject.disabled;
    let showEditBlock = !queryObject.query;
    let errorMessage = "";
    let subredditError = "";
    let fetchError = "";
    let {id: id} = queryObject;
    const ids = {
        name: `search_name_${id}`,
        subreddit: `search_subreddit_${id}`,
        query: `search_query_${id}`
    };
    const saveInputs = debounce$2((async () => {
        var _a, _b, _c;
        const _query = (_a = queryObject.query) === null || _a === void 0 ? void 0 : _a.trim();
        if (!_query) return;
        $$invalidate(17, fetchError = "");
        $$invalidate(3, subredditError = "");
        $$invalidate(6, showPosts = false);
        const _subreddit = (_b = queryObject.subreddit) === null || _b === void 0 ? void 0 : _b.trim().replace(/\s/g, "+");
        if (_subreddit && !testMultireddit(_subreddit)) {
            const msg = "Invalid subreddit name";
            subredditInputRef === null || subredditInputRef === void 0 ? void 0 : subredditInputRef.setCustomValidity(msg);
            $$invalidate(3, subredditError = msg);
            return;
        }
        subredditInputRef === null || subredditInputRef === void 0 ? void 0 : subredditInputRef.setCustomValidity("");
        await searchStore.saveQuery({
            ...queryObject,
            name: (_c = queryObject.name) === null || _c === void 0 ? void 0 : _c.trim(),
            subreddit: _subreddit,
            query: _query,
            disabled: !isActive
        });
        $$invalidate(7, saveMsg = "saved");
    }), 500);
    const inputHandler = () => {
        $$invalidate(7, saveMsg = "...");
        saveInputs();
    };
    const deleteHandler = () => {
        void searchStore.removeQuery(queryObject.id);
    };
    const fetchPosts = async () => {
        $$invalidate(5, isLoading = true);
        $$invalidate(6, showPosts = false);
        isBlocked.block();
        try {
            const app = new NotifierApp;
            app.reddit.fetchOpts = {
                cache: "default"
            };
            await app.updateQuery({
                query: queryObject,
                queryData: {
                    ...queryData,
                    lastPostCreated: 0,
                    posts: [],
                    error: null
                }
            });
        } catch (e) {
            $$invalidate(17, fetchError = e.message || "");
        }
        $$invalidate(5, isLoading = false);
        $$invalidate(6, showPosts = true);
    };
    const func = () => saveInputs();
    function notifytoggle_checked_binding(value) {
        if ($$self.$$.not_equal(queryObject.notify, value)) {
            queryObject.notify = value;
            $$invalidate(0, queryObject);
        }
    }
    const func_1 = () => {
        $$invalidate(6, showPosts = false);
    };
    function input0_input_handler() {
        queryObject.name = this.value;
        $$invalidate(0, queryObject);
    }
    function input1_input_handler() {
        queryObject.subreddit = this.value;
        $$invalidate(0, queryObject);
    }
    function input1_binding($$value) {
        binding_callbacks[$$value ? "unshift" : "push"]((() => {
            subredditInputRef = $$value;
            $$invalidate(4, subredditInputRef);
        }));
    }
    function input2_input_handler() {
        queryObject.query = this.value;
        $$invalidate(0, queryObject);
    }
    const func_2 = () => void saveInputs();
    const func_3 = () => void fetchPosts();
    function watchitem_showEditBlock_binding(value) {
        showEditBlock = value;
        $$invalidate(2, showEditBlock);
    }
    function watchitem_isActive_binding(value) {
        isActive = value;
        $$invalidate(9, isActive);
    }
    $$self.$$set = $$props2 => {
        if ("queryObject" in $$props2) $$invalidate(0, queryObject = $$props2.queryObject);
        if ("queryData" in $$props2) $$invalidate(1, queryData = $$props2.queryData);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 2) $$invalidate(17, fetchError = formatError(queryData.error));
        if ($$self.$$.dirty & 131080) $$invalidate(10, errorMessage = subredditError || fetchError);
        if ($$self.$$.dirty & 5) if (!queryObject.name && !queryObject.query && !showEditBlock) $$invalidate(8, name = "click here to edit..."); else $$invalidate(8, name = queryObject.name || queryObject.query || "");
        if ($$self.$$.dirty & 1) id = queryObject.id;
    };
    return [ queryObject, queryData, showEditBlock, subredditError, subredditInputRef, isLoading, showPosts, saveMsg, name, isActive, errorMessage, $isBlocked, ids, saveInputs, inputHandler, deleteHandler, fetchPosts, fetchError, func, notifytoggle_checked_binding, func_1, input0_input_handler, input1_input_handler, input1_binding, input2_input_handler, func_2, func_3, watchitem_showEditBlock_binding, watchitem_isActive_binding ];
}

class SearchFieldset extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$e, create_fragment$e, safe_not_equal, {
            queryObject: 0,
            queryData: 1
        });
    }
}

function get_each_context$7(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[4] = list[i];
    child_ctx[5] = list;
    child_ctx[6] = i;
    return child_ctx;
}

function create_default_slot_1$3(ctx) {
    let html_tag;
    let raw_value = getMsg("optionSearchDescription") + "";
    let html_anchor;
    return {
        c() {
            html_tag = new HtmlTag(false);
            html_anchor = empty();
            html_tag.a = html_anchor;
        },
        m(target, anchor) {
            html_tag.m(raw_value, target, anchor);
            insert(target, html_anchor, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) {
                detach(html_anchor);
                html_tag.d();
            }
        }
    };
}

function create_each_block$7(key_1, ctx) {
    let div2;
    let searchfieldset;
    let updating_queryObject;
    let t;
    let div_transition;
    let current;
    function searchfieldset_queryObject_binding(value) {
        ctx[2](value, ctx[4], ctx[5], ctx[6]);
    }
    let searchfieldset_props = {
        queryData: ctx[1].queries[ctx[4].id] || {}
    };
    if (ctx[4] !== void 0) searchfieldset_props.queryObject = ctx[4];
    searchfieldset = new SearchFieldset({
        props: searchfieldset_props
    });
    binding_callbacks.push((() => bind(searchfieldset, "queryObject", searchfieldset_queryObject_binding)));
    return {
        key: key_1,
        first: null,
        c() {
            div2 = element("div");
            create_component(searchfieldset.$$.fragment);
            t = space();
            attr(div2, "class", "mb-2");
            this.first = div2;
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            mount_component(searchfieldset, div2, null);
            append(div2, t);
            current = true;
        },
        p(new_ctx, dirty) {
            ctx = new_ctx;
            const searchfieldset_changes = {};
            if (dirty & 3) searchfieldset_changes.queryData = ctx[1].queries[ctx[4].id] || {};
            if (!updating_queryObject && dirty & 1) {
                updating_queryObject = true;
                searchfieldset_changes.queryObject = ctx[4];
                add_flush_callback((() => updating_queryObject = false));
            }
            searchfieldset.$set(searchfieldset_changes);
        },
        i(local) {
            if (current) return;
            transition_in(searchfieldset.$$.fragment, local);
            if (local) add_render_callback((() => {
                if (!current) return;
                if (!div_transition) div_transition = create_bidirectional_transition(div2, fade, {
                    duration: 200,
                    easing: quadOut
                }, true);
                div_transition.run(1);
            }));
            current = true;
        },
        o(local) {
            transition_out(searchfieldset.$$.fragment, local);
            if (local) {
                if (!div_transition) div_transition = create_bidirectional_transition(div2, fade, {
                    duration: 200,
                    easing: quadOut
                }, false);
                div_transition.run(0);
            }
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div2);
            destroy_component(searchfieldset);
            if (detaching && div_transition) div_transition.end();
        }
    };
}

function create_default_slot$6(ctx) {
    let t_value = getMsg("optionsSearchAddNew") + "";
    let t;
    return {
        c() {
            t = text(t_value);
        },
        m(target, anchor) {
            insert(target, t, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(t);
        }
    };
}

function create_fragment$d(ctx) {
    let div8;
    let blockdescription;
    let t0;
    let div7;
    let div0;
    let t2;
    let div2;
    let div1;
    let t3;
    let span;
    let t5;
    let div3;
    let t7;
    let div4;
    let t8;
    let div5;
    let t9;
    let div6;
    let t10;
    let each_blocks = [];
    let each_1_lookup = new Map;
    let t11;
    let addbutton;
    let current;
    blockdescription = new BlockDescription({
        props: {
            $$slots: {
                default: [ create_default_slot_1$3 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    let each_value = ensure_array_like(ctx[0]);
    const get_key = ctx2 => ctx2[4].id;
    for (let i = 0; i < each_value.length; i += 1) {
        let child_ctx = get_each_context$7(ctx, each_value, i);
        let key = get_key(child_ctx);
        each_1_lookup.set(key, each_blocks[i] = create_each_block$7(key, child_ctx));
    }
    addbutton = new AddButton({
        props: {
            clickHandler: ctx[3],
            $$slots: {
                default: [ create_default_slot$6 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    return {
        c() {
            div8 = element("div");
            create_component(blockdescription.$$.fragment);
            t0 = space();
            div7 = element("div");
            div0 = element("div");
            div0.textContent = `${getMsg("optionWatchInputNameColumn")}`;
            t2 = space();
            div2 = element("div");
            div1 = element("div");
            t3 = space();
            span = element("span");
            span.textContent = `${getMsg("optionsSubredditFetch")}`;
            t5 = space();
            div3 = element("div");
            div3.textContent = `${getMsg("optionWatchInputActiveColumn")}`;
            t7 = space();
            div4 = element("div");
            t8 = space();
            div5 = element("div");
            t9 = space();
            div6 = element("div");
            t10 = space();
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            t11 = space();
            create_component(addbutton.$$.fragment);
            attr(div0, "class", "px-2 font-medium");
            attr(div1, "class", "mr-1 h-5 w-5");
            attr(div2, "class", "invisible flex font-normal");
            attr(div3, "class", "w-12 text-center font-medium");
            attr(div4, "class", "w-48");
            attr(div5, "class", "w-14");
            attr(div6, "class", "w-8");
            attr(div7, "class", "watch-item-grid");
            toggle_class(div7, "hidden", ctx[0].length === 0);
        },
        m(target, anchor) {
            insert(target, div8, anchor);
            mount_component(blockdescription, div8, null);
            append(div8, t0);
            append(div8, div7);
            append(div7, div0);
            append(div7, t2);
            append(div7, div2);
            append(div2, div1);
            div1.innerHTML = RefreshIcon2;
            append(div2, t3);
            append(div2, span);
            append(div7, t5);
            append(div7, div3);
            append(div7, t7);
            append(div7, div4);
            append(div7, t8);
            append(div7, div5);
            append(div7, t9);
            append(div7, div6);
            append(div8, t10);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(div8, null);
            insert(target, t11, anchor);
            mount_component(addbutton, target, anchor);
            current = true;
        },
        p(ctx2, [dirty]) {
            const blockdescription_changes = {};
            if (dirty & 128) blockdescription_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            blockdescription.$set(blockdescription_changes);
            if (!current || dirty & 1) toggle_class(div7, "hidden", ctx2[0].length === 0);
            if (dirty & 3) {
                each_value = ensure_array_like(ctx2[0]);
                group_outros();
                each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div8, outro_and_destroy_block, create_each_block$7, null, get_each_context$7);
                check_outros();
            }
            const addbutton_changes = {};
            if (dirty & 128) addbutton_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            addbutton.$set(addbutton_changes);
        },
        i(local) {
            if (current) return;
            transition_in(blockdescription.$$.fragment, local);
            for (let i = 0; i < each_value.length; i += 1) transition_in(each_blocks[i]);
            transition_in(addbutton.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(blockdescription.$$.fragment, local);
            for (let i = 0; i < each_blocks.length; i += 1) transition_out(each_blocks[i]);
            transition_out(addbutton.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) {
                detach(div8);
                detach(t11);
            }
            destroy_component(blockdescription);
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].d();
            destroy_component(addbutton, detaching);
        }
    };
}

function instance$d($$self, $$props, $$invalidate) {
    let $searchStore;
    let $storageData;
    component_subscribe($$self, searchStore, ($$value => $$invalidate(0, $searchStore = $$value)));
    component_subscribe($$self, storageData, ($$value => $$invalidate(1, $storageData = $$value)));
    function searchfieldset_queryObject_binding(value, queryObject, each_value, queryObject_index) {
        each_value[queryObject_index] = value;
        searchStore.set($searchStore);
    }
    const func = () => searchStore.addQuery();
    return [ $searchStore, $storageData, searchfieldset_queryObject_binding, func ];
}

class SearchBlock extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$d, create_fragment$d, safe_not_equal, {});
    }
}

const genEmpty = () => ({
    id: generateId(),
    subreddit: ""
});

function createStore() {
    const {set: set, subscribe: subscribe, update: update} = writable([], (() => {
        void storage.getSubredditList().then((list => {
            set((list == null ? void 0 : list.length) ? list : []);
        }));
    }));
    async function saveOptions(subOpts, clearData) {
        update((prev => prev.map((opts => opts.id === subOpts.id ? subOpts : opts))));
        await storage.saveSubredditOpts(subOpts);
        if (clearData) await storage.removePostsFrom({
            subredditId: subOpts.id,
            clearTS: true
        });
    }
    async function deleteSubreddit(id) {
        await storage.removeSubreddits([ id ]);
        update((prev => prev.filter((s => s.id !== id))));
    }
    return {
        set: set,
        subscribe: subscribe,
        update: update,
        addSubreddit: () => update((prev => [ ...prev, genEmpty() ])),
        saveOptions: saveOptions,
        deleteSubreddit: deleteSubreddit
    };
}

const subredditStore = createStore();

const inputStatusStore = writable({});

function get_each_context$6(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[17] = list[i];
    child_ctx[18] = list;
    child_ctx[19] = i;
    return child_ctx;
}

function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[20] = list[i];
    return child_ctx;
}

function create_each_block_1(ctx) {
    let option;
    let t_value = ctx[6][ctx[20]] + "";
    let t;
    let option_value_value;
    return {
        c() {
            option = element("option");
            t = text(t_value);
            option.__value = option_value_value = ctx[20];
            set_input_value(option, option.__value);
        },
        m(target, anchor) {
            insert(target, option, anchor);
            append(option, t);
        },
        p(ctx2, dirty) {
            if (dirty & 17 && t_value !== (t_value = ctx2[6][ctx2[20]] + "")) set_data(t, t_value);
            if (dirty & 17 && option_value_value !== (option_value_value = ctx2[20])) {
                option.__value = option_value_value;
                set_input_value(option, option.__value);
            }
        },
        d(detaching) {
            if (detaching) detach(option);
        }
    };
}

function create_if_block$a(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            div2.textContent = "AND";
            attr(div2, "class", "rounded px-1 py-px text-center font-mono text-skin-gray ring-1 ring-skin-delimiter");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_each_block$6(ctx) {
    let select;
    let t0;
    let div0;
    let t1_value = ctx[7](ctx[17].field) + "";
    let t1;
    let t2;
    let input;
    let t3;
    let button;
    let div1;
    let t4;
    let div2;
    let t5;
    let mounted;
    let dispose;
    let each_value_1 = ensure_array_like([ ctx[17].field, ...ctx[4] ]);
    let each_blocks = [];
    for (let i = 0; i < each_value_1.length; i += 1) each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    function select_change_handler() {
        ctx[12].call(select, ctx[18], ctx[19]);
    }
    function input_input_handler() {
        ctx[13].call(input, ctx[18], ctx[19]);
    }
    function click_handler() {
        return ctx[14](ctx[17]);
    }
    let if_block = ctx[19] < ctx[0].length - 1 && create_if_block$a();
    return {
        c() {
            select = element("select");
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            t0 = space();
            div0 = element("div");
            t1 = text(t1_value);
            t2 = space();
            input = element("input");
            t3 = space();
            button = element("button");
            div1 = element("div");
            t4 = space();
            div2 = element("div");
            if (if_block) if_block.c();
            t5 = space();
            attr(select, "class", "rounded border-none bg-transparent hover:bg-skin-input hover:shadow-none focus:bg-skin-input");
            attr(select, "name", `field_${ctx[19]}`);
            if (ctx[17].field === void 0) add_render_callback(select_change_handler);
            attr(div0, "class", "mx-2");
            attr(input, "class", "w-full rounded");
            attr(input, "type", "text");
            attr(div1, "class", "w-4");
            attr(button, "class", "border-none bg-transparent px-1 py-0 text-skin-gray hover:bg-transparent hover:text-skin-accent hover:shadow-none");
            attr(div2, "class", "pl-3");
        },
        m(target, anchor) {
            insert(target, select, anchor);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(select, null);
            select_option(select, ctx[17].field, true);
            insert(target, t0, anchor);
            insert(target, div0, anchor);
            append(div0, t1);
            insert(target, t2, anchor);
            insert(target, input, anchor);
            set_input_value(input, ctx[17].query);
            insert(target, t3, anchor);
            insert(target, button, anchor);
            append(button, div1);
            div1.innerHTML = XCircleIcon;
            insert(target, t4, anchor);
            insert(target, div2, anchor);
            if (if_block) if_block.m(div2, null);
            append(div2, t5);
            if (!mounted) {
                dispose = [ listen(select, "change", select_change_handler), listen(select, "change", (function() {
                    if (is_function(ctx[1])) ctx[1].apply(this, arguments);
                })), listen(input, "input", input_input_handler), listen(input, "input", ctx[5]), listen(button, "click", click_handler) ];
                mounted = true;
            }
        },
        p(new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & 81) {
                each_value_1 = ensure_array_like([ ctx[17].field, ...ctx[4] ]);
                let i;
                for (i = 0; i < each_value_1.length; i += 1) {
                    const child_ctx = get_each_context_1(ctx, each_value_1, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty); else {
                        each_blocks[i] = create_each_block_1(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(select, null);
                    }
                }
                for (;i < each_blocks.length; i += 1) each_blocks[i].d(1);
                each_blocks.length = each_value_1.length;
            }
            if (dirty & 17) select_option(select, ctx[17].field);
            if (dirty & 1 && t1_value !== (t1_value = ctx[7](ctx[17].field) + "")) set_data(t1, t1_value);
            if (dirty & 17 && input.value !== ctx[17].query) set_input_value(input, ctx[17].query);
            if (ctx[19] < ctx[0].length - 1) if (if_block) ; else {
                if_block = create_if_block$a();
                if_block.c();
                if_block.m(div2, t5);
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        d(detaching) {
            if (detaching) {
                detach(select);
                detach(t0);
                detach(div0);
                detach(t2);
                detach(input);
                detach(t3);
                detach(button);
                detach(t4);
                detach(div2);
            }
            destroy_each(each_blocks, detaching);
            if (if_block) if_block.d();
            mounted = false;
            run_all(dispose);
        }
    };
}

function create_fragment$c(ctx) {
    let fieldset;
    let legend;
    let t0;
    let t1_value = (ctx[3] + 1 || "") + "";
    let t1;
    let t2;
    let div0;
    let t3;
    let div3;
    let button0;
    let t5;
    let button1;
    let div1;
    let t6;
    let div2;
    let mounted;
    let dispose;
    let each_value = ensure_array_like(ctx[0]);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) each_blocks[i] = create_each_block$6(get_each_context$6(ctx, each_value, i));
    return {
        c() {
            fieldset = element("fieldset");
            legend = element("legend");
            t0 = text("Filter rule ");
            t1 = text(t1_value);
            t2 = space();
            div0 = element("div");
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            t3 = space();
            div3 = element("div");
            button0 = element("button");
            button0.textContent = "+ add field";
            t5 = space();
            button1 = element("button");
            div1 = element("div");
            t6 = space();
            div2 = element("div");
            div2.textContent = "remove filter";
            attr(legend, "class", "font-mono text-xs");
            attr(div0, "class", "field-grid svelte-1m5yvok");
            attr(button0, "class", "standard-button rounded border-transparent bg-transparent px-1 py-0 hover:border-skin-accent2");
            attr(div1, "class", "mr-1 h-4 w-4");
            attr(button1, "class", "standard-button flex items-center rounded border-transparent bg-transparent p-0 px-1 hover:border-skin-accent hover:text-skin-accent");
            attr(button1, "title", "Delete filter");
            attr(div3, "class", "mt-3 flex justify-between");
            attr(fieldset, "class", "rounded border border-skin-delimiter p-3 text-sm shadow-md");
        },
        m(target, anchor) {
            insert(target, fieldset, anchor);
            append(fieldset, legend);
            append(legend, t0);
            append(legend, t1);
            append(fieldset, t2);
            append(fieldset, div0);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(div0, null);
            append(fieldset, t3);
            append(fieldset, div3);
            append(div3, button0);
            append(div3, t5);
            append(div3, button1);
            append(button1, div1);
            div1.innerHTML = DeleteIcon;
            append(button1, t6);
            append(button1, div2);
            if (!mounted) {
                dispose = [ listen(button0, "click", ctx[8]), listen(button1, "click", (function() {
                    if (is_function(ctx[2])) ctx[2].apply(this, arguments);
                })) ];
                mounted = true;
            }
        },
        p(new_ctx, [dirty]) {
            ctx = new_ctx;
            if (dirty & 8 && t1_value !== (t1_value = (ctx[3] + 1 || "") + "")) set_data(t1, t1_value);
            if (dirty & 755) {
                each_value = ensure_array_like(ctx[0]);
                let i;
                for (i = 0; i < each_value.length; i += 1) {
                    const child_ctx = get_each_context$6(ctx, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty); else {
                        each_blocks[i] = create_each_block$6(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(div0, null);
                    }
                }
                for (;i < each_blocks.length; i += 1) each_blocks[i].d(1);
                each_blocks.length = each_value.length;
            }
        },
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(fieldset);
            destroy_each(each_blocks, detaching);
            mounted = false;
            run_all(dispose);
        }
    };
}

function instance$c($$self, $$props, $$invalidate) {
    let $inputStatusStore;
    component_subscribe($$self, inputStatusStore, ($$value => $$invalidate(15, $inputStatusStore = $$value)));
    let {filterRule: filterRule} = $$props;
    let {commitChanges: commitChanges} = $$props;
    let {removeFilter: removeFilter} = $$props;
    let {subId: subId} = $$props;
    let {index: index} = $$props;
    const debounced = debounce$2(commitChanges, 700);
    const debouncedHandler = () => {
        set_store_value(inputStatusStore, $inputStatusStore[subId] = {
            typing: true
        }, $inputStatusStore);
        debounced();
    };
    let usedFields = [];
    let unUsedFields = [];
    const fieldNames = {
        author: "author",
        selftext: "selftext",
        link_flair_text: "flair",
        title: "title"
    };
    const matchType = field => {
        if (field === "author") return "is";
        return "has the words";
    };
    const addField = () => {
        if (unUsedFields.length) {
            $$invalidate(0, filterRule = [ ...filterRule, {
                field: unUsedFields[0],
                query: ""
            } ]);
            commitChanges();
        }
    };
    const removeField = field => {
        if (filterRule.length > 1) $$invalidate(0, filterRule = filterRule.filter((g => g.field !== field))); else $$invalidate(0, filterRule = filterRule.map((g => g.field === field ? {
            ...g,
            query: ""
        } : g)));
        commitChanges();
    };
    function select_change_handler(each_value, idx) {
        each_value[idx].field = select_value(this);
        $$invalidate(0, filterRule);
        $$invalidate(4, unUsedFields), $$invalidate(11, usedFields), $$invalidate(0, filterRule);
    }
    function input_input_handler(each_value, idx) {
        each_value[idx].query = this.value;
        $$invalidate(0, filterRule);
        $$invalidate(4, unUsedFields), $$invalidate(11, usedFields), $$invalidate(0, filterRule);
    }
    const click_handler = searchRule => removeField(searchRule.field);
    $$self.$$set = $$props2 => {
        if ("filterRule" in $$props2) $$invalidate(0, filterRule = $$props2.filterRule);
        if ("commitChanges" in $$props2) $$invalidate(1, commitChanges = $$props2.commitChanges);
        if ("removeFilter" in $$props2) $$invalidate(2, removeFilter = $$props2.removeFilter);
        if ("subId" in $$props2) $$invalidate(10, subId = $$props2.subId);
        if ("index" in $$props2) $$invalidate(3, index = $$props2.index);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 1) $$invalidate(11, usedFields = filterRule.map((r => r.field)));
        if ($$self.$$.dirty & 2048) $$invalidate(4, unUsedFields = allFields.filter((f => !usedFields.includes(f))));
    };
    return [ filterRule, commitChanges, removeFilter, index, unUsedFields, debouncedHandler, fieldNames, matchType, addField, removeField, subId, usedFields, select_change_handler, input_input_handler, click_handler ];
}

class PostFilterFields extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$c, create_fragment$c, safe_not_equal, {
            filterRule: 0,
            commitChanges: 1,
            removeFilter: 2,
            subId: 10,
            index: 3
        });
    }
}

function get_each_context$5(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[8] = list[i];
    child_ctx[9] = list;
    child_ctx[10] = i;
    return child_ctx;
}

function create_if_block$9(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            div2.textContent = "OR";
            attr(div2, "class", "py-1 font-mono text-sm");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_each_block$5(ctx) {
    let div2;
    let postfilterfields;
    let updating_filterRule;
    let t;
    let if_block_anchor;
    let current;
    function func() {
        return ctx[6](ctx[10]);
    }
    function postfilterfields_filterRule_binding(value) {
        ctx[7](value, ctx[8], ctx[9], ctx[10]);
    }
    let postfilterfields_props = {
        removeFilter: func,
        commitChanges: ctx[2],
        subId: ctx[1],
        index: ctx[10]
    };
    if (ctx[8] !== void 0) postfilterfields_props.filterRule = ctx[8];
    postfilterfields = new PostFilterFields({
        props: postfilterfields_props
    });
    binding_callbacks.push((() => bind(postfilterfields, "filterRule", postfilterfields_filterRule_binding)));
    let if_block = ctx[0].length - 1 !== ctx[10] && create_if_block$9();
    return {
        c() {
            div2 = element("div");
            create_component(postfilterfields.$$.fragment);
            t = space();
            if (if_block) if_block.c();
            if_block_anchor = empty();
            attr(div2, "class", "connected-block");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            mount_component(postfilterfields, div2, null);
            insert(target, t, anchor);
            if (if_block) if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
            current = true;
        },
        p(new_ctx, dirty) {
            ctx = new_ctx;
            const postfilterfields_changes = {};
            if (dirty & 2) postfilterfields_changes.subId = ctx[1];
            if (!updating_filterRule && dirty & 1) {
                updating_filterRule = true;
                postfilterfields_changes.filterRule = ctx[8];
                add_flush_callback((() => updating_filterRule = false));
            }
            postfilterfields.$set(postfilterfields_changes);
            if (ctx[0].length - 1 !== ctx[10]) if (if_block) ; else {
                if_block = create_if_block$9();
                if_block.c();
                if_block.m(if_block_anchor.parentNode, if_block_anchor);
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        i(local) {
            if (current) return;
            transition_in(postfilterfields.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(postfilterfields.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) {
                detach(div2);
                detach(t);
                detach(if_block_anchor);
            }
            destroy_component(postfilterfields);
            if (if_block) if_block.d(detaching);
        }
    };
}

function create_default_slot$5(ctx) {
    let t;
    return {
        c() {
            t = text("add filter rule");
        },
        m(target, anchor) {
            insert(target, t, anchor);
        },
        d(detaching) {
            if (detaching) detach(t);
        }
    };
}

function create_fragment$b(ctx) {
    let div5;
    let div3;
    let div0;
    let t1;
    let div2;
    let span0;
    let t3;
    let span1;
    let t4;
    let div1;
    let t5;
    let div4;
    let t6;
    let addbutton;
    let div5_transition;
    let current;
    let mounted;
    let dispose;
    let each_value = ensure_array_like(ctx[0]);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
    const out = i => transition_out(each_blocks[i], 1, 1, (() => {
        each_blocks[i] = null;
    }));
    addbutton = new AddButton({
        props: {
            clickHandler: ctx[3],
            $$slots: {
                default: [ create_default_slot$5 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    return {
        c() {
            div5 = element("div");
            div3 = element("div");
            div0 = element("div");
            div0.textContent = "Post filters";
            t1 = space();
            div2 = element("div");
            span0 = element("span");
            span0.textContent = "Check if the subreddit's posts fit at least one of the rules below. Filter words in the title and post's\n                text fields are case-insensitive and can be stemmed (dogs = dog).";
            t3 = space();
            span1 = element("span");
            t4 = text("Filters vs Reddit Search\n                ");
            div1 = element("div");
            t5 = space();
            div4 = element("div");
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            t6 = space();
            create_component(addbutton.$$.fragment);
            attr(div0, "class", "text-sm font-medium");
            attr(div1, "class", "h-4 w-4");
            attr(span1, "class", "inline-flex items-center gap-1 text-skin-accent2");
            attr(div2, "class", "text-sm");
            attr(div3, "class", "ml-6");
            attr(div4, "class", "flex flex-col");
            attr(div5, "class", "w-full space-y-2");
        },
        m(target, anchor) {
            insert(target, div5, anchor);
            append(div5, div3);
            append(div3, div0);
            append(div3, t1);
            append(div3, div2);
            append(div2, span0);
            append(div2, t3);
            append(div2, span1);
            append(span1, t4);
            append(span1, div1);
            div1.innerHTML = HelpCircleIcon;
            append(div5, t5);
            append(div5, div4);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(div4, null);
            append(div5, t6);
            mount_component(addbutton, div5, null);
            current = true;
            if (!mounted) {
                dispose = action_destroyer(tooltip.call(null, span1, {
                    content: getMsg("helpFiltersVsSearch"),
                    allowHTML: true
                }));
                mounted = true;
            }
        },
        p(ctx2, [dirty]) {
            if (dirty & 23) {
                each_value = ensure_array_like(ctx2[0]);
                let i;
                for (i = 0; i < each_value.length; i += 1) {
                    const child_ctx = get_each_context$5(ctx2, each_value, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                        transition_in(each_blocks[i], 1);
                    } else {
                        each_blocks[i] = create_each_block$5(child_ctx);
                        each_blocks[i].c();
                        transition_in(each_blocks[i], 1);
                        each_blocks[i].m(div4, null);
                    }
                }
                group_outros();
                for (i = each_value.length; i < each_blocks.length; i += 1) out(i);
                check_outros();
            }
            const addbutton_changes = {};
            if (dirty & 2048) addbutton_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            addbutton.$set(addbutton_changes);
        },
        i(local) {
            if (current) return;
            for (let i = 0; i < each_value.length; i += 1) transition_in(each_blocks[i]);
            transition_in(addbutton.$$.fragment, local);
            if (local) add_render_callback((() => {
                if (!current) return;
                if (!div5_transition) div5_transition = create_bidirectional_transition(div5, slide, {
                    duration: 150,
                    easing: quadOut
                }, true);
                div5_transition.run(1);
            }));
            current = true;
        },
        o(local) {
            each_blocks = each_blocks.filter(Boolean);
            for (let i = 0; i < each_blocks.length; i += 1) transition_out(each_blocks[i]);
            transition_out(addbutton.$$.fragment, local);
            if (local) {
                if (!div5_transition) div5_transition = create_bidirectional_transition(div5, slide, {
                    duration: 150,
                    easing: quadOut
                }, false);
                div5_transition.run(0);
            }
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div5);
            destroy_each(each_blocks, detaching);
            destroy_component(addbutton);
            if (detaching && div5_transition) div5_transition.end();
            mounted = false;
            dispose();
        }
    };
}

function instance$b($$self, $$props, $$invalidate) {
    let {ruleList: ruleList = []} = $$props;
    let {saveInputs: saveInputs} = $$props;
    let {subId: subId} = $$props;
    const commitChanges = () => {
        saveInputs({
            rules: ruleList
        });
    };
    const addRule = () => {
        $$invalidate(0, ruleList = [ ...ruleList, [ {
            field: "title",
            query: ""
        } ] ]);
    };
    const removeRule = index => {
        $$invalidate(0, ruleList = ruleList.filter(((_, i) => i !== index)));
        commitChanges();
    };
    const func = index => removeRule(index);
    function postfilterfields_filterRule_binding(value, filterRule, each_value, index) {
        each_value[index] = value;
        $$invalidate(0, ruleList);
    }
    $$self.$$set = $$props2 => {
        if ("ruleList" in $$props2) $$invalidate(0, ruleList = $$props2.ruleList);
        if ("saveInputs" in $$props2) $$invalidate(5, saveInputs = $$props2.saveInputs);
        if ("subId" in $$props2) $$invalidate(1, subId = $$props2.subId);
    };
    return [ ruleList, subId, commitChanges, addRule, removeRule, saveInputs, func, postfilterfields_filterRule_binding ];
}

class PostFilterBlock extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$b, create_fragment$b, safe_not_equal, {
            ruleList: 0,
            saveInputs: 5,
            subId: 1
        });
    }
}

function create_if_block_3$1(ctx) {
    let div2;
    let div0;
    let raw_value = WarningIcon + "";
    let t0;
    let div1;
    let t1;
    return {
        c() {
            div2 = element("div");
            div0 = element("div");
            t0 = space();
            div1 = element("div");
            t1 = text(ctx[10]);
            attr(div0, "class", "mr-1 h-4 w-4 flex-shrink-0 text-skin-error");
            attr(div2, "class", "flex items-center font-bold text-skin-error");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, div0);
            div0.innerHTML = raw_value;
            append(div2, t0);
            append(div2, div1);
            append(div1, t1);
        },
        p(ctx2, dirty) {
            if (dirty[0] & 1024) set_data(t1, ctx2[10]);
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_else_block_1(ctx) {
    let span;
    let t0_value = ctx[2].typing ? "..." : "";
    let t0;
    let t1;
    return {
        c() {
            span = element("span");
            t0 = text(t0_value);
            t1 = text("  ");
        },
        m(target, anchor) {
            insert(target, span, anchor);
            append(span, t0);
            append(span, t1);
        },
        p(ctx2, dirty) {
            if (dirty[0] & 4 && t0_value !== (t0_value = ctx2[2].typing ? "..." : "")) set_data(t0, t0_value);
        },
        d(detaching) {
            if (detaching) detach(span);
        }
    };
}

function create_if_block_2$1(ctx) {
    let div1;
    let div0;
    let raw_value = SaveIcon + "";
    let t0;
    let span;
    return {
        c() {
            div1 = element("div");
            div0 = element("div");
            t0 = space();
            span = element("span");
            span.textContent = `${getMsg("savedLabel")}`;
            attr(div0, "class", "mr-1 h-4 w-4 flex-shrink-0");
            attr(div1, "class", "flex items-center");
        },
        m(target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            div0.innerHTML = raw_value;
            append(div1, t0);
            append(div1, span);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div1);
        }
    };
}

function create_default_slot$4(ctx) {
    let div6;
    let div5;
    let div1;
    let t0;
    let div0;
    let t1;
    let div4;
    let label0;
    let t2_value = getMsg("optionSubredditsInputNameLabel") + "";
    let t2;
    let label0_for_value;
    let t3;
    let div2;
    let input0;
    let input0_id_value;
    let t4;
    let tooltipicon0;
    let t5;
    let label1;
    let t6_value = getMsg("optionSubredditsInputLabel") + "";
    let t6;
    let label1_for_value;
    let t7;
    let div3;
    let input1;
    let input1_id_value;
    let t8;
    let tooltipicon1;
    let t9;
    let postfilterblock;
    let current;
    let mounted;
    let dispose;
    let if_block0 = ctx[10] && create_if_block_3$1(ctx);
    function select_block_type_1(ctx2, dirty) {
        if (ctx2[2].saved) return create_if_block_2$1;
        return create_else_block_1;
    }
    let current_block_type = select_block_type_1(ctx);
    let if_block1 = current_block_type(ctx);
    tooltipicon0 = new TooltipIcon({
        props: {
            message: getMsg("optionSubredditsInputName_title")
        }
    });
    tooltipicon1 = new TooltipIcon({
        props: {
            message: getMsg("optionSubredditsInput_title")
        }
    });
    postfilterblock = new PostFilterBlock({
        props: {
            ruleList: ctx[5],
            saveInputs: ctx[14],
            subId: ctx[0].id
        }
    });
    return {
        c() {
            div6 = element("div");
            div5 = element("div");
            div1 = element("div");
            if (if_block0) if_block0.c();
            t0 = space();
            div0 = element("div");
            if_block1.c();
            t1 = space();
            div4 = element("div");
            label0 = element("label");
            t2 = text(t2_value);
            t3 = space();
            div2 = element("div");
            input0 = element("input");
            t4 = space();
            create_component(tooltipicon0.$$.fragment);
            t5 = space();
            label1 = element("label");
            t6 = text(t6_value);
            t7 = space();
            div3 = element("div");
            input1 = element("input");
            t8 = space();
            create_component(tooltipicon1.$$.fragment);
            t9 = space();
            create_component(postfilterblock.$$.fragment);
            attr(div0, "class", "mr-4 min-h-[1rem] font-medium text-skin-success");
            attr(div1, "class", "mb-3 flex justify-between rounded-b text-xs");
            attr(label0, "for", label0_for_value = `name_${ctx[0].id}`);
            attr(input0, "id", input0_id_value = `name_${ctx[0].id}`);
            attr(input0, "class", "w-full max-w-[20rem] rounded border border-skin-base");
            attr(input0, "type", "text");
            attr(input0, "aria-label", getMsg("optionSubredditsInputName_title"));
            attr(input0, "placeholder", getMsg("optionSubredditsInputName_placeholder"));
            attr(div2, "class", "flex items-center gap-2");
            attr(label1, "class", "font-bold");
            attr(label1, "for", label1_for_value = `subreddit_${ctx[0].id}`);
            attr(input1, "id", input1_id_value = `subreddit_${ctx[0].id}`);
            attr(input1, "class", "w-full max-w-[20rem] rounded border border-skin-base svelte-mr89h7");
            attr(input1, "type", "text");
            attr(input1, "aria-label", getMsg("optionSubredditsInput_title"));
            attr(input1, "placeholder", getMsg("optionSubredditsInput_placeholder"));
            toggle_class(input1, "error", ctx[10]);
            attr(div3, "class", "flex items-center gap-2");
            attr(div4, "class", "mb-4 grid grid-cols-[auto,1fr] items-center gap-2 text-sm");
            attr(div5, "class", "col-span-full m-2 pb-2");
        },
        m(target, anchor) {
            insert(target, div6, anchor);
            append(div6, div5);
            append(div5, div1);
            if (if_block0) if_block0.m(div1, null);
            append(div1, t0);
            append(div1, div0);
            if_block1.m(div0, null);
            append(div5, t1);
            append(div5, div4);
            append(div4, label0);
            append(label0, t2);
            append(div4, t3);
            append(div4, div2);
            append(div2, input0);
            set_input_value(input0, ctx[0].name);
            append(div2, t4);
            mount_component(tooltipicon0, div2, null);
            append(div4, t5);
            append(div4, label1);
            append(label1, t6);
            append(div4, t7);
            append(div4, div3);
            append(div3, input1);
            ctx[23](input1);
            set_input_value(input1, ctx[0].subreddit);
            append(div3, t8);
            mount_component(tooltipicon1, div3, null);
            append(div5, t9);
            mount_component(postfilterblock, div5, null);
            current = true;
            if (!mounted) {
                dispose = [ listen(input0, "input", ctx[22]), listen(input0, "input", ctx[15]), listen(input1, "input", ctx[24]), listen(input1, "input", ctx[15]) ];
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            if (ctx2[10]) if (if_block0) if_block0.p(ctx2, dirty); else {
                if_block0 = create_if_block_3$1(ctx2);
                if_block0.c();
                if_block0.m(div1, t0);
            } else if (if_block0) {
                if_block0.d(1);
                if_block0 = null;
            }
            if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block1) if_block1.p(ctx2, dirty); else {
                if_block1.d(1);
                if_block1 = current_block_type(ctx2);
                if (if_block1) {
                    if_block1.c();
                    if_block1.m(div0, null);
                }
            }
            if (!current || dirty[0] & 1 && label0_for_value !== (label0_for_value = `name_${ctx2[0].id}`)) attr(label0, "for", label0_for_value);
            if (!current || dirty[0] & 1 && input0_id_value !== (input0_id_value = `name_${ctx2[0].id}`)) attr(input0, "id", input0_id_value);
            if (dirty[0] & 1 && input0.value !== ctx2[0].name) set_input_value(input0, ctx2[0].name);
            if (!current || dirty[0] & 1 && label1_for_value !== (label1_for_value = `subreddit_${ctx2[0].id}`)) attr(label1, "for", label1_for_value);
            if (!current || dirty[0] & 1 && input1_id_value !== (input1_id_value = `subreddit_${ctx2[0].id}`)) attr(input1, "id", input1_id_value);
            if (dirty[0] & 1 && input1.value !== ctx2[0].subreddit) set_input_value(input1, ctx2[0].subreddit);
            if (!current || dirty[0] & 1024) toggle_class(input1, "error", ctx2[10]);
            const postfilterblock_changes = {};
            if (dirty[0] & 32) postfilterblock_changes.ruleList = ctx2[5];
            if (dirty[0] & 1) postfilterblock_changes.subId = ctx2[0].id;
            postfilterblock.$set(postfilterblock_changes);
        },
        i(local) {
            if (current) return;
            transition_in(tooltipicon0.$$.fragment, local);
            transition_in(tooltipicon1.$$.fragment, local);
            transition_in(postfilterblock.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(tooltipicon0.$$.fragment, local);
            transition_out(tooltipicon1.$$.fragment, local);
            transition_out(postfilterblock.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div6);
            if (if_block0) if_block0.d();
            if_block1.d();
            destroy_component(tooltipicon0);
            ctx[23](null);
            destroy_component(tooltipicon1);
            destroy_component(postfilterblock);
            mounted = false;
            run_all(dispose);
        }
    };
}

function create_if_block_1$2(ctx) {
    var _a;
    let div2;
    let reddititemslist;
    let current;
    reddititemslist = new RedditItemsList({
        props: {
            title: `The latest posts in the subreddit. ${((_a = ctx[0].filterOpts) == null ? void 0 : _a.enabled) ? "With filters." : "Without filters."}`,
            items: ctx[1].posts || [],
            limit: 10,
            onClose: ctx[21]
        }
    });
    return {
        c() {
            div2 = element("div");
            create_component(reddititemslist.$$.fragment);
            attr(div2, "class", "col-span-full mt-2 border border-skin-delimiter p-1");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            mount_component(reddititemslist, div2, null);
            current = true;
        },
        p(ctx2, dirty) {
            var _a2;
            const reddititemslist_changes = {};
            if (dirty[0] & 1) reddititemslist_changes.title = `The latest posts in the subreddit. ${((_a2 = ctx2[0].filterOpts) == null ? void 0 : _a2.enabled) ? "With filters." : "Without filters."}`;
            if (dirty[0] & 2) reddititemslist_changes.items = ctx2[1].posts || [];
            if (dirty[0] & 64) reddititemslist_changes.onClose = ctx2[21];
            reddititemslist.$set(reddititemslist_changes);
        },
        i(local) {
            if (current) return;
            transition_in(reddititemslist.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(reddititemslist.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div2);
            destroy_component(reddititemslist);
        }
    };
}

function create_posts_block_slot(ctx) {
    let div1;
    let div0;
    let spinner;
    let t;
    let current;
    spinner = new Spinner({
        props: {
            show: ctx[7]
        }
    });
    let if_block = ctx[6] && create_if_block_1$2(ctx);
    return {
        c() {
            div1 = element("div");
            div0 = element("div");
            create_component(spinner.$$.fragment);
            t = space();
            if (if_block) if_block.c();
            attr(div0, "class", "col-span-full");
            attr(div1, "slot", "posts-block");
        },
        m(target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            mount_component(spinner, div0, null);
            append(div0, t);
            if (if_block) if_block.m(div0, null);
            current = true;
        },
        p(ctx2, dirty) {
            const spinner_changes = {};
            if (dirty[0] & 128) spinner_changes.show = ctx2[7];
            spinner.$set(spinner_changes);
            if (ctx2[6]) if (if_block) {
                if_block.p(ctx2, dirty);
                if (dirty[0] & 64) transition_in(if_block, 1);
            } else {
                if_block = create_if_block_1$2(ctx2);
                if_block.c();
                transition_in(if_block, 1);
                if_block.m(div0, null);
            } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, (() => {
                    if_block = null;
                }));
                check_outros();
            }
        },
        i(local) {
            if (current) return;
            transition_in(spinner.$$.fragment, local);
            transition_in(if_block);
            current = true;
        },
        o(local) {
            transition_out(spinner.$$.fragment, local);
            transition_out(if_block);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div1);
            destroy_component(spinner);
            if (if_block) if_block.d();
        }
    };
}

function create_else_block$3(ctx) {
    let div2;
    let raw_value = filterOff + "";
    return {
        c() {
            div2 = element("div");
            attr(div2, "class", "h-5 w-5");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            div2.innerHTML = raw_value;
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_if_block$8(ctx) {
    let div2;
    let raw_value = FilterOnIcon + "";
    return {
        c() {
            div2 = element("div");
            attr(div2, "class", "h-5 w-5");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            div2.innerHTML = raw_value;
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_toggles_slot(ctx) {
    var _a, _b, _c;
    let div2;
    let notifytoggle;
    let updating_checked;
    let t0;
    let button;
    let t1;
    let span;
    let t2_value = getMsg("optionSubredditsFilter") + "";
    let t2;
    let t3;
    let t4_value = (((_a = ctx[3]) == null ? void 0 : _a.enabled) && ((_c = (_b = ctx[3]) == null ? void 0 : _b.rules) == null ? void 0 : _c.length) || 0) + "";
    let t4;
    let t5;
    let current;
    let mounted;
    let dispose;
    function notifytoggle_checked_binding(value) {
        ctx[20](value);
    }
    let notifytoggle_props = {
        changeHandler: ctx[19],
        tooltipText: getMsg("optionSubredditsNotify_title"),
        "data-testid": "notify"
    };
    if (ctx[0].notify !== void 0) notifytoggle_props.checked = ctx[0].notify;
    notifytoggle = new NotifyToggle({
        props: notifytoggle_props
    });
    binding_callbacks.push((() => bind(notifytoggle, "checked", notifytoggle_checked_binding)));
    function select_block_type(ctx2, dirty) {
        var _a2;
        if ((_a2 = ctx2[3]) == null ? void 0 : _a2.enabled) return create_if_block$8;
        return create_else_block$3;
    }
    let current_block_type = select_block_type(ctx);
    let if_block = current_block_type(ctx);
    return {
        c() {
            var _a2;
            div2 = element("div");
            create_component(notifytoggle.$$.fragment);
            t0 = space();
            button = element("button");
            if_block.c();
            t1 = space();
            span = element("span");
            t2 = text(t2_value);
            t3 = text(" (");
            t4 = text(t4_value);
            t5 = text(")");
            attr(span, "class", "ml-[2px]");
            attr(button, "class", "toggle-button");
            attr(button, "aria-label", getMsg("optionSubredditsFilter_title"));
            toggle_class(button, "toggle-button-on", (_a2 = ctx[3]) == null ? void 0 : _a2.enabled);
            attr(div2, "slot", "toggles");
            attr(div2, "class", "flex gap-3");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            mount_component(notifytoggle, div2, null);
            append(div2, t0);
            append(div2, button);
            if_block.m(button, null);
            append(button, t1);
            append(button, span);
            append(span, t2);
            append(span, t3);
            append(span, t4);
            append(span, t5);
            current = true;
            if (!mounted) {
                dispose = [ action_destroyer(tooltip.call(null, button, {
                    content: getMsg("optionSubredditsFilter_title")
                })), listen(button, "click", ctx[16]) ];
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            var _a2, _b2, _c2, _d;
            const notifytoggle_changes = {};
            if (!updating_checked && dirty[0] & 1) {
                updating_checked = true;
                notifytoggle_changes.checked = ctx2[0].notify;
                add_flush_callback((() => updating_checked = false));
            }
            notifytoggle.$set(notifytoggle_changes);
            if (current_block_type !== (current_block_type = select_block_type(ctx2))) {
                if_block.d(1);
                if_block = current_block_type(ctx2);
                if (if_block) {
                    if_block.c();
                    if_block.m(button, t1);
                }
            }
            if ((!current || dirty[0] & 8) && t4_value !== (t4_value = (((_a2 = ctx2[3]) == null ? void 0 : _a2.enabled) && ((_c2 = (_b2 = ctx2[3]) == null ? void 0 : _b2.rules) == null ? void 0 : _c2.length) || 0) + "")) set_data(t4, t4_value);
            if (!current || dirty[0] & 8) toggle_class(button, "toggle-button-on", (_d = ctx2[3]) == null ? void 0 : _d.enabled);
        },
        i(local) {
            if (current) return;
            transition_in(notifytoggle.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(notifytoggle.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div2);
            destroy_component(notifytoggle);
            if_block.d();
            mounted = false;
            run_all(dispose);
        }
    };
}

function create_fragment$a(ctx) {
    let watchitem;
    let updating_isActive;
    let updating_showEditBlock;
    let current;
    function watchitem_isActive_binding(value) {
        ctx[28](value);
    }
    function watchitem_showEditBlock_binding(value) {
        ctx[29](value);
    }
    let watchitem_props = {
        name: ctx[0].name || ctx[0].subreddit || ctx[8] ? ctx[12]() : "click here to edit...",
        onActiveToggle: ctx[25],
        onDelete: ctx[26],
        onFetch: ctx[27],
        disabled: ctx[11] || !ctx[0].subreddit || !!ctx[2].error,
        errorMessage: ctx[10],
        $$slots: {
            toggles: [ create_toggles_slot ],
            "posts-block": [ create_posts_block_slot ],
            default: [ create_default_slot$4 ]
        },
        $$scope: {
            ctx: ctx
        }
    };
    if (ctx[4] !== void 0) watchitem_props.isActive = ctx[4];
    if (ctx[8] !== void 0) watchitem_props.showEditBlock = ctx[8];
    watchitem = new WatchItem({
        props: watchitem_props
    });
    binding_callbacks.push((() => bind(watchitem, "isActive", watchitem_isActive_binding)));
    binding_callbacks.push((() => bind(watchitem, "showEditBlock", watchitem_showEditBlock_binding)));
    return {
        c() {
            create_component(watchitem.$$.fragment);
        },
        m(target, anchor) {
            mount_component(watchitem, target, anchor);
            current = true;
        },
        p(ctx2, dirty) {
            const watchitem_changes = {};
            if (dirty[0] & 257) watchitem_changes.name = ctx2[0].name || ctx2[0].subreddit || ctx2[8] ? ctx2[12]() : "click here to edit...";
            if (dirty[0] & 1) watchitem_changes.onDelete = ctx2[26];
            if (dirty[0] & 2053) watchitem_changes.disabled = ctx2[11] || !ctx2[0].subreddit || !!ctx2[2].error;
            if (dirty[0] & 1024) watchitem_changes.errorMessage = ctx2[10];
            if (dirty[0] & 1775 | dirty[1] & 2) watchitem_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            if (!updating_isActive && dirty[0] & 16) {
                updating_isActive = true;
                watchitem_changes.isActive = ctx2[4];
                add_flush_callback((() => updating_isActive = false));
            }
            if (!updating_showEditBlock && dirty[0] & 256) {
                updating_showEditBlock = true;
                watchitem_changes.showEditBlock = ctx2[8];
                add_flush_callback((() => updating_showEditBlock = false));
            }
            watchitem.$set(watchitem_changes);
        },
        i(local) {
            if (current) return;
            transition_in(watchitem.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(watchitem.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            destroy_component(watchitem, detaching);
        }
    };
}

function processFilterOpts(filter) {
    var _a;
    const result = {
        rules: []
    };
    const fields = new Set;
    if ((_a = filter === null || filter === void 0 ? void 0 : filter.rules) === null || _a === void 0 ? void 0 : _a.length) {
        filter.rules.forEach((rule => {
            rule.forEach((({field: field, query: query}) => {
                if (query) fields.add(field);
            }));
        }));
        result.rules = filter.rules;
    }
    result.fields = Array.from(fields);
    result.enabled = Boolean(result.fields.length);
    return result;
}

function instance$a($$self, $$props, $$invalidate) {
    let errorMessage;
    let $inputStatusStore;
    let $isBlocked;
    component_subscribe($$self, inputStatusStore, ($$value => $$invalidate(18, $inputStatusStore = $$value)));
    component_subscribe($$self, isBlocked, ($$value => $$invalidate(11, $isBlocked = $$value)));
    let {subOpts: subOpts} = $$props;
    let {subData: subData = {}} = $$props;
    let inputStatus = {};
    let isActive = !subOpts.disabled;
    let filterOpts;
    let ruleList;
    let fetchError = "";
    let showPosts = false;
    let isLoading = false;
    let showEditBlock = !(subOpts === null || subOpts === void 0 ? void 0 : subOpts.subreddit);
    let subredditInputRef;
    const getName = () => subOpts.name || `r/${subOpts.subreddit}`;
    const fetchPosts = async () => {
        if (!subOpts.subreddit || inputStatus.error) return;
        $$invalidate(7, isLoading = true);
        $$invalidate(6, showPosts = false);
        isBlocked.block();
        const app = new NotifierApp;
        app.reddit.fetchOpts = {
            cache: "default"
        };
        try {
            await app.updateSubreddit({
                subOpts: subOpts,
                subData: {
                    ...subData,
                    lastPostCreated: 0,
                    posts: [],
                    error: null
                }
            });
        } catch (e) {
            $$invalidate(17, fetchError = e.message || "");
        }
        $$invalidate(7, isLoading = false);
        $$invalidate(6, showPosts = true);
    };
    const saveInputs = async filter => {
        var _a;
        const _subreddit = (_a = subOpts.subreddit) === null || _a === void 0 ? void 0 : _a.trim().replace(/\s/g, "+");
        if (!_subreddit || !testMultireddit(_subreddit)) {
            const msg = "Invalid subreddit/multireddit name";
            subredditInputRef === null || subredditInputRef === void 0 ? void 0 : subredditInputRef.setCustomValidity(msg);
            set_store_value(inputStatusStore, $inputStatusStore[subOpts.id] = {
                error: msg
            }, $inputStatusStore);
            return;
        }
        subredditInputRef === null || subredditInputRef === void 0 ? void 0 : subredditInputRef.setCustomValidity("");
        const shouldRemoveData = !!filter;
        if (shouldRemoveData && showPosts) $$invalidate(6, showPosts = false);
        await subredditStore.saveOptions({
            id: subOpts.id,
            subreddit: _subreddit,
            name: subOpts.name,
            disabled: !isActive,
            notify: subOpts.notify,
            filterOpts: processFilterOpts(filter || subOpts.filterOpts)
        }, shouldRemoveData);
        $$invalidate(17, fetchError = "");
        set_store_value(inputStatusStore, $inputStatusStore[subOpts.id] = {
            saved: true
        }, $inputStatusStore);
    };
    const saveInputsDebounced = debounce$2(saveInputs, 600);
    const inputHandler = () => {
        set_store_value(inputStatusStore, $inputStatusStore[subOpts.id] = {
            typing: true
        }, $inputStatusStore);
        saveInputsDebounced();
    };
    const toggleEditBlock = () => {
        if (!showEditBlock && showPosts) $$invalidate(6, showPosts = false);
        $$invalidate(8, showEditBlock = !showEditBlock);
    };
    const onFilterClick = () => {
        if (!showEditBlock && !subOpts.filterOpts) $$invalidate(0, subOpts.filterOpts = {
            rules: [ [ {
                field: "title",
                query: ""
            } ] ]
        }, subOpts);
        toggleEditBlock();
    };
    const func = () => saveInputs();
    function notifytoggle_checked_binding(value) {
        if ($$self.$$.not_equal(subOpts.notify, value)) {
            subOpts.notify = value;
            $$invalidate(0, subOpts);
        }
    }
    const func_1 = () => {
        $$invalidate(6, showPosts = false);
    };
    function input0_input_handler() {
        subOpts.name = this.value;
        $$invalidate(0, subOpts);
    }
    function input1_binding($$value) {
        binding_callbacks[$$value ? "unshift" : "push"]((() => {
            subredditInputRef = $$value;
            $$invalidate(9, subredditInputRef);
        }));
    }
    function input1_input_handler() {
        subOpts.subreddit = this.value;
        $$invalidate(0, subOpts);
    }
    const func_2 = () => void saveInputs();
    const func_3 = () => void subredditStore.deleteSubreddit(subOpts.id);
    const func_4 = () => void fetchPosts();
    function watchitem_isActive_binding(value) {
        isActive = value;
        $$invalidate(4, isActive);
    }
    function watchitem_showEditBlock_binding(value) {
        showEditBlock = value;
        $$invalidate(8, showEditBlock);
    }
    $$self.$$set = $$props2 => {
        if ("subOpts" in $$props2) $$invalidate(0, subOpts = $$props2.subOpts);
        if ("subData" in $$props2) $$invalidate(1, subData = $$props2.subData);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty[0] & 1) $$invalidate(3, filterOpts = subOpts.filterOpts || {});
        if ($$self.$$.dirty[0] & 8) $$invalidate(5, ruleList = (filterOpts === null || filterOpts === void 0 ? void 0 : filterOpts.rules) || []);
        if ($$self.$$.dirty[0] & 262145) $$invalidate(2, inputStatus = $inputStatusStore[subOpts.id] || {});
        if ($$self.$$.dirty[0] & 2) $$invalidate(17, fetchError = formatError(subData.error));
        if ($$self.$$.dirty[0] & 131076) $$invalidate(10, errorMessage = inputStatus.error || fetchError);
    };
    return [ subOpts, subData, inputStatus, filterOpts, isActive, ruleList, showPosts, isLoading, showEditBlock, subredditInputRef, errorMessage, $isBlocked, getName, fetchPosts, saveInputs, inputHandler, onFilterClick, fetchError, $inputStatusStore, func, notifytoggle_checked_binding, func_1, input0_input_handler, input1_binding, input1_input_handler, func_2, func_3, func_4, watchitem_isActive_binding, watchitem_showEditBlock_binding ];
}

class SubredditInput extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$a, create_fragment$a, safe_not_equal, {
            subOpts: 0,
            subData: 1
        }, null, [ -1, -1 ]);
    }
}

function get_each_context$4(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[3] = list[i];
    child_ctx[4] = list;
    child_ctx[5] = i;
    return child_ctx;
}

function create_default_slot_1$2(ctx) {
    let span0;
    let t1;
    let span1;
    let t2;
    let div2;
    let mounted;
    let dispose;
    return {
        c() {
            span0 = element("span");
            span0.textContent = `${getMsg("optionSubredditsDescription")}`;
            t1 = space();
            span1 = element("span");
            t2 = text("Filters vs Reddit Search\n            ");
            div2 = element("div");
            attr(div2, "class", "h-4 w-4");
            attr(span1, "class", "inline-flex items-center gap-1 text-skin-accent2");
        },
        m(target, anchor) {
            insert(target, span0, anchor);
            insert(target, t1, anchor);
            insert(target, span1, anchor);
            append(span1, t2);
            append(span1, div2);
            div2.innerHTML = HelpCircleIcon;
            if (!mounted) {
                dispose = action_destroyer(tooltip.call(null, span1, {
                    content: getMsg("helpFiltersVsSearch"),
                    allowHTML: true
                }));
                mounted = true;
            }
        },
        p: noop,
        d(detaching) {
            if (detaching) {
                detach(span0);
                detach(t1);
                detach(span1);
            }
            mounted = false;
            dispose();
        }
    };
}

function create_each_block$4(key_1, ctx) {
    let div2;
    let subredditinput;
    let updating_subOpts;
    let div_transition;
    let rect;
    let stop_animation = noop;
    let current;
    function subredditinput_subOpts_binding(value) {
        ctx[2](value, ctx[3], ctx[4], ctx[5]);
    }
    let subredditinput_props = {
        subData: ctx[1].subreddits[ctx[3].id] || {}
    };
    if (ctx[3] !== void 0) subredditinput_props.subOpts = ctx[3];
    subredditinput = new SubredditInput({
        props: subredditinput_props
    });
    binding_callbacks.push((() => bind(subredditinput, "subOpts", subredditinput_subOpts_binding)));
    return {
        key: key_1,
        first: null,
        c() {
            div2 = element("div");
            create_component(subredditinput.$$.fragment);
            attr(div2, "class", "mb-2");
            this.first = div2;
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            mount_component(subredditinput, div2, null);
            current = true;
        },
        p(new_ctx, dirty) {
            ctx = new_ctx;
            const subredditinput_changes = {};
            if (dirty & 3) subredditinput_changes.subData = ctx[1].subreddits[ctx[3].id] || {};
            if (!updating_subOpts && dirty & 1) {
                updating_subOpts = true;
                subredditinput_changes.subOpts = ctx[3];
                add_flush_callback((() => updating_subOpts = false));
            }
            subredditinput.$set(subredditinput_changes);
        },
        r() {
            rect = div2.getBoundingClientRect();
        },
        f() {
            fix_position(div2);
            stop_animation();
            add_transform(div2, rect);
        },
        a() {
            stop_animation();
            stop_animation = create_animation(div2, rect, flip$2, {
                delay: 230,
                duration: 150
            });
        },
        i(local) {
            if (current) return;
            transition_in(subredditinput.$$.fragment, local);
            if (local) add_render_callback((() => {
                if (!current) return;
                if (!div_transition) div_transition = create_bidirectional_transition(div2, fade, {
                    duration: 200
                }, true);
                div_transition.run(1);
            }));
            current = true;
        },
        o(local) {
            transition_out(subredditinput.$$.fragment, local);
            if (local) {
                if (!div_transition) div_transition = create_bidirectional_transition(div2, fade, {
                    duration: 200
                }, false);
                div_transition.run(0);
            }
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div2);
            destroy_component(subredditinput);
            if (detaching && div_transition) div_transition.end();
        }
    };
}

function create_default_slot$3(ctx) {
    let t_value = getMsg("optionSubredditsAdd") + "";
    let t;
    return {
        c() {
            t = text(t_value);
        },
        m(target, anchor) {
            insert(target, t, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(t);
        }
    };
}

function create_fragment$9(ctx) {
    let div8;
    let blockdescription;
    let t0;
    let div7;
    let div0;
    let t2;
    let div2;
    let div1;
    let t3;
    let span;
    let t5;
    let div3;
    let t7;
    let div4;
    let t8;
    let div5;
    let t9;
    let div6;
    let t10;
    let each_blocks = [];
    let each_1_lookup = new Map;
    let t11;
    let addbutton;
    let current;
    blockdescription = new BlockDescription({
        props: {
            $$slots: {
                default: [ create_default_slot_1$2 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    let each_value = ensure_array_like(ctx[0]);
    const get_key = ctx2 => ctx2[3].id;
    for (let i = 0; i < each_value.length; i += 1) {
        let child_ctx = get_each_context$4(ctx, each_value, i);
        let key = get_key(child_ctx);
        each_1_lookup.set(key, each_blocks[i] = create_each_block$4(key, child_ctx));
    }
    addbutton = new AddButton({
        props: {
            clickHandler: subredditStore.addSubreddit,
            $$slots: {
                default: [ create_default_slot$3 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    return {
        c() {
            div8 = element("div");
            create_component(blockdescription.$$.fragment);
            t0 = space();
            div7 = element("div");
            div0 = element("div");
            div0.textContent = `${getMsg("optionWatchInputNameColumn")}`;
            t2 = space();
            div2 = element("div");
            div1 = element("div");
            t3 = space();
            span = element("span");
            span.textContent = `${getMsg("optionsSubredditFetch")}`;
            t5 = space();
            div3 = element("div");
            div3.textContent = `${getMsg("optionWatchInputActiveColumn")}`;
            t7 = space();
            div4 = element("div");
            t8 = space();
            div5 = element("div");
            t9 = space();
            div6 = element("div");
            t10 = space();
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            t11 = space();
            create_component(addbutton.$$.fragment);
            attr(div0, "class", "px-2 font-medium");
            attr(div1, "class", "mr-1 h-5 w-5");
            attr(div2, "class", "invisible flex font-normal");
            attr(div3, "class", "w-12 text-center font-medium");
            attr(div4, "class", "w-48");
            attr(div5, "class", "w-14");
            attr(div6, "class", "w-8");
            attr(div7, "class", "watch-item-grid text-xs");
            toggle_class(div7, "hidden", ctx[0].length === 0);
        },
        m(target, anchor) {
            insert(target, div8, anchor);
            mount_component(blockdescription, div8, null);
            append(div8, t0);
            append(div8, div7);
            append(div7, div0);
            append(div7, t2);
            append(div7, div2);
            append(div2, div1);
            div1.innerHTML = RefreshIcon2;
            append(div2, t3);
            append(div2, span);
            append(div7, t5);
            append(div7, div3);
            append(div7, t7);
            append(div7, div4);
            append(div7, t8);
            append(div7, div5);
            append(div7, t9);
            append(div7, div6);
            append(div8, t10);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(div8, null);
            append(div8, t11);
            mount_component(addbutton, div8, null);
            current = true;
        },
        p(ctx2, [dirty]) {
            const blockdescription_changes = {};
            if (dirty & 64) blockdescription_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            blockdescription.$set(blockdescription_changes);
            if (!current || dirty & 1) toggle_class(div7, "hidden", ctx2[0].length === 0);
            if (dirty & 3) {
                each_value = ensure_array_like(ctx2[0]);
                group_outros();
                for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].r();
                each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div8, fix_and_outro_and_destroy_block, create_each_block$4, t11, get_each_context$4);
                for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].a();
                check_outros();
            }
            const addbutton_changes = {};
            if (dirty & 64) addbutton_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            addbutton.$set(addbutton_changes);
        },
        i(local) {
            if (current) return;
            transition_in(blockdescription.$$.fragment, local);
            for (let i = 0; i < each_value.length; i += 1) transition_in(each_blocks[i]);
            transition_in(addbutton.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(blockdescription.$$.fragment, local);
            for (let i = 0; i < each_blocks.length; i += 1) transition_out(each_blocks[i]);
            transition_out(addbutton.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div8);
            destroy_component(blockdescription);
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].d();
            destroy_component(addbutton);
        }
    };
}

function instance$9($$self, $$props, $$invalidate) {
    let $subredditStore;
    let $storageData;
    component_subscribe($$self, subredditStore, ($$value => $$invalidate(0, $subredditStore = $$value)));
    component_subscribe($$self, storageData, ($$value => $$invalidate(1, $storageData = $$value)));
    function subredditinput_subOpts_binding(value, subOpts, each_value, subOpts_index) {
        each_value[subOpts_index] = value;
        subredditStore.set($subredditStore);
    }
    return [ $subredditStore, $storageData, subredditinput_subOpts_binding ];
}

class SubredditsBlock extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$9, create_fragment$9, safe_not_equal, {});
    }
}

function create_default_slot_1$1(ctx) {
    let span1;
    let span0;
    return {
        c() {
            span1 = element("span");
            span0 = element("span");
            span0.textContent = `${getMsg("optionMailDescription")}`;
            attr(span1, "class", "flex items-center");
        },
        m(target, anchor) {
            insert(target, span1, anchor);
            append(span1, span0);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(span1);
        }
    };
}

function create_default_slot$2(ctx) {
    let span;
    return {
        c() {
            span = element("span");
            span.textContent = `${getMsg("optionMailCheck")}`;
        },
        m(target, anchor) {
            insert(target, span, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(span);
        }
    };
}

function create_if_block$7(ctx) {
    let div2;
    let span0;
    let span1;
    let t1_value = ctx[0].error + "";
    let t1;
    return {
        c() {
            div2 = element("div");
            span0 = element("span");
            span0.textContent = "Error: ";
            span1 = element("span");
            t1 = text(t1_value);
            attr(div2, "class", "mt-2 text-skin-error");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, span0);
            append(div2, span1);
            append(span1, t1);
        },
        p(ctx2, dirty) {
            if (dirty & 1 && t1_value !== (t1_value = ctx2[0].error + "")) set_data(t1, t1_value);
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_fragment$8(ctx) {
    var _a;
    let div3;
    let blockdescription;
    let t0;
    let div2;
    let div0;
    let ioscheckbox;
    let updating_checked;
    let t1;
    let div1;
    let notifytoggle;
    let updating_checked_1;
    let t2;
    let current;
    blockdescription = new BlockDescription({
        props: {
            $$slots: {
                default: [ create_default_slot_1$1 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    function ioscheckbox_checked_binding(value) {
        ctx[4](value);
    }
    let ioscheckbox_props = {
        changeHandler: ctx[1],
        tooltipText: getMsg("optionMailCheck_title"),
        $$slots: {
            default: [ create_default_slot$2 ]
        },
        $$scope: {
            ctx: ctx
        }
    };
    if (ctx[0].checkMail !== void 0) ioscheckbox_props.checked = ctx[0].checkMail;
    ioscheckbox = new IosCheckbox({
        props: ioscheckbox_props
    });
    binding_callbacks.push((() => bind(ioscheckbox, "checked", ioscheckbox_checked_binding)));
    function notifytoggle_checked_binding(value) {
        ctx[5](value);
    }
    let notifytoggle_props = {
        changeHandler: ctx[2],
        tooltipText: getMsg("optionMailNotify_title")
    };
    if (ctx[0].mailNotify !== void 0) notifytoggle_props.checked = ctx[0].mailNotify;
    notifytoggle = new NotifyToggle({
        props: notifytoggle_props
    });
    binding_callbacks.push((() => bind(notifytoggle, "checked", notifytoggle_checked_binding)));
    let if_block = ((_a = ctx[0]) == null ? void 0 : _a.error) && create_if_block$7(ctx);
    return {
        c() {
            div3 = element("div");
            create_component(blockdescription.$$.fragment);
            t0 = space();
            div2 = element("div");
            div0 = element("div");
            create_component(ioscheckbox.$$.fragment);
            t1 = space();
            div1 = element("div");
            create_component(notifytoggle.$$.fragment);
            t2 = space();
            if (if_block) if_block.c();
            attr(div1, "class", "w-min");
            attr(div2, "class", "my-2 flex gap-6");
            attr(div3, "class", "text-sm");
        },
        m(target, anchor) {
            insert(target, div3, anchor);
            mount_component(blockdescription, div3, null);
            append(div3, t0);
            append(div3, div2);
            append(div2, div0);
            mount_component(ioscheckbox, div0, null);
            append(div2, t1);
            append(div2, div1);
            mount_component(notifytoggle, div1, null);
            append(div3, t2);
            if (if_block) if_block.m(div3, null);
            current = true;
        },
        p(ctx2, [dirty]) {
            var _a2;
            const blockdescription_changes = {};
            if (dirty & 64) blockdescription_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            blockdescription.$set(blockdescription_changes);
            const ioscheckbox_changes = {};
            if (dirty & 64) ioscheckbox_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            if (!updating_checked && dirty & 1) {
                updating_checked = true;
                ioscheckbox_changes.checked = ctx2[0].checkMail;
                add_flush_callback((() => updating_checked = false));
            }
            ioscheckbox.$set(ioscheckbox_changes);
            const notifytoggle_changes = {};
            if (!updating_checked_1 && dirty & 1) {
                updating_checked_1 = true;
                notifytoggle_changes.checked = ctx2[0].mailNotify;
                add_flush_callback((() => updating_checked_1 = false));
            }
            notifytoggle.$set(notifytoggle_changes);
            if ((_a2 = ctx2[0]) == null ? void 0 : _a2.error) if (if_block) if_block.p(ctx2, dirty); else {
                if_block = create_if_block$7(ctx2);
                if_block.c();
                if_block.m(div3, null);
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        i(local) {
            if (current) return;
            transition_in(blockdescription.$$.fragment, local);
            transition_in(ioscheckbox.$$.fragment, local);
            transition_in(notifytoggle.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(blockdescription.$$.fragment, local);
            transition_out(ioscheckbox.$$.fragment, local);
            transition_out(notifytoggle.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div3);
            destroy_component(blockdescription);
            destroy_component(ioscheckbox);
            destroy_component(notifytoggle);
            if (if_block) if_block.d();
        }
    };
}

function instance$8($$self, $$props, $$invalidate) {
    let $storageData;
    component_subscribe($$self, storageData, ($$value => $$invalidate(3, $storageData = $$value)));
    let mailData;
    const checkHandler = async e => {
        const checked = e.currentTarget.checked;
        $$invalidate(0, mailData.checkMail = checked, mailData);
        if (!checked) $$invalidate(0, mailData.mailNotify = false, mailData);
        await storage.saveMail(mailData);
    };
    const notifyHandler = async e => {
        const checked = e.currentTarget.checked;
        $$invalidate(0, mailData.mailNotify = checked, mailData);
        if (checked) $$invalidate(0, mailData.checkMail = true, mailData);
        await storage.saveMail(mailData);
    };
    function ioscheckbox_checked_binding(value) {
        if ($$self.$$.not_equal(mailData.checkMail, value)) {
            mailData.checkMail = value;
            $$invalidate(0, mailData), $$invalidate(3, $storageData);
        }
    }
    function notifytoggle_checked_binding(value) {
        if ($$self.$$.not_equal(mailData.mailNotify, value)) {
            mailData.mailNotify = value;
            $$invalidate(0, mailData), $$invalidate(3, $storageData);
        }
    }
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 8) $$invalidate(0, mailData = $storageData.mail || {});
    };
    return [ mailData, checkHandler, notifyHandler, $storageData, ioscheckbox_checked_binding, notifytoggle_checked_binding ];
}

class MailBlock extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$8, create_fragment$8, safe_not_equal, {});
    }
}

function get_each_context$3(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[5] = list[i];
    return child_ctx;
}

function create_else_block$2(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            div2.textContent = "No items.";
        },
        m(target, anchor) {
            insert(target, div2, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_if_block$6(ctx) {
    let span;
    let t0;
    let t1_value = ctx[5].subreddit + "";
    let t1;
    let t2;
    return {
        c() {
            span = element("span");
            t0 = text("(r/");
            t1 = text(t1_value);
            t2 = text(")");
        },
        m(target, anchor) {
            insert(target, span, anchor);
            append(span, t0);
            append(span, t1);
            append(span, t2);
        },
        p(ctx2, dirty) {
            if (dirty & 4 && t1_value !== (t1_value = ctx2[5].subreddit + "")) set_data(t1, t1_value);
        },
        d(detaching) {
            if (detaching) detach(span);
        }
    };
}

function create_each_block$3(ctx) {
    let span0;
    let t0_value = ctx[5].date + "";
    let t0;
    let span0_title_value;
    let t1;
    let div0;
    let b;
    let t2_value = ctx[5].author + "";
    let t2;
    let t3;
    let t4;
    let span1;
    let t6;
    let div1;
    let span2;
    let t7_value = ctx[5].title + "";
    let t7;
    let t8;
    let span3;
    let t10;
    let span4;
    let t11_value = ctx[5].text + "";
    let t11;
    let t12;
    let if_block = ctx[5].subreddit && create_if_block$6(ctx);
    return {
        c() {
            span0 = element("span");
            t0 = text(t0_value);
            t1 = space();
            div0 = element("div");
            b = element("b");
            t2 = text(t2_value);
            t3 = space();
            if (if_block) if_block.c();
            t4 = space();
            span1 = element("span");
            span1.textContent = ":";
            t6 = space();
            div1 = element("div");
            span2 = element("span");
            t7 = text(t7_value);
            t8 = space();
            span3 = element("span");
            span3.textContent = ":";
            t10 = space();
            span4 = element("span");
            t11 = text(t11_value);
            t12 = space();
            attr(span0, "title", span0_title_value = ctx[5].fullDate);
            attr(b, "class", "font-bold");
            attr(span2, "class", "font-bold");
            attr(div1, "class", "overflow-hidden overflow-ellipsis whitespace-nowrap break-all");
        },
        m(target, anchor) {
            insert(target, span0, anchor);
            append(span0, t0);
            insert(target, t1, anchor);
            insert(target, div0, anchor);
            append(div0, b);
            append(b, t2);
            append(div0, t3);
            if (if_block) if_block.m(div0, null);
            append(div0, t4);
            append(div0, span1);
            insert(target, t6, anchor);
            insert(target, div1, anchor);
            append(div1, span2);
            append(span2, t7);
            append(div1, t8);
            append(div1, span3);
            append(div1, t10);
            append(div1, span4);
            append(span4, t11);
            append(div1, t12);
        },
        p(ctx2, dirty) {
            if (dirty & 4 && t0_value !== (t0_value = ctx2[5].date + "")) set_data(t0, t0_value);
            if (dirty & 4 && span0_title_value !== (span0_title_value = ctx2[5].fullDate)) attr(span0, "title", span0_title_value);
            if (dirty & 4 && t2_value !== (t2_value = ctx2[5].author + "")) set_data(t2, t2_value);
            if (ctx2[5].subreddit) if (if_block) if_block.p(ctx2, dirty); else {
                if_block = create_if_block$6(ctx2);
                if_block.c();
                if_block.m(div0, t4);
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
            if (dirty & 4 && t7_value !== (t7_value = ctx2[5].title + "")) set_data(t7, t7_value);
            if (dirty & 4 && t11_value !== (t11_value = ctx2[5].text + "")) set_data(t11, t11_value);
        },
        d(detaching) {
            if (detaching) {
                detach(span0);
                detach(t1);
                detach(div0);
                detach(t6);
                detach(div1);
            }
            if (if_block) if_block.d();
        }
    };
}

function create_fragment$7(ctx) {
    let article;
    let header;
    let div0;
    let a;
    let t0;
    let t1;
    let button;
    let t2;
    let div1;
    let mounted;
    let dispose;
    let each_value = ensure_array_like(ctx[2]);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
    let each_1_else = null;
    if (!each_value.length) each_1_else = create_else_block$2();
    return {
        c() {
            article = element("article");
            header = element("header");
            div0 = element("div");
            a = element("a");
            t0 = text(ctx[0]);
            t1 = space();
            button = element("button");
            t2 = space();
            div1 = element("div");
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            if (each_1_else) each_1_else.c();
            attr(a, "href", "https://reddit.com/message/unread/");
            attr(a, "target", "_blank");
            attr(a, "rel", "noreferrer");
            attr(button, "class", "mr-2 h-4 w-4 border-none bg-transparent p-0");
            attr(button, "title", getMsg("closeLabel"));
            attr(div0, "class", "my-1 flex items-center justify-between");
            attr(div1, "class", "user-items-grid text-xs svelte-odvv19");
        },
        m(target, anchor) {
            insert(target, article, anchor);
            append(article, header);
            append(header, div0);
            append(div0, a);
            append(a, t0);
            append(div0, t1);
            append(div0, button);
            button.innerHTML = XCircleIcon;
            append(article, t2);
            append(article, div1);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(div1, null);
            if (each_1_else) each_1_else.m(div1, null);
            if (!mounted) {
                dispose = listen(button, "click", (function() {
                    if (is_function(ctx[1])) ctx[1].apply(this, arguments);
                }));
                mounted = true;
            }
        },
        p(new_ctx, [dirty]) {
            ctx = new_ctx;
            if (dirty & 1) set_data(t0, ctx[0]);
            if (dirty & 4) {
                each_value = ensure_array_like(ctx[2]);
                let i;
                for (i = 0; i < each_value.length; i += 1) {
                    const child_ctx = get_each_context$3(ctx, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty); else {
                        each_blocks[i] = create_each_block$3(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(div1, null);
                    }
                }
                for (;i < each_blocks.length; i += 1) each_blocks[i].d(1);
                each_blocks.length = each_value.length;
                if (!each_value.length && each_1_else) each_1_else.p(ctx, dirty); else if (!each_value.length) {
                    each_1_else = create_else_block$2();
                    each_1_else.c();
                    each_1_else.m(div1, null);
                } else if (each_1_else) {
                    each_1_else.d(1);
                    each_1_else = null;
                }
            }
        },
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(article);
            destroy_each(each_blocks, detaching);
            if (each_1_else) each_1_else.d();
            mounted = false;
            dispose();
        }
    };
}

function instance$7($$self, $$props, $$invalidate) {
    let {items: items = []} = $$props;
    let {title: title = ""} = $$props;
    let {onClose: onClose} = $$props;
    let {limit: limit = 5} = $$props;
    let displayItems = [];
    $$self.$$set = $$props2 => {
        if ("items" in $$props2) $$invalidate(3, items = $$props2.items);
        if ("title" in $$props2) $$invalidate(0, title = $$props2.title);
        if ("onClose" in $$props2) $$invalidate(1, onClose = $$props2.onClose);
        if ("limit" in $$props2) $$invalidate(4, limit = $$props2.limit);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 24) $$invalidate(2, displayItems = items.slice(0, limit).map((({data: data}) => {
            var _a;
            const date = new Date(data.created * 1e3).toLocaleDateString();
            const fullDate = new Date(data.created * 1e3).toLocaleString();
            return {
                subreddit: data.subreddit,
                title: data.subject,
                text: (_a = data.body) === null || _a === void 0 ? void 0 : _a.slice(),
                date: date,
                fullDate: fullDate,
                author: data.author
            };
        })));
    };
    return [ title, onClose, displayItems, items, limit ];
}

class MessagesList extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$7, create_fragment$7, safe_not_equal, {
            items: 3,
            title: 0,
            onClose: 1,
            limit: 4
        });
    }
}

function get_each_context$2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[19] = list[i];
    return child_ctx;
}

function create_if_block_2(ctx) {
    let t0;
    let span;
    let t1_value = (ctx[0].name || `~ no account info`) + "";
    let t1;
    function select_block_type(ctx2, dirty) {
        if (ctx2[0].img) return create_if_block_3;
        return create_else_block$1;
    }
    let current_block_type = select_block_type(ctx);
    let if_block = current_block_type(ctx);
    return {
        c() {
            if_block.c();
            t0 = space();
            span = element("span");
            t1 = text(t1_value);
            attr(span, "class", "overflow-hidden text-ellipsis");
        },
        m(target, anchor) {
            if_block.m(target, anchor);
            insert(target, t0, anchor);
            insert(target, span, anchor);
            append(span, t1);
        },
        p(ctx2, dirty) {
            if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) if_block.p(ctx2, dirty); else {
                if_block.d(1);
                if_block = current_block_type(ctx2);
                if (if_block) {
                    if_block.c();
                    if_block.m(t0.parentNode, t0);
                }
            }
            if (dirty & 1 && t1_value !== (t1_value = (ctx2[0].name || `~ no account info`) + "")) set_data(t1, t1_value);
        },
        d(detaching) {
            if (detaching) {
                detach(t0);
                detach(span);
            }
            if_block.d(detaching);
        }
    };
}

function create_else_block$1(ctx) {
    let div2;
    return {
        c() {
            div2 = element("div");
            attr(div2, "class", "w-7 text-skin-gray");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            div2.innerHTML = AccountIcon;
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_if_block_3(ctx) {
    let img;
    let img_src_value;
    return {
        c() {
            img = element("img");
            attr(img, "class", "h-8 w-8");
            if (!src_url_equal(img.src, img_src_value = ctx[0].img)) attr(img, "src", img_src_value);
            attr(img, "alt", "avatar");
        },
        m(target, anchor) {
            insert(target, img, anchor);
        },
        p(ctx2, dirty) {
            if (dirty & 1 && !src_url_equal(img.src, img_src_value = ctx2[0].img)) attr(img, "src", img_src_value);
        },
        d(detaching) {
            if (detaching) detach(img);
        }
    };
}

function create_default_slot$1(ctx) {
    let span;
    return {
        c() {
            span = element("span");
            span.textContent = `${getMsg("optionAccountsMailCheck")}`;
            attr(span, "class", "text-xs");
        },
        m(target, anchor) {
            insert(target, span, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(span);
        }
    };
}

function create_if_block_1$1(ctx) {
    let div2;
    let each_value = ensure_array_like(ctx[3]);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    return {
        c() {
            div2 = element("div");
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            attr(div2, "class", "p-1 pl-8 text-skin-error");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(div2, null);
        },
        p(ctx2, dirty) {
            if (dirty & 8) {
                each_value = ensure_array_like(ctx2[3]);
                let i;
                for (i = 0; i < each_value.length; i += 1) {
                    const child_ctx = get_each_context$2(ctx2, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty); else {
                        each_blocks[i] = create_each_block$2(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(div2, null);
                    }
                }
                for (;i < each_blocks.length; i += 1) each_blocks[i].d(1);
                each_blocks.length = each_value.length;
            }
        },
        d(detaching) {
            if (detaching) detach(div2);
            destroy_each(each_blocks, detaching);
        }
    };
}

function create_each_block$2(ctx) {
    let div2;
    let t_value = ctx[19] + "";
    let t;
    return {
        c() {
            div2 = element("div");
            t = text(t_value);
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, t);
        },
        p(ctx2, dirty) {
            if (dirty & 8 && t_value !== (t_value = ctx2[19] + "")) set_data(t, t_value);
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_if_block$5(ctx) {
    var _a;
    let div2;
    let messageslist;
    let current;
    messageslist = new MessagesList({
        props: {
            title: `${ctx[0].name || ""} unread private messages`,
            items: ((_a = ctx[0].mail) == null ? void 0 : _a.messages) || [],
            limit: 10,
            onClose: ctx[17]
        }
    });
    return {
        c() {
            div2 = element("div");
            create_component(messageslist.$$.fragment);
            attr(div2, "class", "mt-2 max-w-full border border-skin-delimiter p-1");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            mount_component(messageslist, div2, null);
            current = true;
        },
        p(ctx2, dirty) {
            var _a2;
            const messageslist_changes = {};
            if (dirty & 1) messageslist_changes.title = `${ctx2[0].name || ""} unread private messages`;
            if (dirty & 1) messageslist_changes.items = ((_a2 = ctx2[0].mail) == null ? void 0 : _a2.messages) || [];
            if (dirty & 32) messageslist_changes.onClose = ctx2[17];
            messageslist.$set(messageslist_changes);
        },
        i(local) {
            if (current) return;
            transition_in(messageslist.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(messageslist.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div2);
            destroy_component(messageslist);
        }
    };
}

function create_fragment$6(ctx) {
    var _a;
    let li;
    let button0;
    let div0;
    let t0;
    let div1;
    let spinner0;
    let t1;
    let t2;
    let div3;
    let button1;
    let div2;
    let t3;
    let span0;
    let t5;
    let div4;
    let ioscheckbox;
    let t6;
    let div5;
    let notifytoggle;
    let t7;
    let div7;
    let button2;
    let div6;
    let t8;
    let div8;
    let button3;
    let span1;
    let t9;
    let div11;
    let div10;
    let t10;
    let spinner1;
    let t11;
    let t12;
    let current;
    let mounted;
    let dispose;
    spinner0 = new Spinner({
        props: {
            show: ctx[1],
            label: ""
        }
    });
    let if_block0 = !ctx[1] && create_if_block_2(ctx);
    ioscheckbox = new IosCheckbox({
        props: {
            checked: ctx[0].checkMail,
            changeHandler: ctx[9],
            tooltipText: getMsg("optionAccountsMailCheck_title"),
            $$slots: {
                default: [ create_default_slot$1 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    notifytoggle = new NotifyToggle({
        props: {
            checked: ctx[0].mailNotify,
            changeHandler: ctx[10],
            tooltipText: getMsg("optionAccountsMailNotify_title")
        }
    });
    spinner1 = new Spinner({
        props: {
            show: ctx[2]
        }
    });
    let if_block1 = ((_a = ctx[3]) == null ? void 0 : _a.length) && create_if_block_1$1(ctx);
    let if_block2 = ctx[5] && create_if_block$5(ctx);
    return {
        c() {
            li = element("li");
            button0 = element("button");
            div0 = element("div");
            t0 = space();
            div1 = element("div");
            create_component(spinner0.$$.fragment);
            t1 = space();
            if (if_block0) if_block0.c();
            t2 = space();
            div3 = element("div");
            button1 = element("button");
            div2 = element("div");
            t3 = space();
            span0 = element("span");
            span0.textContent = `${getMsg("optionAccountsFetchBtn")}`;
            t5 = space();
            div4 = element("div");
            create_component(ioscheckbox.$$.fragment);
            t6 = space();
            div5 = element("div");
            create_component(notifytoggle.$$.fragment);
            t7 = space();
            div7 = element("div");
            button2 = element("button");
            div6 = element("div");
            t8 = space();
            div8 = element("div");
            button3 = element("button");
            span1 = element("span");
            t9 = space();
            div11 = element("div");
            div10 = element("div");
            div10.innerHTML = `<div class="ml-auto"></div>`;
            t10 = space();
            create_component(spinner1.$$.fragment);
            t11 = space();
            if (if_block1) if_block1.c();
            t12 = space();
            if (if_block2) if_block2.c();
            attr(div0, "class", "h-5 w-5");
            attr(button0, "class", "flex items-center border-transparent bg-transparent p-0 text-xs text-skin-accent2 hover:bg-transparent");
            button0.disabled = ctx[4];
            attr(div1, "class", "flex items-center gap-1");
            attr(div2, "class", "mr-1 h-5 w-5");
            attr(span0, "class", "text-skin-text");
            attr(button1, "class", "flex items-center border-transparent bg-transparent p-0 text-xs text-skin-accent2 hover:bg-transparent");
            button1.disabled = ctx[4];
            attr(div3, "class", "ml-4");
            attr(div4, "class", "ml-4");
            attr(div5, "class", "ml-4 flex");
            attr(div6, "class", "h-5 w-5");
            attr(button2, "class", "icon-button text-skin-accent");
            button2.disabled = ctx[4];
            attr(div7, "class", "ml-auto");
            attr(span1, "class", "mr-1 h-5 w-5");
            attr(button3, "class", "icon-button");
            button3.disabled = ctx[4];
            attr(div10, "class", "flex justify-between");
            attr(div11, "class", "col-span-full text-xs");
            attr(li, "class", "svelte-ah9z0q");
        },
        m(target, anchor) {
            insert(target, li, anchor);
            append(li, button0);
            append(button0, div0);
            div0.innerHTML = RefreshIcon2;
            append(li, t0);
            append(li, div1);
            mount_component(spinner0, div1, null);
            append(div1, t1);
            if (if_block0) if_block0.m(div1, null);
            append(li, t2);
            append(li, div3);
            append(div3, button1);
            append(button1, div2);
            div2.innerHTML = RefreshIcon2;
            append(button1, t3);
            append(button1, span0);
            append(li, t5);
            append(li, div4);
            mount_component(ioscheckbox, div4, null);
            append(li, t6);
            append(li, div5);
            mount_component(notifytoggle, div5, null);
            append(li, t7);
            append(li, div7);
            append(div7, button2);
            append(button2, div6);
            div6.innerHTML = DeleteIcon;
            append(li, t8);
            append(li, div8);
            append(div8, button3);
            append(button3, span1);
            span1.innerHTML = LoginIcon;
            append(li, t9);
            append(li, div11);
            append(div11, div10);
            append(div11, t10);
            mount_component(spinner1, div11, null);
            append(div11, t11);
            if (if_block1) if_block1.m(div11, null);
            append(div11, t12);
            if (if_block2) if_block2.m(div11, null);
            current = true;
            if (!mounted) {
                dispose = [ listen(button0, "click", ctx[6]), action_destroyer(tooltip.call(null, button0, {
                    content: "update account's information"
                })), listen(button1, "click", ctx[16]), action_destroyer(tooltip.call(null, button1, {
                    content: getMsg("optionAccountsFetchBtnDesc")
                })), listen(button2, "click", ctx[7]), action_destroyer(tooltip.call(null, button2, {
                    content: "remove this account"
                })), action_destroyer(tooltip.call(null, button3, {
                    content: getMsg("optionAccountsReAuthBtn")
                })), listen(button3, "click", ctx[11]) ];
                mounted = true;
            }
        },
        p(ctx2, [dirty]) {
            var _a2;
            if (!current || dirty & 16) button0.disabled = ctx2[4];
            const spinner0_changes = {};
            if (dirty & 2) spinner0_changes.show = ctx2[1];
            spinner0.$set(spinner0_changes);
            if (!ctx2[1]) if (if_block0) if_block0.p(ctx2, dirty); else {
                if_block0 = create_if_block_2(ctx2);
                if_block0.c();
                if_block0.m(div1, null);
            } else if (if_block0) {
                if_block0.d(1);
                if_block0 = null;
            }
            if (!current || dirty & 16) button1.disabled = ctx2[4];
            const ioscheckbox_changes = {};
            if (dirty & 1) ioscheckbox_changes.checked = ctx2[0].checkMail;
            if (dirty & 4194304) ioscheckbox_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            ioscheckbox.$set(ioscheckbox_changes);
            const notifytoggle_changes = {};
            if (dirty & 1) notifytoggle_changes.checked = ctx2[0].mailNotify;
            notifytoggle.$set(notifytoggle_changes);
            if (!current || dirty & 16) button2.disabled = ctx2[4];
            if (!current || dirty & 16) button3.disabled = ctx2[4];
            const spinner1_changes = {};
            if (dirty & 4) spinner1_changes.show = ctx2[2];
            spinner1.$set(spinner1_changes);
            if ((_a2 = ctx2[3]) == null ? void 0 : _a2.length) if (if_block1) if_block1.p(ctx2, dirty); else {
                if_block1 = create_if_block_1$1(ctx2);
                if_block1.c();
                if_block1.m(div11, t12);
            } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
            }
            if (ctx2[5]) if (if_block2) {
                if_block2.p(ctx2, dirty);
                if (dirty & 32) transition_in(if_block2, 1);
            } else {
                if_block2 = create_if_block$5(ctx2);
                if_block2.c();
                transition_in(if_block2, 1);
                if_block2.m(div11, null);
            } else if (if_block2) {
                group_outros();
                transition_out(if_block2, 1, 1, (() => {
                    if_block2 = null;
                }));
                check_outros();
            }
        },
        i(local) {
            if (current) return;
            transition_in(spinner0.$$.fragment, local);
            transition_in(ioscheckbox.$$.fragment, local);
            transition_in(notifytoggle.$$.fragment, local);
            transition_in(spinner1.$$.fragment, local);
            transition_in(if_block2);
            current = true;
        },
        o(local) {
            transition_out(spinner0.$$.fragment, local);
            transition_out(ioscheckbox.$$.fragment, local);
            transition_out(notifytoggle.$$.fragment, local);
            transition_out(spinner1.$$.fragment, local);
            transition_out(if_block2);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(li);
            destroy_component(spinner0);
            if (if_block0) if_block0.d();
            destroy_component(ioscheckbox);
            destroy_component(notifytoggle);
            destroy_component(spinner1);
            if (if_block1) if_block1.d();
            if (if_block2) if_block2.d();
            mounted = false;
            run_all(dispose);
        }
    };
}

function instance$6($$self, $$props, $$invalidate) {
    let $isBlocked;
    component_subscribe($$self, isBlocked, ($$value => $$invalidate(15, $isBlocked = $$value)));
    let {accounts: accounts} = $$props;
    let {acc: acc} = $$props;
    let {authorize: authorize} = $$props;
    let {isAuthorizing: isAuthorizing = false} = $$props;
    let isUpdating2 = false;
    let isUpdatingMessages = false;
    let errorList = [];
    let disabled = false;
    let showMessages = false;
    const updateAcc = async () => {
        $$invalidate(1, isUpdating2 = true);
        isBlocked.block();
        const app = new NotifierApp;
        await app.updateAccounts(accounts || {}, acc.id);
        $$invalidate(1, isUpdating2 = false);
    };
    const deleteHandler = () => void storage.removeAccount([ acc.id ]);
    const getErrors = u => {
        const res = [];
        if (u.error) res.push(u.error);
        if (u.auth.error) res.push(u.auth.error);
        if (!u.auth.refreshToken) res.push("Refresh token is missing or invalid. Please reathorize the account");
        return res;
    };
    const updateMessages = async () => {
        $$invalidate(2, isUpdatingMessages = true);
        isBlocked.block();
        const app = new NotifierApp;
        await app.updateUnreadMsg(acc);
        $$invalidate(2, isUpdatingMessages = false);
        $$invalidate(5, showMessages = true);
    };
    onMount((() => {
        if (!acc.name) void updateAcc();
    }));
    const checkMailCommit = async e => {
        const checked = e.currentTarget.checked;
        $$invalidate(0, acc.checkMail = checked, acc);
        if (!checked) $$invalidate(0, acc.mailNotify = false, acc);
        await storage.saveAccounts(accounts);
    };
    const notifyMailCommit = async e => {
        const checked = e.currentTarget.checked;
        $$invalidate(0, acc.mailNotify = checked, acc);
        if (checked) $$invalidate(0, acc.checkMail = true, acc);
        await storage.saveAccounts(accounts);
    };
    const reAuth = () => authorize(acc.id, updateAcc);
    const click_handler = () => void updateMessages();
    const func = () => {
        $$invalidate(5, showMessages = false);
    };
    $$self.$$set = $$props2 => {
        if ("accounts" in $$props2) $$invalidate(12, accounts = $$props2.accounts);
        if ("acc" in $$props2) $$invalidate(0, acc = $$props2.acc);
        if ("authorize" in $$props2) $$invalidate(13, authorize = $$props2.authorize);
        if ("isAuthorizing" in $$props2) $$invalidate(14, isAuthorizing = $$props2.isAuthorizing);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 49158) $$invalidate(4, disabled = isUpdating2 || isUpdatingMessages || isAuthorizing || $isBlocked);
        if ($$self.$$.dirty & 1) $$invalidate(3, errorList = getErrors(acc));
    };
    return [ acc, isUpdating2, isUpdatingMessages, errorList, disabled, showMessages, updateAcc, deleteHandler, updateMessages, checkMailCommit, notifyMailCommit, reAuth, accounts, authorize, isAuthorizing, $isBlocked, click_handler, func ];
}

class Account extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$6, create_fragment$6, safe_not_equal, {
            accounts: 12,
            acc: 0,
            authorize: 13,
            isAuthorizing: 14
        });
    }
}

function get_each_context$1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[9] = list[i];
    return child_ctx;
}

function create_default_slot_1(ctx) {
    let span2;
    let span0;
    let t1;
    let span1;
    let mounted;
    let dispose;
    return {
        c() {
            span2 = element("span");
            span0 = element("span");
            span0.textContent = `${getMsg("optionAccountsDescription")}`;
            t1 = space();
            span1 = element("span");
            attr(span1, "class", "ml-2 inline-flex h-4 w-4 text-skin-accent2");
            attr(span2, "class", "mt-4 flex items-center");
        },
        m(target, anchor) {
            insert(target, span2, anchor);
            append(span2, span0);
            append(span2, t1);
            append(span2, span1);
            span1.innerHTML = HelpCircleIcon;
            if (!mounted) {
                dispose = action_destroyer(tooltip.call(null, span1, {
                    content: getMsg("helpAccount"),
                    allowHTML: true
                }));
                mounted = true;
            }
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(span2);
            mounted = false;
            dispose();
        }
    };
}

function create_if_block_1(ctx) {
    let ul;
    let each_blocks = [];
    let each_1_lookup = new Map;
    let current;
    let each_value = ensure_array_like(ctx[2]);
    const get_key = ctx2 => ctx2[9].id;
    for (let i = 0; i < each_value.length; i += 1) {
        let child_ctx = get_each_context$1(ctx, each_value, i);
        let key = get_key(child_ctx);
        each_1_lookup.set(key, each_blocks[i] = create_each_block$1(key, child_ctx));
    }
    return {
        c() {
            ul = element("ul");
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
        },
        m(target, anchor) {
            insert(target, ul, anchor);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(ul, null);
            current = true;
        },
        p(ctx2, dirty) {
            if (dirty & 39) {
                each_value = ensure_array_like(ctx2[2]);
                group_outros();
                each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, ul, outro_and_destroy_block, create_each_block$1, null, get_each_context$1);
                check_outros();
            }
        },
        i(local) {
            if (current) return;
            for (let i = 0; i < each_value.length; i += 1) transition_in(each_blocks[i]);
            current = true;
        },
        o(local) {
            for (let i = 0; i < each_blocks.length; i += 1) transition_out(each_blocks[i]);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(ul);
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].d();
        }
    };
}

function create_each_block$1(key_1, ctx) {
    let first;
    let account;
    let current;
    account = new Account({
        props: {
            accounts: ctx[0],
            acc: ctx[9],
            authorize: ctx[5],
            isAuthorizing: ctx[1]
        }
    });
    return {
        key: key_1,
        first: null,
        c() {
            first = empty();
            create_component(account.$$.fragment);
            this.first = first;
        },
        m(target, anchor) {
            insert(target, first, anchor);
            mount_component(account, target, anchor);
            current = true;
        },
        p(new_ctx, dirty) {
            ctx = new_ctx;
            const account_changes = {};
            if (dirty & 1) account_changes.accounts = ctx[0];
            if (dirty & 4) account_changes.acc = ctx[9];
            if (dirty & 2) account_changes.isAuthorizing = ctx[1];
            account.$set(account_changes);
        },
        i(local) {
            if (current) return;
            transition_in(account.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(account.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(first);
            destroy_component(account, detaching);
        }
    };
}

function create_default_slot(ctx) {
    let t_value = getMsg("optionAccountsAddBtn") + "";
    let t;
    return {
        c() {
            t = text(t_value);
        },
        m(target, anchor) {
            insert(target, t, anchor);
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(t);
        }
    };
}

function create_if_block$4(ctx) {
    let div2;
    let span0;
    let span1;
    let t1;
    return {
        c() {
            div2 = element("div");
            span0 = element("span");
            span0.textContent = "Error: ";
            span1 = element("span");
            t1 = text(ctx[3]);
            attr(div2, "class", "mt-2 text-skin-error");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, span0);
            append(div2, span1);
            append(span1, t1);
        },
        p(ctx2, dirty) {
            if (dirty & 8) set_data(t1, ctx2[3]);
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_fragment$5(ctx) {
    var _a;
    let div1;
    let blockdescription;
    let t0;
    let div0;
    let t1;
    let addbutton;
    let t2;
    let current;
    blockdescription = new BlockDescription({
        props: {
            $$slots: {
                default: [ create_default_slot_1 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    let if_block0 = ((_a = ctx[2]) == null ? void 0 : _a.length) && create_if_block_1(ctx);
    addbutton = new AddButton({
        props: {
            clickHandler: ctx[8],
            disabled: ctx[4],
            $$slots: {
                default: [ create_default_slot ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    let if_block1 = ctx[3] && create_if_block$4(ctx);
    return {
        c() {
            div1 = element("div");
            create_component(blockdescription.$$.fragment);
            t0 = space();
            div0 = element("div");
            if (if_block0) if_block0.c();
            t1 = space();
            create_component(addbutton.$$.fragment);
            t2 = space();
            if (if_block1) if_block1.c();
            attr(div0, "class", "my-2");
            attr(div1, "class", "text-sm");
        },
        m(target, anchor) {
            insert(target, div1, anchor);
            mount_component(blockdescription, div1, null);
            append(div1, t0);
            append(div1, div0);
            if (if_block0) if_block0.m(div0, null);
            append(div1, t1);
            mount_component(addbutton, div1, null);
            append(div1, t2);
            if (if_block1) if_block1.m(div1, null);
            current = true;
        },
        p(ctx2, [dirty]) {
            var _a2;
            const blockdescription_changes = {};
            if (dirty & 4096) blockdescription_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            blockdescription.$set(blockdescription_changes);
            if ((_a2 = ctx2[2]) == null ? void 0 : _a2.length) if (if_block0) {
                if_block0.p(ctx2, dirty);
                if (dirty & 4) transition_in(if_block0, 1);
            } else {
                if_block0 = create_if_block_1(ctx2);
                if_block0.c();
                transition_in(if_block0, 1);
                if_block0.m(div0, null);
            } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, (() => {
                    if_block0 = null;
                }));
                check_outros();
            }
            const addbutton_changes = {};
            if (dirty & 16) addbutton_changes.disabled = ctx2[4];
            if (dirty & 4096) addbutton_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            addbutton.$set(addbutton_changes);
            if (ctx2[3]) if (if_block1) if_block1.p(ctx2, dirty); else {
                if_block1 = create_if_block$4(ctx2);
                if_block1.c();
                if_block1.m(div1, null);
            } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
            }
        },
        i(local) {
            if (current) return;
            transition_in(blockdescription.$$.fragment, local);
            transition_in(if_block0);
            transition_in(addbutton.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(blockdescription.$$.fragment, local);
            transition_out(if_block0);
            transition_out(addbutton.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div1);
            destroy_component(blockdescription);
            if (if_block0) if_block0.d();
            destroy_component(addbutton);
            if (if_block1) if_block1.d();
        }
    };
}

function instance$5($$self, $$props, $$invalidate) {
    let $isBlocked;
    let $storageData;
    component_subscribe($$self, isBlocked, ($$value => $$invalidate(6, $isBlocked = $$value)));
    component_subscribe($$self, storageData, ($$value => $$invalidate(7, $storageData = $$value)));
    let accounts = $storageData.accounts;
    let accList = [];
    let authError = "";
    let isAuthorizing = false;
    let disabled = false;
    const authorize = async (id, onSuccess) => {
        $$invalidate(1, isAuthorizing = true);
        try {
            await auth.login(id);
            onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
        } catch (e) {
            console.error(e);
            $$invalidate(3, authError = e.message);
        }
        $$invalidate(1, isAuthorizing = false);
    };
    const func = () => authorize();
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 129) {
            $$invalidate(0, accounts = $storageData.accounts);
            $$invalidate(2, accList = Object.values(accounts || {}));
        }
        if ($$self.$$.dirty & 66) $$invalidate(4, disabled = isAuthorizing || $isBlocked);
    };
    return [ accounts, isAuthorizing, accList, authError, disabled, authorize, $isBlocked, $storageData, func ];
}

class AccountsBlock extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$5, create_fragment$5, safe_not_equal, {});
    }
}

function create_if_block$3(ctx) {
    let h1;
    let t1;
    let section0;
    let heading0;
    let t2;
    let mailblock;
    let t3;
    let accountsblock;
    let t4;
    let section1;
    let heading1;
    let t5;
    let subredditsblock;
    let t6;
    let section2;
    let heading2;
    let t7;
    let searchblock;
    let t8;
    let section3;
    let heading3;
    let t9;
    let followusersblock;
    let t10;
    let div2;
    let current;
    heading0 = new Heading({
        props: {
            id: ctx[1].mail.id,
            name: ctx[1].mail.name
        }
    });
    mailblock = new MailBlock({});
    accountsblock = new AccountsBlock({});
    heading1 = new Heading({
        props: {
            id: ctx[1].subreddit.id,
            name: ctx[1].subreddit.name
        }
    });
    subredditsblock = new SubredditsBlock({});
    heading2 = new Heading({
        props: {
            id: ctx[1]["reddit-search"].id,
            name: ctx[1]["reddit-search"].name
        }
    });
    searchblock = new SearchBlock({});
    heading3 = new Heading({
        props: {
            id: ctx[1]["follow-user"].id,
            name: ctx[1]["follow-user"].name
        }
    });
    followusersblock = new FollowUsersBlock({});
    return {
        c() {
            h1 = element("h1");
            h1.textContent = `${getMsg("optionsNavWatch")}`;
            t1 = space();
            section0 = element("section");
            create_component(heading0.$$.fragment);
            t2 = space();
            create_component(mailblock.$$.fragment);
            t3 = space();
            create_component(accountsblock.$$.fragment);
            t4 = space();
            section1 = element("section");
            create_component(heading1.$$.fragment);
            t5 = space();
            create_component(subredditsblock.$$.fragment);
            t6 = space();
            section2 = element("section");
            create_component(heading2.$$.fragment);
            t7 = space();
            create_component(searchblock.$$.fragment);
            t8 = space();
            section3 = element("section");
            create_component(heading3.$$.fragment);
            t9 = space();
            create_component(followusersblock.$$.fragment);
            t10 = space();
            div2 = element("div");
            attr(h1, "class", "mb-2 text-xl font-bold uppercase tracking-widest text-skin-gray");
            attr(section0, "class", "svelte-bh5cvg");
            attr(section1, "class", "svelte-bh5cvg");
            attr(section2, "class", "svelte-bh5cvg");
            attr(section3, "class", "svelte-bh5cvg");
            attr(div2, "class", "h-[80vh]");
        },
        m(target, anchor) {
            insert(target, h1, anchor);
            insert(target, t1, anchor);
            insert(target, section0, anchor);
            mount_component(heading0, section0, null);
            append(section0, t2);
            mount_component(mailblock, section0, null);
            append(section0, t3);
            mount_component(accountsblock, section0, null);
            insert(target, t4, anchor);
            insert(target, section1, anchor);
            mount_component(heading1, section1, null);
            append(section1, t5);
            mount_component(subredditsblock, section1, null);
            insert(target, t6, anchor);
            insert(target, section2, anchor);
            mount_component(heading2, section2, null);
            append(section2, t7);
            mount_component(searchblock, section2, null);
            insert(target, t8, anchor);
            insert(target, section3, anchor);
            mount_component(heading3, section3, null);
            append(section3, t9);
            mount_component(followusersblock, section3, null);
            insert(target, t10, anchor);
            insert(target, div2, anchor);
            current = true;
        },
        p: noop,
        i(local) {
            if (current) return;
            transition_in(heading0.$$.fragment, local);
            transition_in(mailblock.$$.fragment, local);
            transition_in(accountsblock.$$.fragment, local);
            transition_in(heading1.$$.fragment, local);
            transition_in(subredditsblock.$$.fragment, local);
            transition_in(heading2.$$.fragment, local);
            transition_in(searchblock.$$.fragment, local);
            transition_in(heading3.$$.fragment, local);
            transition_in(followusersblock.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(heading0.$$.fragment, local);
            transition_out(mailblock.$$.fragment, local);
            transition_out(accountsblock.$$.fragment, local);
            transition_out(heading1.$$.fragment, local);
            transition_out(subredditsblock.$$.fragment, local);
            transition_out(heading2.$$.fragment, local);
            transition_out(searchblock.$$.fragment, local);
            transition_out(heading3.$$.fragment, local);
            transition_out(followusersblock.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) {
                detach(h1);
                detach(t1);
                detach(section0);
                detach(t4);
                detach(section1);
                detach(t6);
                detach(section2);
                detach(t8);
                detach(section3);
                detach(t10);
                detach(div2);
            }
            destroy_component(heading0);
            destroy_component(mailblock);
            destroy_component(accountsblock);
            destroy_component(heading1);
            destroy_component(subredditsblock);
            destroy_component(heading2);
            destroy_component(searchblock);
            destroy_component(heading3);
            destroy_component(followusersblock);
        }
    };
}

function create_fragment$4(ctx) {
    let div2;
    let current;
    let if_block = ctx[0].isLoaded && create_if_block$3(ctx);
    return {
        c() {
            div2 = element("div");
            if (if_block) if_block.c();
            attr(div2, "class", "w-full");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            if (if_block) if_block.m(div2, null);
            current = true;
        },
        p(ctx2, [dirty]) {
            if (ctx2[0].isLoaded) if (if_block) {
                if_block.p(ctx2, dirty);
                if (dirty & 1) transition_in(if_block, 1);
            } else {
                if_block = create_if_block$3(ctx2);
                if_block.c();
                transition_in(if_block, 1);
                if_block.m(div2, null);
            } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, (() => {
                    if_block = null;
                }));
                check_outros();
            }
        },
        i(local) {
            if (current) return;
            transition_in(if_block);
            current = true;
        },
        o(local) {
            transition_out(if_block);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div2);
            if (if_block) if_block.d();
        }
    };
}

function instance$4($$self, $$props, $$invalidate) {
    let $storageData;
    component_subscribe($$self, storageData, ($$value => $$invalidate(0, $storageData = $$value)));
    const dataPromise = storage.getAllData();
    onMount((() => {
        void (async () => {
            var _a;
            await dataPromise;
            await tick();
            const {hash: hash2} = document.location;
            if (hash2) (_a = document.body.querySelector(hash2)) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
        })();
    }));
    const s = routes.watch.sections;
    return [ $storageData, s ];
}

class WatchPage extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$4, create_fragment$4, safe_not_equal, {});
    }
}

const get_qr_slot_changes = dirty => ({});

const get_qr_slot_context = ctx => ({});

function create_else_block(ctx) {
    let html_tag;
    let html_anchor;
    return {
        c() {
            html_tag = new HtmlTag(false);
            html_anchor = empty();
            html_tag.a = html_anchor;
        },
        m(target, anchor) {
            html_tag.m(CopyIcon, target, anchor);
            insert(target, html_anchor, anchor);
        },
        d(detaching) {
            if (detaching) {
                detach(html_anchor);
                html_tag.d();
            }
        }
    };
}

function create_if_block$2(ctx) {
    let html_tag;
    let html_anchor;
    return {
        c() {
            html_tag = new HtmlTag(false);
            html_anchor = empty();
            html_tag.a = html_anchor;
        },
        m(target, anchor) {
            html_tag.m(CheckMarkIcon, target, anchor);
            insert(target, html_anchor, anchor);
        },
        d(detaching) {
            if (detaching) {
                detach(html_anchor);
                html_tag.d();
            }
        }
    };
}

function create_fragment$3(ctx) {
    let li;
    let b;
    let t0;
    let t1;
    let div2;
    let div0;
    let span0;
    let t2;
    let t3;
    let button0;
    let t4;
    let button1;
    let t5;
    let div1;
    let span1;
    let current;
    let mounted;
    let dispose;
    function select_block_type(ctx2, dirty) {
        if (ctx2[2]) return create_if_block$2;
        return create_else_block;
    }
    let current_block_type = select_block_type(ctx);
    let if_block = current_block_type(ctx);
    const qr_slot_template = ctx[7].qr;
    const qr_slot = create_slot(qr_slot_template, ctx, ctx[6], get_qr_slot_context);
    return {
        c() {
            li = element("li");
            b = element("b");
            t0 = text(ctx[1]);
            t1 = space();
            div2 = element("div");
            div0 = element("div");
            span0 = element("span");
            t2 = text(ctx[0]);
            t3 = space();
            button0 = element("button");
            if_block.c();
            t4 = space();
            button1 = element("button");
            t5 = space();
            div1 = element("div");
            span1 = element("span");
            if (qr_slot) qr_slot.c();
            attr(b, "class", "mb-1");
            attr(span0, "class", "mr-4 break-all");
            attr(button0, "class", "ml-auto h-5 w-5 flex-shrink-0 hover:text-skin-accent2");
            attr(button0, "title", "copy the address");
            toggle_class(button0, "text-skin-success", ctx[2]);
            attr(button1, "class", "ml-1 h-5 w-5 hover:text-skin-accent2");
            attr(button1, "title", "show QR code");
            attr(div0, "class", "flex");
            attr(span1, "class", "h-56 w-56");
            attr(div1, "class", "flex justify-center transition-all duration-700");
            toggle_class(div1, "hidden", !ctx[3]);
            attr(div2, "class", "rounded-sm border border-skin-delimiter bg-skin-bg2 py-1 px-1 text-sm");
        },
        m(target, anchor) {
            insert(target, li, anchor);
            append(li, b);
            append(b, t0);
            append(li, t1);
            append(li, div2);
            append(div2, div0);
            append(div0, span0);
            append(span0, t2);
            append(div0, t3);
            append(div0, button0);
            if_block.m(button0, null);
            append(div0, t4);
            append(div0, button1);
            button1.innerHTML = QRCode;
            append(div2, t5);
            append(div2, div1);
            append(div1, span1);
            if (qr_slot) qr_slot.m(span1, null);
            current = true;
            if (!mounted) {
                dispose = [ listen(button0, "click", ctx[4]), listen(button1, "click", ctx[5]) ];
                mounted = true;
            }
        },
        p(ctx2, [dirty]) {
            if (!current || dirty & 2) set_data(t0, ctx2[1]);
            if (!current || dirty & 1) set_data(t2, ctx2[0]);
            if (current_block_type !== (current_block_type = select_block_type(ctx2))) {
                if_block.d(1);
                if_block = current_block_type(ctx2);
                if (if_block) {
                    if_block.c();
                    if_block.m(button0, null);
                }
            }
            if (!current || dirty & 4) toggle_class(button0, "text-skin-success", ctx2[2]);
            if (qr_slot) if (qr_slot.p && (!current || dirty & 64)) update_slot_base(qr_slot, qr_slot_template, ctx2, ctx2[6], !current ? get_all_dirty_from_scope(ctx2[6]) : get_slot_changes(qr_slot_template, ctx2[6], dirty, get_qr_slot_changes), get_qr_slot_context);
            if (!current || dirty & 8) toggle_class(div1, "hidden", !ctx2[3]);
        },
        i(local) {
            if (current) return;
            transition_in(qr_slot, local);
            current = true;
        },
        o(local) {
            transition_out(qr_slot, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(li);
            if_block.d();
            if (qr_slot) qr_slot.d(detaching);
            mounted = false;
            run_all(dispose);
        }
    };
}

function instance$3($$self, $$props, $$invalidate) {
    let {$$slots: slots = {}, $$scope: $$scope} = $$props;
    let {address: address} = $$props;
    let {name: name} = $$props;
    let wasCopied = false;
    const copyAddress = async () => {
        try {
            await navigator.clipboard.writeText(address);
            $$invalidate(2, wasCopied = true);
            setTimeout((() => $$invalidate(2, wasCopied = false)), 2e3);
        } catch (error) {
            console.error(error);
        }
    };
    let isOpened = false;
    const toggleQRCode = () => {
        $$invalidate(3, isOpened = !isOpened);
    };
    $$self.$$set = $$props2 => {
        if ("address" in $$props2) $$invalidate(0, address = $$props2.address);
        if ("name" in $$props2) $$invalidate(1, name = $$props2.name);
        if ("$$scope" in $$props2) $$invalidate(6, $$scope = $$props2.$$scope);
    };
    return [ address, name, wasCopied, isOpened, copyAddress, toggleQRCode, $$scope, slots ];
}

class DonateAddress extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$3, create_fragment$3, safe_not_equal, {
            address: 0,
            name: 1
        });
    }
}

function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[1] = list[i].name;
    child_ctx[2] = list[i].address;
    child_ctx[3] = list[i].QRCode;
    return child_ctx;
}

function create_qr_slot(ctx) {
    let span;
    let raw_value = ctx[3] + "";
    return {
        c() {
            span = element("span");
            attr(span, "slot", "qr");
        },
        m(target, anchor) {
            insert(target, span, anchor);
            span.innerHTML = raw_value;
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(span);
        }
    };
}

function create_each_block(ctx) {
    let donateaddress;
    let current;
    donateaddress = new DonateAddress({
        props: {
            address: ctx[2],
            name: ctx[1],
            $$slots: {
                qr: [ create_qr_slot ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    return {
        c() {
            create_component(donateaddress.$$.fragment);
        },
        m(target, anchor) {
            mount_component(donateaddress, target, anchor);
            current = true;
        },
        p(ctx2, dirty) {
            const donateaddress_changes = {};
            if (dirty & 64) donateaddress_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            donateaddress.$set(donateaddress_changes);
        },
        i(local) {
            if (current) return;
            transition_in(donateaddress.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(donateaddress.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            destroy_component(donateaddress, detaching);
        }
    };
}

function create_fragment$2(ctx) {
    let div4;
    let div3;
    let main2;
    let h1;
    let span0;
    let t0;
    let span1;
    let t2;
    let section;
    let h2;
    let t4;
    let div2;
    let div0;
    let t7;
    let div1;
    let h31;
    let t9;
    let ul;
    let current;
    let each_value = ensure_array_like(ctx[0]);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    const out = i => transition_out(each_blocks[i], 1, 1, (() => {
        each_blocks[i] = null;
    }));
    return {
        c() {
            div4 = element("div");
            div3 = element("div");
            main2 = element("main");
            h1 = element("h1");
            span0 = element("span");
            t0 = space();
            span1 = element("span");
            span1.textContent = "Support extension’s development and maintenance";
            t2 = space();
            section = element("section");
            h2 = element("h2");
            h2.textContent = "Crypto";
            t4 = space();
            div2 = element("div");
            div0 = element("div");
            div0.innerHTML = `<h3 class="mb-4 text-sm" data-l10n-id="donateNowPayments">in any cryptocurrency via NOWPayments</h3> <a href="https://nowpayments.io/donation/flytaly" class="inline" target="_blank" title="nowpayments donation" rel="noreferrer"><img class="h-16 w-auto" src="https://nowpayments.io/images/embeds/donation-button-black.svg" alt="Crypto donation button by NOWPayments"/></a>`;
            t7 = space();
            div1 = element("div");
            h31 = element("h3");
            h31.textContent = "or directly to the addresses";
            t9 = space();
            ul = element("ul");
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            attr(span0, "class", "h-6 w-6 text-rose-500");
            attr(h1, "class", "mx-auto flex items-center justify-center gap-1 text-lg font-bold text-skin-accent");
            attr(h2, "class", "mb-4 text-lg font-bold");
            attr(h31, "class", "mb-4 text-sm");
            attr(ul, "class", "grid grid-cols-2 gap-6");
            attr(div2, "class", "ml-8 space-y-8");
            attr(main2, "class", "my-5 space-y-10");
            attr(div3, "class", "w-full max-w-4xl text-base");
        },
        m(target, anchor) {
            insert(target, div4, anchor);
            append(div4, div3);
            append(div3, main2);
            append(main2, h1);
            append(h1, span0);
            span0.innerHTML = HeartIcon;
            append(h1, t0);
            append(h1, span1);
            append(main2, t2);
            append(main2, section);
            append(section, h2);
            append(section, t4);
            append(section, div2);
            append(div2, div0);
            append(div2, t7);
            append(div2, div1);
            append(div1, h31);
            append(div1, t9);
            append(div1, ul);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(ul, null);
            current = true;
        },
        p(ctx2, [dirty]) {
            if (dirty & 1) {
                each_value = ensure_array_like(ctx2[0]);
                let i;
                for (i = 0; i < each_value.length; i += 1) {
                    const child_ctx = get_each_context(ctx2, each_value, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                        transition_in(each_blocks[i], 1);
                    } else {
                        each_blocks[i] = create_each_block(child_ctx);
                        each_blocks[i].c();
                        transition_in(each_blocks[i], 1);
                        each_blocks[i].m(ul, null);
                    }
                }
                group_outros();
                for (i = each_value.length; i < each_blocks.length; i += 1) out(i);
                check_outros();
            }
        },
        i(local) {
            if (current) return;
            for (let i = 0; i < each_value.length; i += 1) transition_in(each_blocks[i]);
            current = true;
        },
        o(local) {
            each_blocks = each_blocks.filter(Boolean);
            for (let i = 0; i < each_blocks.length; i += 1) transition_out(each_blocks[i]);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div4);
            destroy_each(each_blocks, detaching);
        }
    };
}

function instance$2($$self) {
    const addresses = [ {
        name: "Bitcoin (BTC)",
        address: "bc1q6w68rerfyy7ex45fjwhwfe36zs5qjvwwl3xgz5",
        QRCode: QRCodeBTC
    }, {
        name: "Ethereum (ETH)",
        address: "0xE36CeaEa3Da6f24A629450b927cd380973E72DD9",
        QRCode: QRCodeETH
    }, {
        name: "Litecoin (LTC)",
        address: "LTzrVCTUobG7XmDAjMYdRbAF22oArZGoVZ",
        QRCode: QRCodeLTC
    }, {
        name: "Doge",
        address: "DGyddoAuhfnHfF3qxpv9Zsrt3H399i4Rxe",
        QRCode: QRCodeDoge
    }, {
        name: "Stellar (XLM)",
        address: "GCWW6CLB2L3H5SYDSKFG2PWNISLRQDILZXPXTVU64VV5WAKFPMOINMNF",
        QRCode: QRCodeXLM
    } ];
    return [ addresses ];
}

class DonatePage extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
    }
}

const ReddixLogo = '<svg viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_141_344)">\n<path d="M0 3.81837C0 1.70954 1.98169 0 4.42623 0H25.5738C28.0183 0 30 1.70954 30 3.81837V45.8825C30 47.5478 28.7633 48.9672 27.034 49.4882C26.1562 49.7526 25.2388 49.4261 24.4782 48.9143L15.0726 42.5847L5.63329 49.2039C4.89408 49.7223 4.00006 50.0639 3.12724 49.833C1.31899 49.3547 0 47.9028 0 46.1816V3.81837Z" fill="currentColor"/>\n<path d="M14.6569 18.3824L15.8666 13.2353H20.9472" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M20.2214 15.6863C21.5576 15.6863 22.6407 14.589 22.6407 13.2353C22.6407 11.8817 21.5576 10.7843 20.2214 10.7843C18.8852 10.7843 17.802 11.8817 17.802 13.2353C17.802 14.589 18.8852 15.6863 20.2214 15.6863Z" fill="white"/>\n<path d="M15.0683 32.3529C20.8389 32.3529 25.2739 29.0609 25.2739 25C25.2739 24.7863 25.2616 24.5753 25.2375 24.3675C25.5841 24.0234 25.8521 23.5861 25.9995 23.0793C26.4536 21.5184 25.5923 19.8892 24.0756 19.4403C23.3367 19.2216 22.5786 19.3234 21.9428 19.6658C20.1484 18.5516 17.7529 17.8922 15.0683 17.8922C12.3475 17.8922 9.9236 18.5695 8.12149 19.7111C7.46974 19.3327 6.67832 19.2122 5.9078 19.4403C4.39115 19.8892 3.52978 21.5184 3.98387 23.0793C4.15054 23.6522 4.47128 24.1363 4.88553 24.4974C4.87032 24.663 4.86261 24.8306 4.86261 25C4.86261 29.0609 9.29763 32.3529 15.0683 32.3529Z" fill="white"/>\n<path d="M12.9355 24.0196C12.9355 25.1025 12.0689 25.9804 11 25.9804C9.93106 25.9804 9.06451 25.1025 9.06451 24.0196C9.06451 22.9367 9.93106 22.0588 11 22.0588C12.0689 22.0588 12.9355 22.9367 12.9355 24.0196Z" fill="#E85728"/>\n<path d="M20.1935 24.0196C20.1935 25.1025 19.327 25.9804 18.2581 25.9804C17.1891 25.9804 16.3226 25.1025 16.3226 24.0196C16.3226 22.9367 17.1891 22.0588 18.2581 22.0588C19.327 22.0588 20.1935 22.9367 20.1935 24.0196Z" fill="#E85728"/>\n<path d="M18.8386 28.2476C19.3794 28.3633 19.6381 28.9668 19.219 29.3275C18.9028 29.5996 18.518 29.8402 18.0767 30.0389C17.2179 30.4258 16.188 30.6349 15.1307 30.6372C14.0733 30.6396 13.0412 30.4349 12.1781 30.0519C11.7342 29.8549 11.3464 29.6157 11.027 29.3447C10.6053 28.9869 10.8598 28.3813 11.4001 28.2631C11.7559 28.1853 12.1142 28.3614 12.3812 28.6091C12.6024 28.8143 12.882 28.9942 13.2082 29.139C13.7684 29.3876 14.4382 29.5204 15.1244 29.5189C15.8107 29.5174 16.479 29.3816 17.0364 29.1306C17.3585 28.9855 17.6343 28.806 17.8525 28.6018C18.1202 28.3511 18.48 28.171 18.8386 28.2476Z" fill="#A63612"/>\n<path d="M21.7952 31.7464C22.3539 32.0732 22.3879 32.8604 21.8186 33.1685C20.996 33.6136 20.0751 33.9786 19.0845 34.25C17.5967 34.6577 15.9886 34.8444 14.3767 34.7966C12.7648 34.7488 11.1893 34.4676 9.76421 33.9735C8.84467 33.6546 8.0026 33.2522 7.26208 32.7798C6.69923 32.4207 6.80085 31.6168 7.40136 31.3251C7.73926 31.1609 8.13959 31.2196 8.44279 31.4414C9.12004 31.9369 9.92774 32.3511 10.8296 32.6638C11.9574 33.0549 13.2042 33.2774 14.4798 33.3152C15.7555 33.3531 17.028 33.2053 18.2055 32.8827C19.1674 32.6191 20.0461 32.2442 20.8002 31.7772C21.1037 31.5893 21.487 31.5661 21.7952 31.7464Z" fill="white"/>\n<path d="M15 5C15.5523 5 16 4.55228 16 4C16 3.44772 15.5523 3 15 3C14.4477 3 14 3.44772 14 4C14 4.55228 14.4477 5 15 5Z" fill="white"/>\n<path d="M4 2V6H6V5.2H5V2.8H6V2H4Z" fill="white"/>\n<path d="M26 2V6H24V5.2H25V2.8H24V2H26Z" fill="white"/>\n</g>\n<defs>\n<clipPath id="clip0_141_344">\n<rect width="30" height="50" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n';

function create_if_block$1(ctx) {
    let div3;
    let div2;
    let div0;
    let a0;
    let t0;
    let div1;
    let p0;
    let span;
    let t1;
    let a1;
    let t2;
    let t3;
    let t4;
    let button;
    let t6;
    let p1;
    let mounted;
    let dispose;
    return {
        c() {
            div3 = element("div");
            div2 = element("div");
            div0 = element("div");
            a0 = element("a");
            t0 = space();
            div1 = element("div");
            p0 = element("p");
            span = element("span");
            t1 = text("Check out ");
            a1 = element("a");
            t2 = text("Reddix");
            t3 = text(" extension");
            t4 = space();
            button = element("button");
            button.textContent = "⨯";
            t6 = space();
            p1 = element("p");
            p1.textContent = "to search in your Reddit saved items";
            attr(a0, "class", "w-6 h-6 text-orange-700");
            attr(a0, "href", ctx[1]);
            attr(a0, "target", "_blank");
            attr(div0, "class", "w-6 h-6 text-orange-700");
            attr(a1, "href", ctx[1]);
            attr(a1, "class", "font-bold text-sm");
            attr(a1, "target", "_blank");
            attr(button, "title", "close");
            attr(button, "class", "font-mono text-base font-bold hover:text-skin-accent");
            attr(p0, "class", "flex justify-between gap-2");
            attr(p1, "class", "text-xs text-skin-gray");
            attr(div2, "class", "flex gap-2");
            attr(div3, "class", "ring-1 hover:ring-2 px-2 py-1 ring-skin-delimiter rounded text-skin-text");
        },
        m(target, anchor) {
            insert(target, div3, anchor);
            append(div3, div2);
            append(div2, div0);
            append(div0, a0);
            a0.innerHTML = ReddixLogo;
            append(div2, t0);
            append(div2, div1);
            append(div1, p0);
            append(p0, span);
            append(span, t1);
            append(span, a1);
            append(a1, t2);
            append(span, t3);
            append(p0, t4);
            append(p0, button);
            append(div1, t6);
            append(div1, p1);
            if (!mounted) {
                dispose = listen(button, "click", ctx[2]);
                mounted = true;
            }
        },
        p: noop,
        d(detaching) {
            if (detaching) detach(div3);
            mounted = false;
            dispose();
        }
    };
}

function create_fragment$1(ctx) {
    let if_block_anchor;
    let if_block = ctx[0] && create_if_block$1(ctx);
    return {
        c() {
            if (if_block) if_block.c();
            if_block_anchor = empty();
        },
        m(target, anchor) {
            if (if_block) if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
        },
        p(ctx2, [dirty]) {
            if (ctx2[0]) if (if_block) if_block.p(ctx2, dirty); else {
                if_block = create_if_block$1(ctx2);
                if_block.c();
                if_block.m(if_block_anchor.parentNode, if_block_anchor);
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(if_block_anchor);
            if (if_block) if_block.d(detaching);
        }
    };
}

function instance$1($$self, $$props, $$invalidate) {
    let isShown = false;
    const reddixHref = "https://chromewebstore.google.com/detail/reddix-reddit-bookmarks/mbedpjfdcabldemjmbkngheehfaelohe";
    storage.getLocal({
        showReddixPromo: true
    }).then((({showReddixPromo: showReddixPromo}) => {
        $$invalidate(0, isShown = showReddixPromo);
    }));
    function hidePromo() {
        $$invalidate(0, isShown = false);
        storage.setLocal({
            showReddixPromo: false
        });
    }
    return [ isShown, reddixHref, hidePromo ];
}

class ReddixPromo extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
    }
}

function create_if_block(ctx) {
    let div2;
    let div0;
    let t0;
    let div1;
    return {
        c() {
            div2 = element("div");
            div0 = element("div");
            t0 = space();
            div1 = element("div");
            div1.textContent = "Updating";
            attr(div0, "class", "mr-1 h-4 w-4");
            toggle_class(div0, "animate-spin", ctx[2]);
            attr(div2, "class", "flex items-center rounded-md border border-skin-delimiter p-1");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, div0);
            div0.innerHTML = RefreshIcon;
            append(div2, t0);
            append(div2, div1);
        },
        p(ctx2, dirty) {
            if (dirty & 4) toggle_class(div0, "animate-spin", ctx2[2]);
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_fragment(ctx) {
    let title_value;
    let t0;
    let div5;
    let div0;
    let sidebar;
    let t1;
    let div3;
    let div2;
    let div1;
    let shortinfo;
    let t2;
    let reddixpromo;
    let t3;
    let t4;
    let switch_instance;
    let t5;
    let div4;
    let current;
    document.title = title_value = ctx[1].name;
    sidebar = new Sidebar({
        props: {
            current: ctx[0]
        }
    });
    shortinfo = new ShortInfo({});
    reddixpromo = new ReddixPromo({});
    let if_block = ctx[2] && create_if_block(ctx);
    var switch_value = ctx[1].cmp;
    function switch_props(ctx2, dirty) {
        return {};
    }
    if (switch_value) switch_instance = construct_svelte_component(switch_value, switch_props());
    return {
        c() {
            t0 = space();
            div5 = element("div");
            div0 = element("div");
            create_component(sidebar.$$.fragment);
            t1 = space();
            div3 = element("div");
            div2 = element("div");
            div1 = element("div");
            create_component(shortinfo.$$.fragment);
            t2 = space();
            create_component(reddixpromo.$$.fragment);
            t3 = space();
            if (if_block) if_block.c();
            t4 = space();
            if (switch_instance) create_component(switch_instance.$$.fragment);
            t5 = space();
            div4 = element("div");
            attr(div1, "class", "flex justify-between w-full gap-2");
            attr(div2, "class", "mb-5 mt-4 flex items-center justify-between");
            attr(div3, "class", "w-full");
            attr(div4, "class", "hidden w-52 xl:block");
            attr(div5, "class", "mx-auto grid max-w-[100rem] grid-cols-[max-content,1fr] justify-center gap-x-4 p-3 pt-0 xl:grid-cols-[max-content,1fr,min-content]");
        },
        m(target, anchor) {
            insert(target, t0, anchor);
            insert(target, div5, anchor);
            append(div5, div0);
            mount_component(sidebar, div0, null);
            append(div5, t1);
            append(div5, div3);
            append(div3, div2);
            append(div2, div1);
            mount_component(shortinfo, div1, null);
            append(div1, t2);
            mount_component(reddixpromo, div1, null);
            append(div2, t3);
            if (if_block) if_block.m(div2, null);
            append(div3, t4);
            if (switch_instance) mount_component(switch_instance, div3, null);
            append(div5, t5);
            append(div5, div4);
            current = true;
        },
        p(ctx2, [dirty]) {
            if ((!current || dirty & 2) && title_value !== (title_value = ctx2[1].name)) document.title = title_value;
            const sidebar_changes = {};
            if (dirty & 1) sidebar_changes.current = ctx2[0];
            sidebar.$set(sidebar_changes);
            if (ctx2[2]) if (if_block) if_block.p(ctx2, dirty); else {
                if_block = create_if_block(ctx2);
                if_block.c();
                if_block.m(div2, null);
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
            if (dirty & 2 && switch_value !== (switch_value = ctx2[1].cmp)) {
                if (switch_instance) {
                    group_outros();
                    const old_component = switch_instance;
                    transition_out(old_component.$$.fragment, 1, 0, (() => {
                        destroy_component(old_component, 1);
                    }));
                    check_outros();
                }
                if (switch_value) {
                    switch_instance = construct_svelte_component(switch_value, switch_props());
                    create_component(switch_instance.$$.fragment);
                    transition_in(switch_instance.$$.fragment, 1);
                    mount_component(switch_instance, div3, null);
                } else switch_instance = null;
            }
        },
        i(local) {
            if (current) return;
            transition_in(sidebar.$$.fragment, local);
            transition_in(shortinfo.$$.fragment, local);
            transition_in(reddixpromo.$$.fragment, local);
            if (switch_instance) transition_in(switch_instance.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(sidebar.$$.fragment, local);
            transition_out(shortinfo.$$.fragment, local);
            transition_out(reddixpromo.$$.fragment, local);
            if (switch_instance) transition_out(switch_instance.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) {
                detach(t0);
                detach(div5);
            }
            destroy_component(sidebar);
            destroy_component(shortinfo);
            destroy_component(reddixpromo);
            if (if_block) if_block.d();
            if (switch_instance) destroy_component(switch_instance);
        }
    };
}

function instance($$self, $$props, $$invalidate) {
    let $isUpdating;
    component_subscribe($$self, isUpdating, ($$value => $$invalidate(2, $isUpdating = $$value)));
    let {pageId: pageId = "settings"} = $$props;
    onMount((() => {
        void applyTheme();
        nProgress.configure({
            showSpinner: false
        });
    }));
    let page = {
        cmp: SettingsPage,
        name: getMsg("optionsNavSettings")
    };
    $$self.$$set = $$props2 => {
        if ("pageId" in $$props2) $$invalidate(0, pageId = $$props2.pageId);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 1) switch (pageId) {
          case "info":
            $$invalidate(1, page = {
                cmp: InfoPage,
                name: getMsg("optionsNavInfo")
            });
            break;

          case "import-export":
            $$invalidate(1, page = {
                cmp: Backup,
                name: getMsg("optionsNavImportExport")
            });
            break;

          case "watch":
            $$invalidate(1, page = {
                cmp: WatchPage,
                name: getMsg("optionsNavWatch")
            });
            break;

          case "donate":
            $$invalidate(1, page = {
                cmp: DonatePage,
                name: "Donate"
            });
            break;

          default:
            $$invalidate(1, page = {
                cmp: SettingsPage,
                name: getMsg("optionsNavSettings")
            });
        }
    };
    return [ pageId, page, $isUpdating ];
}

class OptionsApp extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance, create_fragment, safe_not_equal, {
            pageId: 0
        });
    }
}

export { OptionsApp as O };
