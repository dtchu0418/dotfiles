import "./modulepreload-polyfill-C-G4TmQA.js";

import { b as browser, S as SvelteComponent, i as init, s as safe_not_equal, e as empty, a as insert, g as group_outros, t as transition_out, c as check_outros, d as transition_in, f as detach, h as bubble, j as create_slot, k as element, l as space, m as attr, n as toggle_class, o as append, p as listen, u as update_slot_base, q as get_all_dirty_from_scope, r as get_slot_changes, v as text, w as set_data, x as getMsg, y as create_component, z as getInboxUrl, A as mount_component, B as destroy_component, C as component_subscribe, D as storageData, E as isUpdating, F as null_to_empty, R as RefreshIcon, O as OpenInNew, G as noop, H as SettingsIcon, I as storage, J as sendMessage, K as HtmlTag, L as quadOut, M as onMount, N as binding_callbacks, P as src_url_equal, Q as RedditObjectKind, T as is_function, U as ensure_array_like, V as update_keyed_each, W as fix_and_outro_and_destroy_block, X as add_render_callback, Y as create_bidirectional_transition, Z as slide, _ as fix_position, $ as add_transform, a0 as create_animation, a1 as flip, a2 as create_out_transition, a3 as CheckMarkIcon, a4 as WarningIcon, a5 as FilterOnIcon, a6 as NotifyOffIcon, a7 as NotifyIcon, a8 as constructUrl, a9 as getItemTitle, aa as stop_propagation, ab as prevent_default, ac as idToUserIdx, ad as getSubredditUrl, ae as formatError, af as getSearchQueryUrl, ag as getUserProfileUrl, ah as outro_and_destroy_block, ai as applyTheme, aj as nProgress } from "./apply-theme-DaGwrYRB.js";

function openLinksOnClick() {
    window.addEventListener("click", (e => {
        const aElem = e.target.closest("a");
        if (aElem && aElem.href) void browser.tabs.create({
            url: aElem.href,
            active: true
        });
    }));
}

function focusNextRowElement(current, reverse = false) {
    const rows = document.body.querySelectorAll(`\n    [data-keys-target="list-row"],\n    [data-keys-target="post-row"]\n    `);
    if (!rows) return;
    const {length: length} = rows;
    let index = reverse ? length : -1;
    for (let i = 0; i < length; i += 1) if (rows[i] === current) {
        index = i;
        break;
    }
    index = reverse ? (index || length) - 1 : (index + 1) % length;
    rows[index].focus();
}

const isRow = elem => [ "list-row", "post-row" ].includes(elem.dataset.keysTarget || "");

const isPostRow = elem => elem.dataset.keysTarget === "post-row";

const isHeaderRow = elem => elem.dataset.keysTarget === "list-row";

function focusNextRowInGroup(target) {
    const li = target.closest("li");
    if (!li) return;
    let row = null;
    if (li.nextElementSibling) row = li.nextElementSibling.firstElementChild; else if (li.previousElementSibling) row = li.previousElementSibling.firstElementChild;
    if (row && isPostRow(row)) row.focus();
}

function getGroupHeader(elem) {
    const container = elem.closest('[data-keys-target="list-container"]');
    const header = (container == null ? void 0 : container.querySelector('[data-keys-target="list-row"]')) || null;
    if ((header == null ? void 0 : header.dataset.keysTarget) === "list-row") return header;
}

function handleKeydownEvent(e) {
    const {key: key, code: code} = e;
    const target = e.target;
    if ([ " ", "ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Backspace" ].includes(key)) e.preventDefault();
    if (key === "ArrowDown" || code === "KeyJ") focusNextRowElement(target);
    if (key === "ArrowUp" || code === "KeyK") focusNextRowElement(target, true);
    if (key === "ArrowRight" || key === "Enter" || code === "KeyL") {
        if (isHeaderRow(target)) return target.click();
        if (isPostRow(target)) {
            const link = target.querySelector('a[data-keys-target="post-link"]');
            link == null ? void 0 : link.click();
        }
    }
    if (key === "ArrowLeft" || key === "Backspace" || code === "KeyH") {
        if (isHeaderRow(target)) return target.click();
        if (isPostRow(target)) {
            const groupHeader = getGroupHeader(target);
            groupHeader == null ? void 0 : groupHeader.click();
            groupHeader == null ? void 0 : groupHeader.focus();
        }
    }
    if (code === "Space") {
        if (!isRow(target)) return;
        const button = target.querySelector('[data-keys-target="check-mark"] button');
        if (!button) return;
        focusNextRowInGroup(target);
        button.click();
    }
    if (code === "KeyP") if (isPostRow(target)) {
        const btn = target.querySelector('[data-keys-target="pin-post"] button');
        if (!btn) return;
        focusNextRowInGroup(target);
        btn.click();
    }
}

const MailIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none"><path d="M37.75 9c2.9 0 5.25 2.35 5.25 5.25v19.5c0 2.9-2.35 5.25-5.25 5.25h-27.5A5.25 5.25 0 0 1 5 33.75v-19.5C5 11.35 7.35 9 10.25 9h27.5zm2.75 9.351l-15.898 8.744a1.25 1.25 0 0 1-1.077.061l-.127-.06L7.5 18.35V33.75a2.75 2.75 0 0 0 2.75 2.75h27.5a2.75 2.75 0 0 0 2.75-2.75V18.351zM37.75 11.5h-27.5a2.75 2.75 0 0 0-2.75 2.75v1.249L24 24.573l16.5-9.075V14.25a2.75 2.75 0 0 0-2.75-2.75z" fill="currentColor"/></g></svg>\n';

function create_else_block$2(ctx) {
    let button;
    let div;
    let t;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[8].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[7], null);
    let if_block = ctx[3] && create_if_block_2$2(ctx);
    return {
        c() {
            button = element("button");
            div = element("div");
            if (default_slot) default_slot.c();
            t = space();
            if (if_block) if_block.c();
            attr(div, "class", "icon svelte-i8k5zk");
            attr(div, "style", ctx[4]);
            attr(button, "class", "svg-button group svelte-i8k5zk");
            attr(button, "title", ctx[0]);
            button.disabled = ctx[2];
            toggle_class(button, "with-text", ctx[3]);
        },
        m(target, anchor) {
            insert(target, button, anchor);
            append(button, div);
            if (default_slot) default_slot.m(div, null);
            append(button, t);
            if (if_block) if_block.m(button, null);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", ctx[10]);
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            if (default_slot) if (default_slot.p && (!current || dirty & 128)) update_slot_base(default_slot, default_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(default_slot_template, ctx2[7], dirty, null), null);
            if (!current || dirty & 16) attr(div, "style", ctx2[4]);
            if (ctx2[3]) if (if_block) if_block.p(ctx2, dirty); else {
                if_block = create_if_block_2$2(ctx2);
                if_block.c();
                if_block.m(button, null);
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
            if (!current || dirty & 1) attr(button, "title", ctx2[0]);
            if (!current || dirty & 4) button.disabled = ctx2[2];
            if (!current || dirty & 8) toggle_class(button, "with-text", ctx2[3]);
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
            if (if_block) if_block.d();
            mounted = false;
            dispose();
        }
    };
}

function create_if_block$8(ctx) {
    let a;
    let div;
    let t;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[8].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[7], null);
    let if_block = ctx[3] && create_if_block_1$6(ctx);
    return {
        c() {
            a = element("a");
            div = element("div");
            if (default_slot) default_slot.c();
            t = space();
            if (if_block) if_block.c();
            attr(div, "class", "icon svelte-i8k5zk");
            attr(div, "style", ctx[4]);
            attr(a, "class", "svg-button group svelte-i8k5zk");
            attr(a, "href", ctx[1]);
            attr(a, "title", ctx[0]);
            toggle_class(a, "with-text", ctx[3]);
        },
        m(target, anchor) {
            insert(target, a, anchor);
            append(a, div);
            if (default_slot) default_slot.m(div, null);
            append(a, t);
            if (if_block) if_block.m(a, null);
            current = true;
            if (!mounted) {
                dispose = listen(a, "click", ctx[9]);
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            if (default_slot) if (default_slot.p && (!current || dirty & 128)) update_slot_base(default_slot, default_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(default_slot_template, ctx2[7], dirty, null), null);
            if (!current || dirty & 16) attr(div, "style", ctx2[4]);
            if (ctx2[3]) if (if_block) if_block.p(ctx2, dirty); else {
                if_block = create_if_block_1$6(ctx2);
                if_block.c();
                if_block.m(a, null);
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
            if (!current || dirty & 2) attr(a, "href", ctx2[1]);
            if (!current || dirty & 1) attr(a, "title", ctx2[0]);
            if (!current || dirty & 8) toggle_class(a, "with-text", ctx2[3]);
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
            if (detaching) detach(a);
            if (default_slot) default_slot.d(detaching);
            if (if_block) if_block.d();
            mounted = false;
            dispose();
        }
    };
}

function create_if_block_2$2(ctx) {
    let div;
    let t;
    return {
        c() {
            div = element("div");
            t = text(ctx[3]);
            attr(div, "class", "ml-1");
        },
        m(target, anchor) {
            insert(target, div, anchor);
            append(div, t);
        },
        p(ctx2, dirty) {
            if (dirty & 8) set_data(t, ctx2[3]);
        },
        d(detaching) {
            if (detaching) detach(div);
        }
    };
}

function create_if_block_1$6(ctx) {
    let div;
    let t;
    return {
        c() {
            div = element("div");
            t = text(ctx[3]);
            attr(div, "class", "ml-1");
        },
        m(target, anchor) {
            insert(target, div, anchor);
            append(div, t);
        },
        p(ctx2, dirty) {
            if (dirty & 8) set_data(t, ctx2[3]);
        },
        d(detaching) {
            if (detaching) detach(div);
        }
    };
}

function create_fragment$c(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [ create_if_block$8, create_else_block$2 ];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
        if (ctx2[1]) return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
        c() {
            if_block.c();
            if_block_anchor = empty();
        },
        m(target, anchor) {
            if_blocks[current_block_type_index].m(target, anchor);
            insert(target, if_block_anchor, anchor);
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
                if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
            if (detaching) detach(if_block_anchor);
            if_blocks[current_block_type_index].d(detaching);
        }
    };
}

function instance$c($$self, $$props, $$invalidate) {
    let {$$slots: slots = {}, $$scope: $$scope} = $$props;
    let {title: title = ""} = $$props;
    let {href: href = null} = $$props;
    let {disabled: disabled = false} = $$props;
    let {text: text2 = ""} = $$props;
    let {w: w = "1rem"} = $$props;
    let {h: h = w} = $$props;
    let iconStyles = "";
    function click_handler(event) {
        bubble.call(this, $$self, event);
    }
    function click_handler_1(event) {
        bubble.call(this, $$self, event);
    }
    $$self.$$set = $$props2 => {
        if ("title" in $$props2) $$invalidate(0, title = $$props2.title);
        if ("href" in $$props2) $$invalidate(1, href = $$props2.href);
        if ("disabled" in $$props2) $$invalidate(2, disabled = $$props2.disabled);
        if ("text" in $$props2) $$invalidate(3, text2 = $$props2.text);
        if ("w" in $$props2) $$invalidate(5, w = $$props2.w);
        if ("h" in $$props2) $$invalidate(6, h = $$props2.h);
        if ("$$scope" in $$props2) $$invalidate(7, $$scope = $$props2.$$scope);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 96) $$invalidate(4, iconStyles = `width:${w};height:${h};`);
    };
    return [ title, href, disabled, text2, iconStyles, w, h, $$scope, slots, click_handler, click_handler_1 ];
}

class SvgButton extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$c, create_fragment$c, safe_not_equal, {
            title: 0,
            href: 1,
            disabled: 2,
            text: 3,
            w: 5,
            h: 6
        });
    }
}

function create_default_slot_2(ctx) {
    let span;
    let span_class_value;
    return {
        c() {
            span = element("span");
            attr(span, "class", span_class_value = null_to_empty(`flex ${ctx[2] ? "animate-spin" : ""}`) + " svelte-1b3w6r4");
        },
        m(target, anchor) {
            insert(target, span, anchor);
            span.innerHTML = RefreshIcon;
        },
        p(ctx2, dirty) {
            if (dirty & 4 && span_class_value !== (span_class_value = null_to_empty(`flex ${ctx2[2] ? "animate-spin" : ""}`) + " svelte-1b3w6r4")) attr(span, "class", span_class_value);
        },
        d(detaching) {
            if (detaching) detach(span);
        }
    };
}

function create_default_slot_1(ctx) {
    let html_tag;
    let html_anchor;
    return {
        c() {
            html_tag = new HtmlTag(false);
            html_anchor = empty();
            html_tag.a = html_anchor;
        },
        m(target, anchor) {
            html_tag.m(OpenInNew, target, anchor);
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

function create_default_slot$5(ctx) {
    let html_tag;
    let html_anchor;
    return {
        c() {
            html_tag = new HtmlTag(false);
            html_anchor = empty();
            html_tag.a = html_anchor;
        },
        m(target, anchor) {
            html_tag.m(SettingsIcon, target, anchor);
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

function create_fragment$b(ctx) {
    let header;
    let svgbutton0;
    let t0;
    let svgbutton1;
    let t1;
    let span1;
    let a;
    let span0;
    let t2_value = (ctx[3] || "") + "";
    let t2;
    let t3;
    let div;
    let a_href_value;
    let t4;
    let svgbutton2;
    let current;
    let mounted;
    let dispose;
    svgbutton0 = new SvgButton({
        props: {
            disabled: ctx[2],
            title: getMsg("headerUpdateBtn_title"),
            text: ctx[2] ? "updating" : "update",
            $$slots: {
                default: [ create_default_slot_2 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    svgbutton0.$on("click", ctx[8]);
    svgbutton1 = new SvgButton({
        props: {
            text: "open all",
            title: "Open all unread items",
            disabled: ctx[0].length === 0 || ctx[4],
            $$slots: {
                default: [ create_default_slot_1 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    svgbutton1.$on("click", ctx[7]);
    svgbutton2 = new SvgButton({
        props: {
            text: getMsg("headerOptionsBtn"),
            title: getMsg("headerOptionsBtn_title"),
            w: "1.1rem",
            $$slots: {
                default: [ create_default_slot$5 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    svgbutton2.$on("click", ctx[5]);
    return {
        c() {
            header = element("header");
            create_component(svgbutton0.$$.fragment);
            t0 = space();
            create_component(svgbutton1.$$.fragment);
            t1 = space();
            span1 = element("span");
            a = element("a");
            span0 = element("span");
            t2 = text(t2_value);
            t3 = space();
            div = element("div");
            t4 = space();
            create_component(svgbutton2.$$.fragment);
            attr(div, "class", "h-5 w-5 group-hover:scale-110 group-active:scale-95");
            attr(a, "class", "group flex items-center gap-1 text-current svelte-1b3w6r4");
            attr(a, "title", getMsg("headerMailLink_title"));
            attr(a, "href", a_href_value = getInboxUrl(ctx[1].options));
            toggle_class(a, "accent", ctx[3]);
            attr(span1, "class", "flex items-center space-x-2");
            attr(header, "class", "flex min-h-[1.2rem] items-center justify-between space-x-3 border-b border-skin-delimiter p-1");
        },
        m(target, anchor) {
            insert(target, header, anchor);
            mount_component(svgbutton0, header, null);
            append(header, t0);
            mount_component(svgbutton1, header, null);
            append(header, t1);
            append(header, span1);
            append(span1, a);
            append(a, span0);
            append(span0, t2);
            append(a, t3);
            append(a, div);
            div.innerHTML = MailIcon;
            append(span1, t4);
            mount_component(svgbutton2, span1, null);
            current = true;
            if (!mounted) {
                dispose = listen(a, "click", ctx[6]);
                mounted = true;
            }
        },
        p(ctx2, [dirty]) {
            const svgbutton0_changes = {};
            if (dirty & 4) svgbutton0_changes.disabled = ctx2[2];
            if (dirty & 4) svgbutton0_changes.text = ctx2[2] ? "updating" : "update";
            if (dirty & 8196) svgbutton0_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            svgbutton0.$set(svgbutton0_changes);
            const svgbutton1_changes = {};
            if (dirty & 17) svgbutton1_changes.disabled = ctx2[0].length === 0 || ctx2[4];
            if (dirty & 8192) svgbutton1_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            svgbutton1.$set(svgbutton1_changes);
            if ((!current || dirty & 8) && t2_value !== (t2_value = (ctx2[3] || "") + "")) set_data(t2, t2_value);
            if (!current || dirty & 2 && a_href_value !== (a_href_value = getInboxUrl(ctx2[1].options))) attr(a, "href", a_href_value);
            if (!current || dirty & 8) toggle_class(a, "accent", ctx2[3]);
            const svgbutton2_changes = {};
            if (dirty & 8192) svgbutton2_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            svgbutton2.$set(svgbutton2_changes);
        },
        i(local) {
            if (current) return;
            transition_in(svgbutton0.$$.fragment, local);
            transition_in(svgbutton1.$$.fragment, local);
            transition_in(svgbutton2.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(svgbutton0.$$.fragment, local);
            transition_out(svgbutton1.$$.fragment, local);
            transition_out(svgbutton2.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(header);
            destroy_component(svgbutton0);
            destroy_component(svgbutton1);
            destroy_component(svgbutton2);
            mounted = false;
            dispose();
        }
    };
}

function instance$b($$self, $$props, $$invalidate) {
    let $storageData;
    let $isUpdating;
    component_subscribe($$self, storageData, ($$value => $$invalidate(1, $storageData = $$value)));
    component_subscribe($$self, isUpdating, ($$value => $$invalidate(12, $isUpdating = $$value)));
    var _a, _b, _c;
    let {groupsWithPosts: groupsWithPosts = []} = $$props;
    let loading = false;
    let messagesCount = 0;
    const onOptionClick = async () => {
        await browser.runtime.openOptionsPage();
        window.close();
    };
    const onMailClick = async () => {
        if (messagesCount) await storage.removeAllMessages();
    };
    let disableOpenAll = false;
    const onOpenAll = async () => {
        const payload = {
            groups: groupsWithPosts,
            remove: $storageData.options.delListAfterOpening
        };
        void sendMessage("OPEN_GROUPS", payload);
        setTimeout((() => {
            $$invalidate(4, disableOpenAll = true);
        }), 1e3);
    };
    const updateNow = async () => {
        await sendMessage("UPDATE_NOW");
    };
    $$self.$$set = $$props2 => {
        if ("groupsWithPosts" in $$props2) $$invalidate(0, groupsWithPosts = $$props2.groupsWithPosts);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 4096) $$invalidate(2, loading = $isUpdating);
        if ($$self.$$.dirty & 3594) {
            $$invalidate(3, messagesCount = ($$invalidate(10, _b = $$invalidate(9, _a = $storageData.mail) === null || _a === void 0 ? void 0 : _a.messages) === null || _b === void 0 ? void 0 : _b.length) || 0);
            $$invalidate(11, _c = Object.values($storageData.accounts || {})) === null || _c === void 0 ? void 0 : _c.forEach((a => {
                var _a2, _b2;
                $$invalidate(3, messagesCount += ((_b2 = (_a2 = a.mail) === null || _a2 === void 0 ? void 0 : _a2.messages) === null || _b2 === void 0 ? void 0 : _b2.length) || 0);
            }));
        }
    };
    return [ groupsWithPosts, $storageData, loading, messagesCount, disableOpenAll, onOptionClick, onMailClick, onOpenAll, updateNow, _a, _b, _c, $isUpdating ];
}

class Header extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$b, create_fragment$b, safe_not_equal, {
            groupsWithPosts: 0
        });
    }
}

function slideHorizontal(node, {duration: duration, easing: easing = quadOut}) {
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;
    return {
        duration: duration,
        css: t => {
            const eased = easing(t);
            return `transform: ${transform} translate(${(1 - eased) * 100}%, 0);\n                    opacity: ${eased};`;
        }
    };
}

const ArrowUp = '\x3c!-- This Source Code Form is subject to the terms of the Mozilla Public\n   - License, v. 2.0. If a copy of the MPL was not distributed with this\n   - file, You can obtain one at http://mozilla.org/MPL/2.0/. --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M13 11a1 1 0 0 1-.707-.293L8 6.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5A1 1 0 0 1 13 11z"></path></svg>\n';

function create_else_block$1(ctx) {
    let span;
    let t;
    return {
        c() {
            span = element("span");
            t = text(ctx[2]);
        },
        m(target, anchor) {
            insert(target, span, anchor);
            append(span, t);
        },
        p(ctx2, dirty) {
            if (dirty & 4) set_data(t, ctx2[2]);
        },
        d(detaching) {
            if (detaching) detach(span);
        }
    };
}

function create_if_block$7(ctx) {
    let div;
    let div_style_value;
    let if_block = ctx[1].loaded && create_if_block_1$5(ctx);
    return {
        c() {
            div = element("div");
            if (if_block) if_block.c();
            attr(div, "style", div_style_value = `width: ${Number(ctx[1].width)}px; height: ${Number(ctx[1].height)}px`);
        },
        m(target, anchor) {
            insert(target, div, anchor);
            if (if_block) if_block.m(div, null);
        },
        p(ctx2, dirty) {
            if (ctx2[1].loaded) if (if_block) if_block.p(ctx2, dirty); else {
                if_block = create_if_block_1$5(ctx2);
                if_block.c();
                if_block.m(div, null);
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
            if (dirty & 2 && div_style_value !== (div_style_value = `width: ${Number(ctx2[1].width)}px; height: ${Number(ctx2[1].height)}px`)) attr(div, "style", div_style_value);
        },
        d(detaching) {
            if (detaching) detach(div);
            if (if_block) if_block.d();
        }
    };
}

function create_if_block_1$5(ctx) {
    let img;
    let img_src_value;
    let img_width_value;
    let img_height_value;
    return {
        c() {
            img = element("img");
            if (!src_url_equal(img.src, img_src_value = ctx[1].url)) attr(img, "src", img_src_value);
            attr(img, "width", img_width_value = ctx[1].width);
            attr(img, "height", img_height_value = ctx[1].height);
            attr(img, "alt", "preview");
            attr(img, "class", "block min-h-full min-w-full");
        },
        m(target, anchor) {
            insert(target, img, anchor);
        },
        p(ctx2, dirty) {
            if (dirty & 2 && !src_url_equal(img.src, img_src_value = ctx2[1].url)) attr(img, "src", img_src_value);
            if (dirty & 2 && img_width_value !== (img_width_value = ctx2[1].width)) attr(img, "width", img_width_value);
            if (dirty & 2 && img_height_value !== (img_height_value = ctx2[1].height)) attr(img, "height", img_height_value);
        },
        d(detaching) {
            if (detaching) detach(img);
        }
    };
}

function create_fragment$a(ctx) {
    let div;
    let div_class_value;
    function select_block_type(ctx2, dirty) {
        if (ctx2[1]) return create_if_block$7;
        return create_else_block$1;
    }
    let current_block_type = select_block_type(ctx);
    let if_block = current_block_type(ctx);
    return {
        c() {
            div = element("div");
            if_block.c();
            attr(div, "class", div_class_value = null_to_empty(`preview ${!ctx[1] && !ctx[2] ? "hidden" : "block"}`) + " svelte-1gn9q4g");
            attr(div, "style", `max-width: ${MAX_WIDTH}px; max-height: ${MAX_HEIGHT}px`);
            toggle_class(div, "hide", !ctx[1] && !ctx[2]);
        },
        m(target, anchor) {
            insert(target, div, anchor);
            if_block.m(div, null);
            ctx[5](div);
        },
        p(ctx2, [dirty]) {
            if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) if_block.p(ctx2, dirty); else {
                if_block.d(1);
                if_block = current_block_type(ctx2);
                if (if_block) {
                    if_block.c();
                    if_block.m(div, null);
                }
            }
            if (dirty & 6 && div_class_value !== (div_class_value = null_to_empty(`preview ${!ctx2[1] && !ctx2[2] ? "hidden" : "block"}`) + " svelte-1gn9q4g")) attr(div, "class", div_class_value);
            if (dirty & 6) toggle_class(div, "hide", !ctx2[1] && !ctx2[2]);
        },
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(div);
            if_block.d();
            ctx[5](null);
        }
    };
}

const MAX_WIDTH = 300;

const MAX_HEIGHT = 200;

function getImageList(post) {
    var _a, _b, _c, _d;
    if (post.data.is_gallery && post.data.media_metadata) {
        const media = Object.values(post.data.media_metadata);
        const withPreview = media.find((m => {
            var _a2;
            return (_a2 = m.p) === null || _a2 === void 0 ? void 0 : _a2.length;
        }));
        if (withPreview) return (_a = withPreview.p) === null || _a === void 0 ? void 0 : _a.map((p => ({
            url: p.u,
            width: p.x,
            height: p.y
        })));
    }
    const image = (_c = (_b = post === null || post === void 0 ? void 0 : post.data) === null || _b === void 0 ? void 0 : _b.preview) === null || _c === void 0 ? void 0 : _c.images[0];
    return (_d = image === null || image === void 0 ? void 0 : image.resolutions) === null || _d === void 0 ? void 0 : _d.map((p => ({
        url: p.url,
        width: p.width || 0,
        height: p.height || 0
    })));
}

function selectFittingImage(imageList) {
    if (!(imageList === null || imageList === void 0 ? void 0 : imageList.length)) return;
    let result = imageList.find((i => i.width > MAX_WIDTH && i.height > MAX_HEIGHT));
    result = result || imageList[0];
    result.width = Math.max(result.width, MAX_WIDTH);
    result.height = Math.max(result.height, MAX_HEIGHT);
    const aspectRatio = result.width / result.height;
    if (aspectRatio > 1) {
        result.width = Math.min(MAX_WIDTH, result.width);
        result.height = result.width / aspectRatio;
        return result;
    }
    result.height = Math.min(MAX_HEIGHT, result.height);
    result.width = result.height * aspectRatio;
    return result;
}

function instance$a($$self, $$props, $$invalidate) {
    let {posts: posts} = $$props;
    let {containerElement: containerElement} = $$props;
    let previewElement;
    let imageInfo = null;
    let postText = null;
    function setData(post) {
        $$invalidate(1, imageInfo = null);
        const sliceText = (str, max = 400) => str.length > max ? `${str.slice(0, max)}...` : str;
        switch (post.kind) {
          case RedditObjectKind.link:
            {
                if (post.data.selftext) {
                    $$invalidate(2, postText = sliceText(post.data.selftext));
                    return;
                }
                const imgList = getImageList(post);
                const image = selectFittingImage(imgList);
                if (!image) return;
                $$invalidate(1, imageInfo = {
                    ...image,
                    loaded: false
                });
                const imgElem = new Image;
                imgElem.onload = () => {
                    if ((imageInfo === null || imageInfo === void 0 ? void 0 : imageInfo.url) !== image.url) return;
                    $$invalidate(1, imageInfo.loaded = true, imageInfo);
                };
                imgElem.src = image.url;
                $$invalidate(2, postText = !imageInfo ? post.data.url : null);
                return;
            }

          case RedditObjectKind.comment:
          case RedditObjectKind.message:
            $$invalidate(2, postText = sliceText(post.data.body || ""));
            break;
        }
    }
    const positionPreview = e => {
        if (!previewElement) return;
        const {pageX: pageX, pageY: pageY, clientY: clientY} = e;
        $$invalidate(0, previewElement.style.left = `${pageX + 10}px`, previewElement);
        const {height: height} = previewElement.getBoundingClientRect();
        const offset = document.documentElement.clientHeight - clientY - height - 10;
        if (offset < 0) $$invalidate(0, previewElement.style.top = `${pageY + offset}px`, previewElement); else $$invalidate(0, previewElement.style.top = `${pageY + 10}px`, previewElement);
    };
    onMount((() => {
        let prevId;
        const mousemove = e => window.requestAnimationFrame((() => {
            positionPreview(e);
        }));
        const mouseover = e => {
            const {postId: postId} = e.target.dataset;
            if (postId && postId !== prevId) {
                const post = posts.find((p => p.data.id === postId));
                if (!post) return;
                setData(post);
                prevId = postId;
                window.requestAnimationFrame((() => {
                    positionPreview(e);
                }));
            }
        };
        const mouseleave = () => {
            prevId = null;
            $$invalidate(1, imageInfo = null);
            $$invalidate(2, postText = null);
        };
        const elem = containerElement.querySelector("[data-floatpreview-target]");
        elem === null || elem === void 0 ? void 0 : elem.addEventListener("mousemove", mousemove);
        elem === null || elem === void 0 ? void 0 : elem.addEventListener("mouseover", mouseover);
        elem === null || elem === void 0 ? void 0 : elem.addEventListener("mouseleave", mouseleave);
        return () => {
            elem === null || elem === void 0 ? void 0 : elem.removeEventListener("mousemove", mousemove);
            elem === null || elem === void 0 ? void 0 : elem.removeEventListener("mouseover", mouseover);
            elem === null || elem === void 0 ? void 0 : elem.removeEventListener("mouseleave", mouseleave);
        };
    }));
    function div_binding($$value) {
        binding_callbacks[$$value ? "unshift" : "push"]((() => {
            previewElement = $$value;
            $$invalidate(0, previewElement);
        }));
    }
    $$self.$$set = $$props2 => {
        if ("posts" in $$props2) $$invalidate(3, posts = $$props2.posts);
        if ("containerElement" in $$props2) $$invalidate(4, containerElement = $$props2.containerElement);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 8) if (posts) {
            $$invalidate(1, imageInfo = null);
            $$invalidate(2, postText = null);
        }
    };
    return [ previewElement, imageInfo, postText, posts, containerElement, div_binding ];
}

class FloatingPreview extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$a, create_fragment$a, safe_not_equal, {
            posts: 3,
            containerElement: 4
        });
    }
}

function get_each_context$1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[8] = list[i];
    return child_ctx;
}

const get_list_row_slot_changes = dirty => ({
    item: dirty & 1
});

const get_list_row_slot_context = ctx => ({
    item: ctx[8]
});

const get_header_row_slot_changes = dirty => ({});

const get_header_row_slot_context = ctx => ({});

function create_default_slot$4(ctx) {
    let div;
    let div_class_value;
    return {
        c() {
            div = element("div");
            attr(div, "class", div_class_value = null_to_empty(`transform duration-200 ease-out ${ctx[2] ? "rotate-180" : ""}`) + " svelte-aye6ys");
        },
        m(target, anchor) {
            insert(target, div, anchor);
            div.innerHTML = ArrowUp;
        },
        p(ctx2, dirty) {
            if (dirty & 4 && div_class_value !== (div_class_value = null_to_empty(`transform duration-200 ease-out ${ctx2[2] ? "rotate-180" : ""}`) + " svelte-aye6ys")) attr(div, "class", div_class_value);
        },
        d(detaching) {
            if (detaching) detach(div);
        }
    };
}

function create_if_block$6(ctx) {
    let div;
    let button;
    let t0;
    let ul;
    let each_blocks = [];
    let each_1_lookup = new Map;
    let div_transition;
    let t1;
    let if_block_anchor;
    let current;
    let mounted;
    let dispose;
    let each_value = ensure_array_like(ctx[0]);
    const get_key = ctx2 => ctx2[8].data.id;
    for (let i = 0; i < each_value.length; i += 1) {
        let child_ctx = get_each_context$1(ctx, each_value, i);
        let key = get_key(child_ctx);
        each_1_lookup.set(key, each_blocks[i] = create_each_block$1(key, child_ctx));
    }
    let if_block = ctx[4] && create_if_block_1$4(ctx);
    return {
        c() {
            div = element("div");
            button = element("button");
            button.innerHTML = `<span class="ml-1 h-full w-px bg-skin-delimiter group-hover:w-[2px] group-hover:bg-skin-accent2"></span>`;
            t0 = space();
            ul = element("ul");
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            t1 = space();
            if (if_block) if_block.c();
            if_block_anchor = empty();
            attr(button, "class", "group flex w-5 flex-shrink-0");
            attr(ul, "class", "flex flex-grow flex-col");
            attr(ul, "data-floatpreview-target", "true");
            attr(div, "class", "ml-2 flex flex-row");
        },
        m(target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            append(div, t0);
            append(div, ul);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(ul, null);
            insert(target, t1, anchor);
            if (if_block) if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", (function() {
                    if (is_function(ctx[3])) ctx[3].apply(this, arguments);
                }));
                mounted = true;
            }
        },
        p(new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & 129) {
                each_value = ensure_array_like(ctx[0]);
                group_outros();
                for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].r();
                each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, ul, fix_and_outro_and_destroy_block, create_each_block$1, null, get_each_context$1);
                for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].a();
                check_outros();
            }
            if (ctx[4]) if (if_block) {
                if_block.p(ctx, dirty);
                if (dirty & 16) transition_in(if_block, 1);
            } else {
                if_block = create_if_block_1$4(ctx);
                if_block.c();
                transition_in(if_block, 1);
                if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
            for (let i = 0; i < each_value.length; i += 1) transition_in(each_blocks[i]);
            if (local) add_render_callback((() => {
                if (!current) return;
                if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {
                    duration: 150,
                    easing: quadOut
                }, true);
                div_transition.run(1);
            }));
            transition_in(if_block);
            current = true;
        },
        o(local) {
            for (let i = 0; i < each_blocks.length; i += 1) transition_out(each_blocks[i]);
            if (local) {
                if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {
                    duration: 150,
                    easing: quadOut
                }, false);
                div_transition.run(0);
            }
            transition_out(if_block);
            current = false;
        },
        d(detaching) {
            if (detaching) {
                detach(div);
                detach(t1);
                detach(if_block_anchor);
            }
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].d();
            if (detaching && div_transition) div_transition.end();
            if (if_block) if_block.d(detaching);
            mounted = false;
            dispose();
        }
    };
}

function create_each_block$1(key_1, ctx) {
    let li;
    let div;
    let t;
    let li_outro;
    let rect;
    let stop_animation = noop;
    let current;
    const list_row_slot_template = ctx[5]["list-row"];
    const list_row_slot = create_slot(list_row_slot_template, ctx, ctx[7], get_list_row_slot_context);
    return {
        key: key_1,
        first: null,
        c() {
            li = element("li");
            div = element("div");
            if (list_row_slot) list_row_slot.c();
            t = space();
            attr(div, "class", "item svelte-aye6ys");
            attr(div, "tabindex", "0");
            attr(div, "role", "button");
            attr(div, "data-keys-target", "post-row");
            this.first = li;
        },
        m(target, anchor) {
            insert(target, li, anchor);
            append(li, div);
            if (list_row_slot) list_row_slot.m(div, null);
            append(li, t);
            current = true;
        },
        p(new_ctx, dirty) {
            ctx = new_ctx;
            if (list_row_slot) if (list_row_slot.p && (!current || dirty & 129)) update_slot_base(list_row_slot, list_row_slot_template, ctx, ctx[7], !current ? get_all_dirty_from_scope(ctx[7]) : get_slot_changes(list_row_slot_template, ctx[7], dirty, get_list_row_slot_changes), get_list_row_slot_context);
        },
        r() {
            rect = li.getBoundingClientRect();
        },
        f() {
            fix_position(li);
            stop_animation();
            add_transform(li, rect);
        },
        a() {
            stop_animation();
            stop_animation = create_animation(li, rect, flip, {
                delay: 100,
                duration: 100
            });
        },
        i(local) {
            if (current) return;
            transition_in(list_row_slot, local);
            if (li_outro) li_outro.end(1);
            current = true;
        },
        o(local) {
            transition_out(list_row_slot, local);
            if (local) li_outro = create_out_transition(li, ctx[1], {
                duration: 150,
                id: ctx[8].data.id
            });
            current = false;
        },
        d(detaching) {
            if (detaching) detach(li);
            if (list_row_slot) list_row_slot.d(detaching);
            if (detaching && li_outro) li_outro.end();
        }
    };
}

function create_if_block_1$4(ctx) {
    let floatingpreview;
    let current;
    floatingpreview = new FloatingPreview({
        props: {
            posts: ctx[0],
            containerElement: ctx[4]
        }
    });
    return {
        c() {
            create_component(floatingpreview.$$.fragment);
        },
        m(target, anchor) {
            mount_component(floatingpreview, target, anchor);
            current = true;
        },
        p(ctx2, dirty) {
            const floatingpreview_changes = {};
            if (dirty & 1) floatingpreview_changes.posts = ctx2[0];
            if (dirty & 16) floatingpreview_changes.containerElement = ctx2[4];
            floatingpreview.$set(floatingpreview_changes);
        },
        i(local) {
            if (current) return;
            transition_in(floatingpreview.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(floatingpreview.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            destroy_component(floatingpreview, detaching);
        }
    };
}

function create_fragment$9(ctx) {
    let div1;
    let div0;
    let t0;
    let span;
    let svgbutton;
    let t1;
    let current;
    let mounted;
    let dispose;
    const header_row_slot_template = ctx[5]["header-row"];
    const header_row_slot = create_slot(header_row_slot_template, ctx, ctx[7], get_header_row_slot_context);
    svgbutton = new SvgButton({
        props: {
            $$slots: {
                default: [ create_default_slot$4 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    svgbutton.$on("click", (function() {
        if (is_function(ctx[3])) ctx[3].apply(this, arguments);
    }));
    let if_block = ctx[2] && create_if_block$6(ctx);
    return {
        c() {
            div1 = element("div");
            div0 = element("div");
            if (header_row_slot) header_row_slot.c();
            t0 = space();
            span = element("span");
            create_component(svgbutton.$$.fragment);
            t1 = space();
            if (if_block) if_block.c();
            attr(span, "class", "ml-auto mr-3");
            attr(div0, "class", "item svelte-aye6ys");
            attr(div0, "tabindex", "0");
            attr(div0, "role", "button");
            attr(div0, "data-keys-target", "list-row");
            attr(div1, "class", "drop-down-list svelte-aye6ys");
            attr(div1, "data-keys-target", "list-container");
        },
        m(target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            if (header_row_slot) header_row_slot.m(div0, null);
            append(div0, t0);
            append(div0, span);
            mount_component(svgbutton, span, null);
            append(div1, t1);
            if (if_block) if_block.m(div1, null);
            ctx[6](div1);
            current = true;
            if (!mounted) {
                dispose = listen(div0, "click", (function() {
                    if (is_function(ctx[3])) ctx[3].apply(this, arguments);
                }));
                mounted = true;
            }
        },
        p(new_ctx, [dirty]) {
            ctx = new_ctx;
            if (header_row_slot) if (header_row_slot.p && (!current || dirty & 128)) update_slot_base(header_row_slot, header_row_slot_template, ctx, ctx[7], !current ? get_all_dirty_from_scope(ctx[7]) : get_slot_changes(header_row_slot_template, ctx[7], dirty, get_header_row_slot_changes), get_header_row_slot_context);
            const svgbutton_changes = {};
            if (dirty & 132) svgbutton_changes.$$scope = {
                dirty: dirty,
                ctx: ctx
            };
            svgbutton.$set(svgbutton_changes);
            if (ctx[2]) if (if_block) {
                if_block.p(ctx, dirty);
                if (dirty & 4) transition_in(if_block, 1);
            } else {
                if_block = create_if_block$6(ctx);
                if_block.c();
                transition_in(if_block, 1);
                if_block.m(div1, null);
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
            transition_in(header_row_slot, local);
            transition_in(svgbutton.$$.fragment, local);
            transition_in(if_block);
            current = true;
        },
        o(local) {
            transition_out(header_row_slot, local);
            transition_out(svgbutton.$$.fragment, local);
            transition_out(if_block);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div1);
            if (header_row_slot) header_row_slot.d(detaching);
            destroy_component(svgbutton);
            if (if_block) if_block.d();
            ctx[6](null);
            mounted = false;
            dispose();
        }
    };
}

function instance$9($$self, $$props, $$invalidate) {
    let {$$slots: slots = {}, $$scope: $$scope} = $$props;
    let {items: items} = $$props;
    let {rowOutTransition: rowOutTransition = slideHorizontal} = $$props;
    let {isExpanded: isExpanded = false} = $$props;
    let {toggle: toggle} = $$props;
    let containerElement;
    function div1_binding($$value) {
        binding_callbacks[$$value ? "unshift" : "push"]((() => {
            containerElement = $$value;
            $$invalidate(4, containerElement);
        }));
    }
    $$self.$$set = $$props2 => {
        if ("items" in $$props2) $$invalidate(0, items = $$props2.items);
        if ("rowOutTransition" in $$props2) $$invalidate(1, rowOutTransition = $$props2.rowOutTransition);
        if ("isExpanded" in $$props2) $$invalidate(2, isExpanded = $$props2.isExpanded);
        if ("toggle" in $$props2) $$invalidate(3, toggle = $$props2.toggle);
        if ("$$scope" in $$props2) $$invalidate(7, $$scope = $$props2.$$scope);
    };
    return [ items, rowOutTransition, isExpanded, toggle, containerElement, slots, div1_binding, $$scope ];
}

class DropDownList extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$9, create_fragment$9, safe_not_equal, {
            items: 0,
            rowOutTransition: 1,
            isExpanded: 2,
            toggle: 3
        });
    }
}

function create_default_slot$3(ctx) {
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
        p: noop,
        d(detaching) {
            if (detaching) {
                detach(html_anchor);
                html_tag.d();
            }
        }
    };
}

function create_fragment$8(ctx) {
    let span;
    let svgbutton;
    let current;
    svgbutton = new SvgButton({
        props: {
            title: ctx[0],
            $$slots: {
                default: [ create_default_slot$3 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    svgbutton.$on("click", ctx[1]);
    return {
        c() {
            span = element("span");
            create_component(svgbutton.$$.fragment);
            attr(span, "class", "mr-1 text-skin-gray hover:scale-105 hover:text-skin-success");
            attr(span, "data-keys-target", "check-mark");
        },
        m(target, anchor) {
            insert(target, span, anchor);
            mount_component(svgbutton, span, null);
            current = true;
        },
        p(ctx2, [dirty]) {
            const svgbutton_changes = {};
            if (dirty & 1) svgbutton_changes.title = ctx2[0];
            if (dirty & 8) svgbutton_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            svgbutton.$set(svgbutton_changes);
        },
        i(local) {
            if (current) return;
            transition_in(svgbutton.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(svgbutton.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(span);
            destroy_component(svgbutton);
        }
    };
}

function instance$8($$self, $$props, $$invalidate) {
    let {clickHandler: clickHandler} = $$props;
    let {title: title = ""} = $$props;
    const handler = e => {
        e.stopPropagation();
        clickHandler === null || clickHandler === void 0 ? void 0 : clickHandler(e);
    };
    $$self.$$set = $$props2 => {
        if ("clickHandler" in $$props2) $$invalidate(2, clickHandler = $$props2.clickHandler);
        if ("title" in $$props2) $$invalidate(0, title = $$props2.title);
    };
    return [ title, handler, clickHandler ];
}

class CheckMarkButton extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$8, create_fragment$8, safe_not_equal, {
            clickHandler: 2,
            title: 0
        });
    }
}

const UpdatesDisabledIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M20.49 20.49L3.51 3.51A.996.996 0 1 0 2.1 4.92l2.31 2.31C3.57 8.56 3.05 10.09 3 11.74A9.003 9.003 0 0 0 12 21c1.76 0 3.39-.52 4.78-1.39l2.29 2.29c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41zm-9.77-1.6c-2.78-.49-5.04-2.71-5.58-5.47c-.34-1.72-.03-3.36.72-4.73l9.46 9.46a7.075 7.075 0 0 1-4.6.74zM13 8v2.17l-2-2V8c0-.55.45-1 1-1s1 .45 1 1zm7.72 6.23c-.23.92-.61 1.77-1.1 2.55l-1.47-1.47c.27-.5.49-1.03.63-1.59c.11-.42.51-.72.95-.72c.65 0 1.15.61.99 1.23zM7.24 4.41a8.915 8.915 0 0 1 5-1.41c2.65.07 5 1.28 6.6 3.16l1.31-1.31a.5.5 0 0 1 .85.36V9.5c0 .28-.22.5-.5.5h-4.29c-.45 0-.67-.54-.35-.85l1.55-1.55C16.12 6.02 14.18 5 12 5c-1.2 0-2.33.31-3.32.85L7.24 4.41z" fill="currentColor"/></svg>\n';

function create_if_block_6(ctx) {
    let checkmarkbutton;
    let current;
    checkmarkbutton = new CheckMarkButton({
        props: {
            clickHandler: ctx[1],
            title: getMsg("watchListCheckMark_title")
        }
    });
    return {
        c() {
            create_component(checkmarkbutton.$$.fragment);
        },
        m(target, anchor) {
            mount_component(checkmarkbutton, target, anchor);
            current = true;
        },
        p(ctx2, dirty) {
            const checkmarkbutton_changes = {};
            if (dirty & 2) checkmarkbutton_changes.clickHandler = ctx2[1];
            checkmarkbutton.$set(checkmarkbutton_changes);
        },
        i(local) {
            if (current) return;
            transition_in(checkmarkbutton.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(checkmarkbutton.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            destroy_component(checkmarkbutton, detaching);
        }
    };
}

function create_if_block_5(ctx) {
    let div;
    return {
        c() {
            div = element("div");
            attr(div, "class", "h-4 w-4 shrink-0 text-skin-gray");
            attr(div, "title", getMsg("watchListMailIcon"));
        },
        m(target, anchor) {
            insert(target, div, anchor);
            div.innerHTML = MailIcon;
        },
        d(detaching) {
            if (detaching) detach(div);
        }
    };
}

function create_if_block_4(ctx) {
    let div;
    return {
        c() {
            div = element("div");
            attr(div, "class", "h-4 w-4 shrink-0 text-skin-gray");
            attr(div, "title", getMsg("watchListUpdatesOff"));
        },
        m(target, anchor) {
            insert(target, div, anchor);
            div.innerHTML = UpdatesDisabledIcon;
        },
        d(detaching) {
            if (detaching) detach(div);
        }
    };
}

function create_if_block_3(ctx) {
    let div;
    let div_title_value;
    return {
        c() {
            div = element("div");
            attr(div, "class", "h-4 w-4 shrink-0 text-skin-error");
            attr(div, "title", div_title_value = ctx[0].error);
        },
        m(target, anchor) {
            insert(target, div, anchor);
            div.innerHTML = WarningIcon;
        },
        p(ctx2, dirty) {
            if (dirty & 1 && div_title_value !== (div_title_value = ctx2[0].error)) attr(div, "title", div_title_value);
        },
        d(detaching) {
            if (detaching) detach(div);
        }
    };
}

function create_if_block_2$1(ctx) {
    let div;
    return {
        c() {
            div = element("div");
            attr(div, "class", "h-4 w-4 shrink-0 text-skin-gray");
            attr(div, "title", getMsg("watchListNotifyOff"));
        },
        m(target, anchor) {
            insert(target, div, anchor);
            div.innerHTML = NotifyOffIcon;
        },
        d(detaching) {
            if (detaching) detach(div);
        }
    };
}

function create_if_block_1$3(ctx) {
    let div;
    return {
        c() {
            div = element("div");
            attr(div, "class", "h-4 w-4 shrink-0 text-skin-gray");
            attr(div, "title", getMsg("watchListNotifyOn"));
        },
        m(target, anchor) {
            insert(target, div, anchor);
            div.innerHTML = NotifyIcon;
        },
        d(detaching) {
            if (detaching) detach(div);
        }
    };
}

function create_if_block$5(ctx) {
    let div;
    return {
        c() {
            div = element("div");
            attr(div, "class", "h-4 w-4 shrink-0 text-skin-gray");
            attr(div, "title", getMsg("watchListFiltersOn"));
        },
        m(target, anchor) {
            insert(target, div, anchor);
            div.innerHTML = FilterOnIcon;
        },
        d(detaching) {
            if (detaching) detach(div);
        }
    };
}

function create_default_slot$2(ctx) {
    let html_tag;
    let html_anchor;
    return {
        c() {
            html_tag = new HtmlTag(false);
            html_anchor = empty();
            html_tag.a = html_anchor;
        },
        m(target, anchor) {
            html_tag.m(OpenInNew, target, anchor);
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

function create_fragment$7(ctx) {
    let div1;
    let t0;
    let div0;
    let t1;
    let span0;
    let t2_value = ctx[0].title + "";
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let span1;
    let svgbutton;
    let current;
    let if_block0 = ctx[1] && create_if_block_6(ctx);
    let if_block1 = (ctx[0].type === "message" || ctx[0].type === "account-message") && create_if_block_5();
    let if_block2 = ctx[0].updatesDisabled && create_if_block_4();
    let if_block3 = ctx[0].error && create_if_block_3(ctx);
    function select_block_type(ctx2, dirty) {
        if (ctx2[0].notify === "on") return create_if_block_1$3;
        if (ctx2[0].notify === "off") return create_if_block_2$1;
    }
    let current_block_type = select_block_type(ctx);
    let if_block4 = current_block_type && current_block_type(ctx);
    let if_block5 = ctx[0].filter === "on" && create_if_block$5();
    svgbutton = new SvgButton({
        props: {
            href: ctx[0].href,
            title: getMsg("watchListOpenInNew_title"),
            $$slots: {
                default: [ create_default_slot$2 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    svgbutton.$on("click", ctx[3]);
    return {
        c() {
            div1 = element("div");
            if (if_block0) if_block0.c();
            t0 = space();
            div0 = element("div");
            if (if_block1) if_block1.c();
            t1 = space();
            span0 = element("span");
            t2 = text(t2_value);
            t3 = space();
            if (if_block2) if_block2.c();
            t4 = space();
            if (if_block3) if_block3.c();
            t5 = space();
            if (if_block4) if_block4.c();
            t6 = space();
            if (if_block5) if_block5.c();
            t7 = space();
            span1 = element("span");
            create_component(svgbutton.$$.fragment);
            attr(span0, "class", "mr-auto max-w-[40ch] overflow-hidden text-ellipsis whitespace-nowrap");
            attr(div0, "class", "flex items-center space-x-1");
            attr(span1, "class", "ml-2 text-skin-link opacity-50 hover:opacity-100");
            attr(div1, "class", "flex w-full items-center p-1 pr-4 svelte-4n75tj");
            toggle_class(div1, "disabled", ctx[2] || ctx[0].updatesDisabled);
        },
        m(target, anchor) {
            insert(target, div1, anchor);
            if (if_block0) if_block0.m(div1, null);
            append(div1, t0);
            append(div1, div0);
            if (if_block1) if_block1.m(div0, null);
            append(div0, t1);
            append(div0, span0);
            append(span0, t2);
            append(div0, t3);
            if (if_block2) if_block2.m(div0, null);
            append(div0, t4);
            if (if_block3) if_block3.m(div0, null);
            append(div0, t5);
            if (if_block4) if_block4.m(div0, null);
            append(div0, t6);
            if (if_block5) if_block5.m(div0, null);
            append(div1, t7);
            append(div1, span1);
            mount_component(svgbutton, span1, null);
            current = true;
        },
        p(ctx2, [dirty]) {
            if (ctx2[1]) if (if_block0) {
                if_block0.p(ctx2, dirty);
                if (dirty & 2) transition_in(if_block0, 1);
            } else {
                if_block0 = create_if_block_6(ctx2);
                if_block0.c();
                transition_in(if_block0, 1);
                if_block0.m(div1, t0);
            } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, (() => {
                    if_block0 = null;
                }));
                check_outros();
            }
            if (ctx2[0].type === "message" || ctx2[0].type === "account-message") if (if_block1) ; else {
                if_block1 = create_if_block_5();
                if_block1.c();
                if_block1.m(div0, t1);
            } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
            }
            if ((!current || dirty & 1) && t2_value !== (t2_value = ctx2[0].title + "")) set_data(t2, t2_value);
            if (ctx2[0].updatesDisabled) if (if_block2) ; else {
                if_block2 = create_if_block_4();
                if_block2.c();
                if_block2.m(div0, t4);
            } else if (if_block2) {
                if_block2.d(1);
                if_block2 = null;
            }
            if (ctx2[0].error) if (if_block3) if_block3.p(ctx2, dirty); else {
                if_block3 = create_if_block_3(ctx2);
                if_block3.c();
                if_block3.m(div0, t5);
            } else if (if_block3) {
                if_block3.d(1);
                if_block3 = null;
            }
            if (current_block_type !== (current_block_type = select_block_type(ctx2))) {
                if (if_block4) if_block4.d(1);
                if_block4 = current_block_type && current_block_type(ctx2);
                if (if_block4) {
                    if_block4.c();
                    if_block4.m(div0, t6);
                }
            }
            if (ctx2[0].filter === "on") if (if_block5) ; else {
                if_block5 = create_if_block$5();
                if_block5.c();
                if_block5.m(div0, null);
            } else if (if_block5) {
                if_block5.d(1);
                if_block5 = null;
            }
            const svgbutton_changes = {};
            if (dirty & 1) svgbutton_changes.href = ctx2[0].href;
            if (dirty & 32) svgbutton_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            svgbutton.$set(svgbutton_changes);
            if (!current || dirty & 5) toggle_class(div1, "disabled", ctx2[2] || ctx2[0].updatesDisabled);
        },
        i(local) {
            if (current) return;
            transition_in(if_block0);
            transition_in(svgbutton.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(if_block0);
            transition_out(svgbutton.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div1);
            if (if_block0) if_block0.d();
            if (if_block1) if_block1.d();
            if (if_block2) if_block2.d();
            if (if_block3) if_block3.d();
            if (if_block4) if_block4.d();
            if (if_block5) if_block5.d();
            destroy_component(svgbutton);
        }
    };
}

function instance$7($$self, $$props, $$invalidate) {
    let $storageData;
    component_subscribe($$self, storageData, ($$value => $$invalidate(4, $storageData = $$value)));
    let {group: group} = $$props;
    let {onCheck: onCheck = null} = $$props;
    let {disabled: disabled = false} = $$props;
    const linkClickHandler = async e => {
        e.stopPropagation();
        e.preventDefault();
        if (onCheck && $storageData.options.delListAfterOpening) await onCheck();
        void browser.tabs.create({
            url: group.href,
            active: true
        });
    };
    $$self.$$set = $$props2 => {
        if ("group" in $$props2) $$invalidate(0, group = $$props2.group);
        if ("onCheck" in $$props2) $$invalidate(1, onCheck = $$props2.onCheck);
        if ("disabled" in $$props2) $$invalidate(2, disabled = $$props2.disabled);
    };
    return [ group, onCheck, disabled, linkClickHandler ];
}

class GroupTitle extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$7, create_fragment$7, safe_not_equal, {
            group: 0,
            onCheck: 1,
            disabled: 2
        });
    }
}

const PinRemove = '\x3c!-- This Source Code Form is subject to the terms of the Mozilla Public\n   - License, v. 2.0. If a copy of the MPL was not distributed with this\n   - file, You can obtain one at http://mozilla.org/MPL/2.0/. --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M11.414 10l2.293-2.293a1 1 0 0 0 0-1.414 4.418 4.418 0 0 0-.8-.622L11.425 7.15h.008l-4.3 4.3v-.017l-1.48 1.476a3.865 3.865 0 0 0 .692.834 1 1 0 0 0 1.37-.042L10 11.414l3.293 3.293a1 1 0 0 0 1.414-1.414zm3.293-8.707a1 1 0 0 0-1.414 0L9.7 4.882A2.382 2.382 0 0 1 8 2.586V2a1 1 0 0 0-1.707-.707l-5 5A1 1 0 0 0 2 8h.586a2.382 2.382 0 0 1 2.3 1.7l-3.593 3.593a1 1 0 1 0 1.414 1.414l12-12a1 1 0 0 0 0-1.414zm-9 6a4.414 4.414 0 0 0-1.571-1.015l2.143-2.142a4.4 4.4 0 0 0 1.013 1.571 4.191 4.191 0 0 0 .9.684L6.39 8.2a4.2 4.2 0 0 0-.683-.907z"></path></svg>\n';

function create_if_block$4(ctx) {
    let div;
    let a;
    let span0;
    let t0_value = `r/${ctx[0].data.subreddit}`;
    let t0;
    let t1;
    let span1;
    let t2_value = getItemTitle(ctx[0]) + "";
    let t2;
    let a_data_post_id_value;
    let t3;
    let span2;
    let svgbutton;
    let current;
    svgbutton = new SvgButton({
        props: {
            title: getMsg("watchListItemUnpin_title"),
            $$slots: {
                default: [ create_default_slot$1 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    svgbutton.$on("click", ctx[4]);
    return {
        c() {
            div = element("div");
            a = element("a");
            span0 = element("span");
            t0 = text(t0_value);
            t1 = space();
            span1 = element("span");
            t2 = text(t2_value);
            t3 = space();
            span2 = element("span");
            create_component(svgbutton.$$.fragment);
            attr(span0, "class", "pr-2 text-xs text-skin-text");
            attr(a, "class", "flex-grow px-1");
            attr(a, "href", ctx[1]);
            attr(a, "data-keys-target", "post-link");
            attr(a, "data-post-id", a_data_post_id_value = ctx[0].data.id);
            attr(span2, "data-keys-target", "pin-post");
            attr(div, "class", "flex w-full items-center py-1 pr-3");
        },
        m(target, anchor) {
            insert(target, div, anchor);
            append(div, a);
            append(a, span0);
            append(span0, t0);
            append(a, t1);
            append(a, span1);
            append(span1, t2);
            append(div, t3);
            append(div, span2);
            mount_component(svgbutton, span2, null);
            current = true;
        },
        p(ctx2, dirty) {
            if ((!current || dirty & 1) && t0_value !== (t0_value = `r/${ctx2[0].data.subreddit}`)) set_data(t0, t0_value);
            if ((!current || dirty & 1) && t2_value !== (t2_value = getItemTitle(ctx2[0]) + "")) set_data(t2, t2_value);
            if (!current || dirty & 2) attr(a, "href", ctx2[1]);
            if (!current || dirty & 1 && a_data_post_id_value !== (a_data_post_id_value = ctx2[0].data.id)) attr(a, "data-post-id", a_data_post_id_value);
            const svgbutton_changes = {};
            if (dirty & 32) svgbutton_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            svgbutton.$set(svgbutton_changes);
        },
        i(local) {
            if (current) return;
            transition_in(svgbutton.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(svgbutton.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div);
            destroy_component(svgbutton);
        }
    };
}

function create_default_slot$1(ctx) {
    let html_tag;
    let html_anchor;
    return {
        c() {
            html_tag = new HtmlTag(false);
            html_anchor = empty();
            html_tag.a = html_anchor;
        },
        m(target, anchor) {
            html_tag.m(PinRemove, target, anchor);
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

function create_fragment$6(ctx) {
    let if_block_anchor;
    let current;
    let if_block = ctx[0] && create_if_block$4(ctx);
    return {
        c() {
            if (if_block) if_block.c();
            if_block_anchor = empty();
        },
        m(target, anchor) {
            if (if_block) if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
            current = true;
        },
        p(ctx2, [dirty]) {
            if (ctx2[0]) if (if_block) {
                if_block.p(ctx2, dirty);
                if (dirty & 1) transition_in(if_block, 1);
            } else {
                if_block = create_if_block$4(ctx2);
                if_block.c();
                transition_in(if_block, 1);
                if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
            if (detaching) detach(if_block_anchor);
            if (if_block) if_block.d(detaching);
        }
    };
}

function instance$6($$self, $$props, $$invalidate) {
    let $storageData;
    component_subscribe($$self, storageData, ($$value => $$invalidate(3, $storageData = $$value)));
    let {item: item} = $$props;
    let redditItem;
    let href;
    if (item.kind && item.kind !== RedditObjectKind.message) redditItem = item;
    const click_handler = () => void storage.removePinPost(redditItem.data.id);
    $$self.$$set = $$props2 => {
        if ("item" in $$props2) $$invalidate(2, item = $$props2.item);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 9) $$invalidate(1, href = constructUrl(redditItem.data.permalink, $storageData.options));
    };
    return [ redditItem, href, item, $storageData, click_handler ];
}

class PinPostRow extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$6, create_fragment$6, safe_not_equal, {
            item: 2
        });
    }
}

function create_fragment$5(ctx) {
    let div;
    let checkmarkbutton;
    let t0;
    let a;
    let span0;
    let t1_value = `/u/${ctx[0].data.author}`;
    let t1;
    let t2;
    let span1;
    let t3_value = `: ${ctx[0].data.subject}`;
    let t3;
    let a_data_post_id_value;
    let div_data_post_id_value;
    let current;
    let mounted;
    let dispose;
    checkmarkbutton = new CheckMarkButton({
        props: {
            clickHandler: ctx[7],
            title: getMsg("watchListItemCheckMark_title")
        }
    });
    return {
        c() {
            div = element("div");
            create_component(checkmarkbutton.$$.fragment);
            t0 = space();
            a = element("a");
            span0 = element("span");
            t1 = text(t1_value);
            t2 = space();
            span1 = element("span");
            t3 = text(t3_value);
            attr(span0, "class", "font-medium");
            attr(a, "class", "flex-grow px-1 py-[0.125rem] text-skin-link");
            attr(a, "href", ctx[1]);
            attr(a, "data-keys-target", "post-link");
            attr(a, "data-post-id", a_data_post_id_value = ctx[0].data.id);
            attr(div, "class", "flex w-full items-center py-[0.125rem] pr-3");
            attr(div, "data-post-id", div_data_post_id_value = ctx[0].data.id);
        },
        m(target, anchor) {
            insert(target, div, anchor);
            mount_component(checkmarkbutton, div, null);
            append(div, t0);
            append(div, a);
            append(a, span0);
            append(span0, t1);
            append(a, t2);
            append(a, span1);
            append(span1, t3);
            current = true;
            if (!mounted) {
                dispose = listen(a, "click", stop_propagation(prevent_default(ctx[3])));
                mounted = true;
            }
        },
        p(ctx2, [dirty]) {
            const checkmarkbutton_changes = {};
            if (dirty & 1) checkmarkbutton_changes.clickHandler = ctx2[7];
            checkmarkbutton.$set(checkmarkbutton_changes);
            if ((!current || dirty & 1) && t1_value !== (t1_value = `/u/${ctx2[0].data.author}`)) set_data(t1, t1_value);
            if ((!current || dirty & 1) && t3_value !== (t3_value = `: ${ctx2[0].data.subject}`)) set_data(t3, t3_value);
            if (!current || dirty & 2) attr(a, "href", ctx2[1]);
            if (!current || dirty & 1 && a_data_post_id_value !== (a_data_post_id_value = ctx2[0].data.id)) attr(a, "data-post-id", a_data_post_id_value);
            if (!current || dirty & 1 && div_data_post_id_value !== (div_data_post_id_value = ctx2[0].data.id)) attr(div, "data-post-id", div_data_post_id_value);
        },
        i(local) {
            if (current) return;
            transition_in(checkmarkbutton.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(checkmarkbutton.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div);
            destroy_component(checkmarkbutton);
            mounted = false;
            dispose();
        }
    };
}

function instance$5($$self, $$props, $$invalidate) {
    let $storageData;
    component_subscribe($$self, storageData, ($$value => $$invalidate(6, $storageData = $$value)));
    let {group: group} = $$props;
    let {item: item} = $$props;
    let options = $storageData.options;
    let href;
    const removePost = async messageId => {
        const accId = group.type === "account-message" ? group.id : void 0;
        await storage.removeMessage({
            accId: accId,
            messageId: messageId
        });
    };
    const onLinkClick = async () => {
        if (options.delPostAfterBodyClick) await removePost(item.data.id);
        await browser.tabs.create({
            url: href,
            active: false
        });
    };
    const func = () => removePost(item.data.id);
    $$self.$$set = $$props2 => {
        if ("group" in $$props2) $$invalidate(4, group = $$props2.group);
        if ("item" in $$props2) $$invalidate(0, item = $$props2.item);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 64) $$invalidate(5, options = $storageData.options);
        if ($$self.$$.dirty & 32) $$invalidate(1, href = getInboxUrl(options));
    };
    return [ item, href, removePost, onLinkClick, group, options, $storageData, func ];
}

class MessageRow extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$5, create_fragment$5, safe_not_equal, {
            group: 4,
            item: 0
        });
    }
}

const Pin$1 = '\x3c!-- This Source Code Form is subject to the terms of the Mozilla Public\n   - License, v. 2.0. If a copy of the MPL was not distributed with this\n   - file, You can obtain one at http://mozilla.org/MPL/2.0/. --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M14.707 13.293L11.414 10l2.293-2.293a1 1 0 0 0 0-1.414A4.384 4.384 0 0 0 10.586 5h-.172A2.415 2.415 0 0 1 8 2.586V2a1 1 0 0 0-1.707-.707l-5 5A1 1 0 0 0 2 8h.586A2.415 2.415 0 0 1 5 10.414v.169a4.036 4.036 0 0 0 1.337 3.166 1 1 0 0 0 1.37-.042L10 11.414l3.293 3.293a1 1 0 0 0 1.414-1.414zm-7.578-1.837A2.684 2.684 0 0 1 7 10.583v-.169a4.386 4.386 0 0 0-1.292-3.121 4.414 4.414 0 0 0-1.572-1.015l2.143-2.142a4.4 4.4 0 0 0 1.013 1.571A4.384 4.384 0 0 0 10.414 7h.172a2.4 2.4 0 0 1 .848.152z"></path></svg>\n';

function create_if_block$3(ctx) {
    let span;
    let t_value = `r/${ctx[1].data.subreddit}`;
    let t;
    return {
        c() {
            span = element("span");
            t = text(t_value);
            attr(span, "class", "mr-1 text-xs text-skin-text");
        },
        m(target, anchor) {
            insert(target, span, anchor);
            append(span, t);
        },
        p(ctx2, dirty) {
            if (dirty & 2 && t_value !== (t_value = `r/${ctx2[1].data.subreddit}`)) set_data(t, t_value);
        },
        d(detaching) {
            if (detaching) detach(span);
        }
    };
}

function create_default_slot(ctx) {
    let html_tag;
    let html_anchor;
    return {
        c() {
            html_tag = new HtmlTag(false);
            html_anchor = empty();
            html_tag.a = html_anchor;
        },
        m(target, anchor) {
            html_tag.m(Pin$1, target, anchor);
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

function create_fragment$4(ctx) {
    let div;
    let checkmarkbutton;
    let t0;
    let a;
    let t1;
    let t2_value = getItemTitle(ctx[1]) + "";
    let t2;
    let a_data_post_id_value;
    let t3;
    let span;
    let svgbutton;
    let div_data_post_id_value;
    let current;
    let mounted;
    let dispose;
    checkmarkbutton = new CheckMarkButton({
        props: {
            clickHandler: ctx[8],
            title: getMsg("watchListItemCheckMark_title")
        }
    });
    let if_block = ctx[0].isMultireddit && create_if_block$3(ctx);
    svgbutton = new SvgButton({
        props: {
            title: getMsg("watchListItemPin_title"),
            $$slots: {
                default: [ create_default_slot ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    svgbutton.$on("click", ctx[4]);
    return {
        c() {
            div = element("div");
            create_component(checkmarkbutton.$$.fragment);
            t0 = space();
            a = element("a");
            if (if_block) if_block.c();
            t1 = space();
            t2 = text(t2_value);
            t3 = space();
            span = element("span");
            create_component(svgbutton.$$.fragment);
            attr(a, "class", "flex-grow px-1 py-[0.125rem] text-skin-link");
            attr(a, "href", ctx[2]);
            attr(a, "data-keys-target", "post-link");
            attr(a, "data-post-id", a_data_post_id_value = ctx[1].data.id);
            attr(span, "data-keys-target", "pin-post");
            attr(div, "class", "flex w-full items-center py-[0.125rem] pr-3");
            attr(div, "data-post-id", div_data_post_id_value = ctx[1].data.id);
        },
        m(target, anchor) {
            insert(target, div, anchor);
            mount_component(checkmarkbutton, div, null);
            append(div, t0);
            append(div, a);
            if (if_block) if_block.m(a, null);
            append(a, t1);
            append(a, t2);
            append(div, t3);
            append(div, span);
            mount_component(svgbutton, span, null);
            current = true;
            if (!mounted) {
                dispose = listen(a, "click", stop_propagation(prevent_default(ctx[5])));
                mounted = true;
            }
        },
        p(ctx2, [dirty]) {
            const checkmarkbutton_changes = {};
            if (dirty & 2) checkmarkbutton_changes.clickHandler = ctx2[8];
            checkmarkbutton.$set(checkmarkbutton_changes);
            if (ctx2[0].isMultireddit) if (if_block) if_block.p(ctx2, dirty); else {
                if_block = create_if_block$3(ctx2);
                if_block.c();
                if_block.m(a, t1);
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
            if ((!current || dirty & 2) && t2_value !== (t2_value = getItemTitle(ctx2[1]) + "")) set_data(t2, t2_value);
            if (!current || dirty & 4) attr(a, "href", ctx2[2]);
            if (!current || dirty & 2 && a_data_post_id_value !== (a_data_post_id_value = ctx2[1].data.id)) attr(a, "data-post-id", a_data_post_id_value);
            const svgbutton_changes = {};
            if (dirty & 512) svgbutton_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            svgbutton.$set(svgbutton_changes);
            if (!current || dirty & 2 && div_data_post_id_value !== (div_data_post_id_value = ctx2[1].data.id)) attr(div, "data-post-id", div_data_post_id_value);
        },
        i(local) {
            if (current) return;
            transition_in(checkmarkbutton.$$.fragment, local);
            transition_in(svgbutton.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(checkmarkbutton.$$.fragment, local);
            transition_out(svgbutton.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div);
            destroy_component(checkmarkbutton);
            if (if_block) if_block.d();
            destroy_component(svgbutton);
            mounted = false;
            dispose();
        }
    };
}

function instance$4($$self, $$props, $$invalidate) {
    let $storageData;
    component_subscribe($$self, storageData, ($$value => $$invalidate(7, $storageData = $$value)));
    let {group: group} = $$props;
    let {post: post} = $$props;
    let options = $storageData.options;
    let href;
    const removePost = async id => {
        const itemId = group.id;
        switch (group.type) {
          case "search":
            return storage.removePost({
                id: id,
                searchId: itemId
            });

          case "user":
            {
                const userIndex = idToUserIdx(itemId);
                if (userIndex == null) return;
                return storage.removeUserPost({
                    postId: id,
                    userIndex: userIndex
                });
            }

          case "subreddit":
            return storage.removePost({
                id: id,
                subreddit: itemId
            });

          case "message":
            return storage.removeMessage({
                messageId: itemId
            });
        }
    };
    const onPinClick = async ev => {
        ev.stopPropagation();
        await storage.savePinnedPost(post);
        return removePost(post.data.id);
    };
    const onLinkClick = async () => {
        if (options.delPostAfterBodyClick) await removePost(post.data.id);
        await browser.tabs.create({
            url: href,
            active: false
        });
    };
    const func = () => removePost(post.data.id);
    $$self.$$set = $$props2 => {
        if ("group" in $$props2) $$invalidate(0, group = $$props2.group);
        if ("post" in $$props2) $$invalidate(1, post = $$props2.post);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 128) $$invalidate(6, options = $storageData.options);
        if ($$self.$$.dirty & 66) $$invalidate(2, href = constructUrl(post.data.permalink, options));
    };
    return [ group, post, href, removePost, onPinClick, onLinkClick, options, $storageData, func ];
}

class PostRow extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$4, create_fragment$4, safe_not_equal, {
            group: 0,
            post: 1
        });
    }
}

function create_if_block_1$2(ctx) {
    let messagerow;
    let current;
    messagerow = new MessageRow({
        props: {
            item: ctx[2],
            group: ctx[0]
        }
    });
    return {
        c() {
            create_component(messagerow.$$.fragment);
        },
        m(target, anchor) {
            mount_component(messagerow, target, anchor);
            current = true;
        },
        p(ctx2, dirty) {
            const messagerow_changes = {};
            if (dirty & 4) messagerow_changes.item = ctx2[2];
            if (dirty & 1) messagerow_changes.group = ctx2[0];
            messagerow.$set(messagerow_changes);
        },
        i(local) {
            if (current) return;
            transition_in(messagerow.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(messagerow.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            destroy_component(messagerow, detaching);
        }
    };
}

function create_if_block$2(ctx) {
    let postrow;
    let current;
    postrow = new PostRow({
        props: {
            post: ctx[1],
            group: ctx[0]
        }
    });
    return {
        c() {
            create_component(postrow.$$.fragment);
        },
        m(target, anchor) {
            mount_component(postrow, target, anchor);
            current = true;
        },
        p(ctx2, dirty) {
            const postrow_changes = {};
            if (dirty & 2) postrow_changes.post = ctx2[1];
            if (dirty & 1) postrow_changes.group = ctx2[0];
            postrow.$set(postrow_changes);
        },
        i(local) {
            if (current) return;
            transition_in(postrow.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(postrow.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            destroy_component(postrow, detaching);
        }
    };
}

function create_fragment$3(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [ create_if_block$2, create_if_block_1$2 ];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
        if (ctx2[1]) return 0;
        if (ctx2[2]) return 1;
        return -1;
    }
    if (~(current_block_type_index = select_block_type(ctx))) if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
        c() {
            if (if_block) if_block.c();
            if_block_anchor = empty();
        },
        m(target, anchor) {
            if (~current_block_type_index) if_blocks[current_block_type_index].m(target, anchor);
            insert(target, if_block_anchor, anchor);
            current = true;
        },
        p(ctx2, [dirty]) {
            let previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx2);
            if (current_block_type_index === previous_block_index) {
                if (~current_block_type_index) if_blocks[current_block_type_index].p(ctx2, dirty);
            } else {
                if (if_block) {
                    group_outros();
                    transition_out(if_blocks[previous_block_index], 1, 1, (() => {
                        if_blocks[previous_block_index] = null;
                    }));
                    check_outros();
                }
                if (~current_block_type_index) {
                    if_block = if_blocks[current_block_type_index];
                    if (!if_block) {
                        if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                        if_block.c();
                    } else if_block.p(ctx2, dirty);
                    transition_in(if_block, 1);
                    if_block.m(if_block_anchor.parentNode, if_block_anchor);
                } else if_block = null;
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
            if (detaching) detach(if_block_anchor);
            if (~current_block_type_index) if_blocks[current_block_type_index].d(detaching);
        }
    };
}

function instance$3($$self, $$props, $$invalidate) {
    let {group: group} = $$props;
    let {item: item} = $$props;
    let redditItem;
    let redditMessage;
    $$self.$$set = $$props2 => {
        if ("group" in $$props2) $$invalidate(0, group = $$props2.group);
        if ("item" in $$props2) $$invalidate(3, item = $$props2.item);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 9) if (group.type === "message" || group.type === "account-message") $$invalidate(2, redditMessage = item); else $$invalidate(1, redditItem = item);
    };
    return [ group, redditItem, redditMessage, item ];
}

class Row extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$3, create_fragment$3, safe_not_equal, {
            group: 0,
            item: 3
        });
    }
}

function extractPostGroups(storageData2) {
    var _a, _b;
    const groupsWithPosts = [];
    const groupsWithoutPosts = [];
    const mail = storageData2.mail || {};
    if ((_a = mail.messages) == null ? void 0 : _a.length) {
        const mailGroup = {
            type: "message",
            id: "reddit-mail",
            href: getInboxUrl(storageData2.options),
            title: `Reddit messages (${mail.messages.length})`,
            lastPostCreated: mail.lastPostCreated,
            size: mail.messages.length,
            notify: mail.mailNotify ? "on" : "off",
            error: mail.error
        };
        groupsWithPosts.push(mailGroup);
    }
    const accList = Object.values(storageData2.accounts || {});
    accList.forEach((a => {
        var _a2, _b2, _c;
        let error = a.error || a.auth.error;
        if (!a.auth.refreshToken) error = "Refresh token is missing. Please reauthorize the account.";
        const length = ((_b2 = (_a2 = a.mail) == null ? void 0 : _a2.messages) == null ? void 0 : _b2.length) || 0;
        const lastPostCreated = (_c = a.mail) == null ? void 0 : _c.lastPostCreated;
        const group = {
            type: "account-message",
            id: a.id,
            href: getInboxUrl(storageData2.options),
            title: `${a.name || ""} inbox (${length})`,
            lastPostCreated: lastPostCreated,
            size: length,
            notify: a.mailNotify ? "on" : "off",
            error: error,
            updatesDisabled: !a.checkMail
        };
        if (length) groupsWithPosts.push(group); else if (!storageData2.options.hideEmptyGroups) groupsWithoutPosts.push(group);
    }));
    storageData2.subredditList.forEach((s => {
        var _a2, _b2;
        const subData = storageData2.subreddits[s.id];
        const length = ((_a2 = subData == null ? void 0 : subData.posts) == null ? void 0 : _a2.length) || 0;
        const lastPostCreated = subData == null ? void 0 : subData.lastPostCreated;
        const group = {
            type: "subreddit",
            id: s.id,
            href: getSubredditUrl(s.subreddit, storageData2.options),
            title: `${s.name || `r/${s.subreddit}`} (${length})`,
            lastPostCreated: lastPostCreated,
            size: length,
            isMultireddit: s.subreddit.includes("+"),
            notify: s.notify ? "on" : "off",
            error: formatError(subData == null ? void 0 : subData.error),
            filter: ((_b2 = s.filterOpts) == null ? void 0 : _b2.enabled) ? "on" : "off",
            updatesDisabled: s.disabled
        };
        if (length) groupsWithPosts.push(group); else if (!storageData2.options.hideEmptyGroups) groupsWithoutPosts.push(group);
    }));
    storageData2.queriesList.forEach((q => {
        var _a2;
        const query = storageData2.queries[q.id];
        const length = ((_a2 = query == null ? void 0 : query.posts) == null ? void 0 : _a2.length) || 0;
        const lastPostCreated = query == null ? void 0 : query.lastPostCreated;
        const group = {
            type: "search",
            id: q.id,
            href: getSearchQueryUrl(q.query, q.subreddit, storageData2.options),
            title: `${q.name || q.query || ""} (${length})`,
            lastPostCreated: lastPostCreated,
            size: length,
            isMultireddit: q.subreddit ? q.subreddit.includes("+") : true,
            error: formatError(query == null ? void 0 : query.error),
            notify: q.notify ? "on" : "off",
            updatesDisabled: q.disabled
        };
        if (length) groupsWithPosts.push(group); else if (!storageData2.options.hideEmptyGroups) groupsWithoutPosts.push(group);
    }));
    (_b = storageData2.usersList) == null ? void 0 : _b.forEach(((u, idx) => {
        var _a2;
        if (!u.username) return;
        const length = ((_a2 = u.data) == null ? void 0 : _a2.length) || 0;
        let watchType = "";
        if (u.watch === "comments") watchType = "comments";
        if (u.watch === "submitted") watchType = "posts";
        const group = {
            type: "user",
            id: `user_${idx}`,
            href: getUserProfileUrl(u.username, u.watch, storageData2.options),
            title: `u/${u.username} ${watchType} (${length})`,
            lastPostCreated: u.lastPostCreated,
            size: length,
            isMultireddit: true,
            notify: u.notify ? "on" : "off",
            error: formatError(u.error)
        };
        if (length) groupsWithPosts.push(group); else if (!storageData2.options.hideEmptyGroups) groupsWithoutPosts.push(group);
    }));
    groupsWithPosts.sort(((a, b) => (a.lastPostCreated || 0) - (b.lastPostCreated || 0)));
    return {
        groupsWithPosts: groupsWithPosts,
        groupsWithoutPosts: groupsWithoutPosts
    };
}

function getGroupItems(data, id, type) {
    var _a, _b, _c, _d, _e, _f;
    if (type === "subreddit") return data.subreddits[id].posts || [];
    if (type === "search") return data.queries[id].posts || [];
    if (type === "user") {
        const idx = idToUserIdx(id);
        if (idx !== null) return ((_b = (_a = data.usersList) == null ? void 0 : _a[idx]) == null ? void 0 : _b.data) || [];
    }
    if (type === "message") return ((_c = data.mail) == null ? void 0 : _c.messages) || [];
    if (type === "account-message") return ((_f = (_e = (_d = data.accounts) == null ? void 0 : _d[id]) == null ? void 0 : _e.mail) == null ? void 0 : _f.messages) || [];
    return [];
}

async function removePostsFromGroup(id, type) {
    if (type === "search") return storage.removePostsFrom({
        searchId: id
    });
    if (type === "subreddit") return storage.removePostsFrom({
        subredditId: id
    });
    if (type === "user") {
        const index = idToUserIdx(id);
        if (index == null) return;
        return storage.removePostsFrom({
            followUserIndex: index
        });
    }
    if (type === "message") return storage.removeMessages();
    if (type === "account-message") return storage.removeAccountMessages(id);
}

const Pin = '\x3c!-- This Source Code Form is subject to the terms of the Mozilla Public\n   - License, v. 2.0. If a copy of the MPL was not distributed with this\n   - file, You can obtain one at http://mozilla.org/MPL/2.0/. --\x3e\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill="currentColor" d="M10.53 9.47L8.25 7.19 9.8 5.643a.694.694 0 0 0 0-.98 3.04 3.04 0 0 0-2.161-.894h-.122A1.673 1.673 0 0 1 5.846 2.1v-.408A.693.693 0 0 0 4.664 1.2L1.2 4.664a.693.693 0 0 0 .49 1.182h.41a1.672 1.672 0 0 1 1.669 1.671v.117a2.8 2.8 0 0 0 .925 2.192.693.693 0 0 0 .949-.026L7.19 8.251l2.28 2.28a.75.75 0 0 0 1.06-1.061z"></path></svg>\n';

function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[11] = list[i];
    return child_ctx;
}

function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[14] = list[i];
    return child_ctx;
}

function create_if_block_2(ctx) {
    let dropdownlist;
    let t;
    let div;
    let current;
    dropdownlist = new DropDownList({
        props: {
            toggle: ctx[5]("PINNED_POST_LIST"),
            items: ctx[3].pinnedPostList,
            isExpanded: ctx[2].has("PINNED_POST_LIST"),
            rowOutTransition: slideHorizontal,
            $$slots: {
                "list-row": [ create_list_row_slot_1, ({item: item}) => ({
                    17: item
                }), ({item: item}) => item ? 131072 : 0 ],
                "header-row": [ create_header_row_slot_1 ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    return {
        c() {
            create_component(dropdownlist.$$.fragment);
            t = space();
            div = element("div");
            attr(div, "class", "delimiter svelte-19npmd");
        },
        m(target, anchor) {
            mount_component(dropdownlist, target, anchor);
            insert(target, t, anchor);
            insert(target, div, anchor);
            current = true;
        },
        p(ctx2, dirty) {
            const dropdownlist_changes = {};
            if (dirty & 8) dropdownlist_changes.items = ctx2[3].pinnedPostList;
            if (dirty & 4) dropdownlist_changes.isExpanded = ctx2[2].has("PINNED_POST_LIST");
            if (dirty & 393224) dropdownlist_changes.$$scope = {
                dirty: dirty,
                ctx: ctx2
            };
            dropdownlist.$set(dropdownlist_changes);
        },
        i(local) {
            if (current) return;
            transition_in(dropdownlist.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(dropdownlist.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) {
                detach(t);
                detach(div);
            }
            destroy_component(dropdownlist, detaching);
        }
    };
}

function create_header_row_slot_1(ctx) {
    let div2;
    let div1;
    let div0;
    let t0;
    let span;
    let t1_value = `Pinned posts (${ctx[3].pinnedPostList.length})`;
    let t1;
    return {
        c() {
            div2 = element("div");
            div1 = element("div");
            div0 = element("div");
            t0 = space();
            span = element("span");
            t1 = text(t1_value);
            attr(div0, "class", "mr-1 h-4 w-4");
            attr(div1, "class", "flex w-full items-center p-1 pb-2 pr-4");
            attr(div2, "slot", "header-row");
        },
        m(target, anchor) {
            insert(target, div2, anchor);
            append(div2, div1);
            append(div1, div0);
            div0.innerHTML = Pin;
            append(div1, t0);
            append(div1, span);
            append(span, t1);
        },
        p(ctx2, dirty) {
            if (dirty & 8 && t1_value !== (t1_value = `Pinned posts (${ctx2[3].pinnedPostList.length})`)) set_data(t1, t1_value);
        },
        d(detaching) {
            if (detaching) detach(div2);
        }
    };
}

function create_list_row_slot_1(ctx) {
    let div;
    let pinpostrow;
    let current;
    pinpostrow = new PinPostRow({
        props: {
            item: ctx[17]
        }
    });
    return {
        c() {
            div = element("div");
            create_component(pinpostrow.$$.fragment);
            attr(div, "slot", "list-row");
        },
        m(target, anchor) {
            insert(target, div, anchor);
            mount_component(pinpostrow, div, null);
            current = true;
        },
        p(ctx2, dirty) {
            const pinpostrow_changes = {};
            if (dirty & 131072) pinpostrow_changes.item = ctx2[17];
            pinpostrow.$set(pinpostrow_changes);
        },
        i(local) {
            if (current) return;
            transition_in(pinpostrow.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(pinpostrow.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div);
            destroy_component(pinpostrow);
        }
    };
}

function create_header_row_slot(ctx) {
    let div;
    let grouptitle;
    let current;
    function func() {
        return ctx[10](ctx[14]);
    }
    grouptitle = new GroupTitle({
        props: {
            onCheck: func,
            group: ctx[14]
        }
    });
    return {
        c() {
            div = element("div");
            create_component(grouptitle.$$.fragment);
            attr(div, "slot", "header-row");
        },
        m(target, anchor) {
            insert(target, div, anchor);
            mount_component(grouptitle, div, null);
            current = true;
        },
        p(new_ctx, dirty) {
            ctx = new_ctx;
            const grouptitle_changes = {};
            if (dirty & 1) grouptitle_changes.onCheck = func;
            if (dirty & 1) grouptitle_changes.group = ctx[14];
            grouptitle.$set(grouptitle_changes);
        },
        i(local) {
            if (current) return;
            transition_in(grouptitle.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(grouptitle.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div);
            destroy_component(grouptitle);
        }
    };
}

function create_list_row_slot(ctx) {
    let div;
    let row;
    let current;
    row = new Row({
        props: {
            group: ctx[14],
            item: ctx[17]
        }
    });
    return {
        c() {
            div = element("div");
            create_component(row.$$.fragment);
            attr(div, "slot", "list-row");
        },
        m(target, anchor) {
            insert(target, div, anchor);
            mount_component(row, div, null);
            current = true;
        },
        p(ctx2, dirty) {
            const row_changes = {};
            if (dirty & 1) row_changes.group = ctx2[14];
            if (dirty & 131072) row_changes.item = ctx2[17];
            row.$set(row_changes);
        },
        i(local) {
            if (current) return;
            transition_in(row.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(row.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div);
            destroy_component(row);
        }
    };
}

function create_each_block_1(key_1, ctx) {
    let div;
    let dropdownlist;
    let div_outro;
    let current;
    dropdownlist = new DropDownList({
        props: {
            toggle: ctx[5](ctx[14].id),
            items: getGroupItems(ctx[3], ctx[14].id, ctx[14].type),
            isExpanded: ctx[2].has(ctx[14].id),
            rowOutTransition: ctx[6],
            $$slots: {
                "list-row": [ create_list_row_slot, ({item: item}) => ({
                    17: item
                }), ({item: item}) => item ? 131072 : 0 ],
                "header-row": [ create_header_row_slot ]
            },
            $$scope: {
                ctx: ctx
            }
        }
    });
    return {
        key: key_1,
        first: null,
        c() {
            div = element("div");
            create_component(dropdownlist.$$.fragment);
            this.first = div;
        },
        m(target, anchor) {
            insert(target, div, anchor);
            mount_component(dropdownlist, div, null);
            current = true;
        },
        p(new_ctx, dirty) {
            ctx = new_ctx;
            const dropdownlist_changes = {};
            if (dirty & 1) dropdownlist_changes.toggle = ctx[5](ctx[14].id);
            if (dirty & 9) dropdownlist_changes.items = getGroupItems(ctx[3], ctx[14].id, ctx[14].type);
            if (dirty & 5) dropdownlist_changes.isExpanded = ctx[2].has(ctx[14].id);
            if (dirty & 393217) dropdownlist_changes.$$scope = {
                dirty: dirty,
                ctx: ctx
            };
            dropdownlist.$set(dropdownlist_changes);
        },
        i(local) {
            if (current) return;
            transition_in(dropdownlist.$$.fragment, local);
            if (div_outro) div_outro.end(1);
            current = true;
        },
        o(local) {
            transition_out(dropdownlist.$$.fragment, local);
            if (local) div_outro = create_out_transition(div, ctx[7], {
                duration: 150
            });
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div);
            destroy_component(dropdownlist);
            if (detaching && div_outro) div_outro.end();
        }
    };
}

function create_if_block_1$1(ctx) {
    let div;
    return {
        c() {
            div = element("div");
            div.textContent = `${getMsg("noPosts")}`;
            attr(div, "class", "mx-auto my-4 text-skin-gray");
        },
        m(target, anchor) {
            insert(target, div, anchor);
        },
        d(detaching) {
            if (detaching) detach(div);
        }
    };
}

function create_if_block$1(ctx) {
    let div;
    let t;
    let each_blocks = [];
    let each_1_lookup = new Map;
    let each_1_anchor;
    let current;
    let each_value = ensure_array_like(ctx[1]);
    const get_key = ctx2 => ctx2[11].id;
    for (let i = 0; i < each_value.length; i += 1) {
        let child_ctx = get_each_context(ctx, each_value, i);
        let key = get_key(child_ctx);
        each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
    }
    return {
        c() {
            div = element("div");
            t = space();
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            each_1_anchor = empty();
            attr(div, "class", "delimiter svelte-19npmd");
        },
        m(target, anchor) {
            insert(target, div, anchor);
            insert(target, t, anchor);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(target, anchor);
            insert(target, each_1_anchor, anchor);
            current = true;
        },
        p(ctx2, dirty) {
            if (dirty & 2) {
                each_value = ensure_array_like(ctx2[1]);
                group_outros();
                each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
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
            if (detaching) {
                detach(div);
                detach(t);
                detach(each_1_anchor);
            }
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].d(detaching);
        }
    };
}

function create_each_block(key_1, ctx) {
    let first;
    let grouptitle;
    let current;
    grouptitle = new GroupTitle({
        props: {
            group: ctx[11],
            disabled: true
        }
    });
    return {
        key: key_1,
        first: null,
        c() {
            first = empty();
            create_component(grouptitle.$$.fragment);
            this.first = first;
        },
        m(target, anchor) {
            insert(target, first, anchor);
            mount_component(grouptitle, target, anchor);
            current = true;
        },
        p(new_ctx, dirty) {
            ctx = new_ctx;
            const grouptitle_changes = {};
            if (dirty & 2) grouptitle_changes.group = ctx[11];
            grouptitle.$set(grouptitle_changes);
        },
        i(local) {
            if (current) return;
            transition_in(grouptitle.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(grouptitle.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(first);
            destroy_component(grouptitle, detaching);
        }
    };
}

function create_fragment$2(ctx) {
    let div1;
    let div0;
    let t0;
    let each_blocks = [];
    let each_1_lookup = new Map;
    let t1;
    let t2;
    let current;
    let if_block0 = ctx[3].pinnedPostList.length && create_if_block_2(ctx);
    let each_value_1 = ensure_array_like(ctx[0]);
    const get_key = ctx2 => ctx2[14].id;
    for (let i = 0; i < each_value_1.length; i += 1) {
        let child_ctx = get_each_context_1(ctx, each_value_1, i);
        let key = get_key(child_ctx);
        each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
    }
    let if_block1 = !ctx[0].length && create_if_block_1$1();
    let if_block2 = !ctx[3].options.hideEmptyGroups && ctx[1].length && create_if_block$1(ctx);
    return {
        c() {
            div1 = element("div");
            div0 = element("div");
            if (if_block0) if_block0.c();
            t0 = space();
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
            t1 = space();
            if (if_block1) if_block1.c();
            t2 = space();
            if (if_block2) if_block2.c();
            attr(div1, "class", "flex flex-col svelte-19npmd");
            toggle_class(div1, "big", ctx[4]);
        },
        m(target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            if (if_block0) if_block0.m(div0, null);
            append(div1, t0);
            for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(div1, null);
            append(div1, t1);
            if (if_block1) if_block1.m(div1, null);
            append(div1, t2);
            if (if_block2) if_block2.m(div1, null);
            current = true;
        },
        p(ctx2, [dirty]) {
            if (ctx2[3].pinnedPostList.length) if (if_block0) {
                if_block0.p(ctx2, dirty);
                if (dirty & 8) transition_in(if_block0, 1);
            } else {
                if_block0 = create_if_block_2(ctx2);
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
            if (dirty & 131181) {
                each_value_1 = ensure_array_like(ctx2[0]);
                group_outros();
                each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value_1, each_1_lookup, div1, outro_and_destroy_block, create_each_block_1, t1, get_each_context_1);
                check_outros();
            }
            if (!ctx2[0].length) if (if_block1) ; else {
                if_block1 = create_if_block_1$1();
                if_block1.c();
                if_block1.m(div1, t2);
            } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
            }
            if (!ctx2[3].options.hideEmptyGroups && ctx2[1].length) if (if_block2) {
                if_block2.p(ctx2, dirty);
                if (dirty & 10) transition_in(if_block2, 1);
            } else {
                if_block2 = create_if_block$1(ctx2);
                if_block2.c();
                transition_in(if_block2, 1);
                if_block2.m(div1, null);
            } else if (if_block2) {
                group_outros();
                transition_out(if_block2, 1, 1, (() => {
                    if_block2 = null;
                }));
                check_outros();
            }
            if (!current || dirty & 16) toggle_class(div1, "big", ctx2[4]);
        },
        i(local) {
            if (current) return;
            transition_in(if_block0);
            for (let i = 0; i < each_value_1.length; i += 1) transition_in(each_blocks[i]);
            transition_in(if_block2);
            current = true;
        },
        o(local) {
            transition_out(if_block0);
            for (let i = 0; i < each_blocks.length; i += 1) transition_out(each_blocks[i]);
            transition_out(if_block2);
            current = false;
        },
        d(detaching) {
            if (detaching) detach(div1);
            if (if_block0) if_block0.d();
            for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].d();
            if (if_block1) if_block1.d();
            if (if_block2) if_block2.d();
        }
    };
}

function instance$2($$self, $$props, $$invalidate) {
    let $storageData;
    component_subscribe($$self, storageData, ($$value => $$invalidate(9, $storageData = $$value)));
    let {groupsWithPosts: groupsWithPosts = []} = $$props;
    let {groupsWithoutPosts: groupsWithoutPosts = []} = $$props;
    let expanded = new Set;
    let initialLoading = true;
    let data;
    let big = false;
    const getToggleHandler = id => e => {
        e.stopPropagation();
        if (expanded.has(id)) {
            expanded.delete(id);
            $$invalidate(2, expanded = new Set(expanded));
        } else $$invalidate(2, expanded = new Set(expanded.add(id)));
    };
    const pinTransition = (node, props) => slideHorizontal(node, props);
    const postGroupTransition = (node, props) => slideHorizontal(node, props);
    const func = g => removePostsFromGroup(g.id, g.type);
    $$self.$$set = $$props2 => {
        if ("groupsWithPosts" in $$props2) $$invalidate(0, groupsWithPosts = $$props2.groupsWithPosts);
        if ("groupsWithoutPosts" in $$props2) $$invalidate(1, groupsWithoutPosts = $$props2.groupsWithoutPosts);
    };
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 512) $$invalidate(3, data = $storageData);
        if ($$self.$$.dirty & 269) if (initialLoading) {
            if (groupsWithPosts.length === 1) $$invalidate(2, expanded = new Set(groupsWithPosts.map((g => g.id)))); else $$invalidate(2, expanded = new Set([ ...expanded, ...groupsWithPosts.filter((g => g.size <= data.options.expandWithItems)).map((g => g.id)) ]));
            if (expanded.size) $$invalidate(8, initialLoading = false);
        }
        if ($$self.$$.dirty & 20) $$invalidate(4, big = big || Boolean(expanded.size));
    };
    return [ groupsWithPosts, groupsWithoutPosts, expanded, data, big, getToggleHandler, pinTransition, postGroupTransition, initialLoading, $storageData, func ];
}

class WatchList extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$2, create_fragment$2, safe_not_equal, {
            groupsWithPosts: 0,
            groupsWithoutPosts: 1
        });
    }
}

function create_fragment$1(ctx) {
    let footer;
    let button;
    let mounted;
    let dispose;
    return {
        c() {
            footer = element("footer");
            button = element("button");
            button.textContent = `${getMsg("footerButton")}`;
            attr(button, "class", "w-full border-t border-skin-delimiter bg-skin-btn p-1 hover:bg-skin-btn-hover focus:bg-skin-input-hover active:bg-skin-btn-active");
            attr(footer, "class", "text-center text-skin-text");
        },
        m(target, anchor) {
            insert(target, footer, anchor);
            append(footer, button);
            if (!mounted) {
                dispose = listen(button, "click", ctx[0]);
                mounted = true;
            }
        },
        p: noop,
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(footer);
            mounted = false;
            dispose();
        }
    };
}

function instance$1($$self) {
    const click_handler = () => storage.removeAllPosts();
    return [ click_handler ];
}

class Footer extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
    }
}

function create_if_block_1(ctx) {
    let div3;
    let button;
    let div0;
    let t0;
    let div1;
    let t2;
    let div2;
    let t3;
    let mounted;
    let dispose;
    return {
        c() {
            div3 = element("div");
            button = element("button");
            div0 = element("div");
            t0 = space();
            div1 = element("div");
            div1.textContent = "Click here to grant permissions to access reddit";
            t2 = space();
            div2 = element("div");
            t3 = text(ctx[4]);
            attr(div0, "class", "h-5 w-5 text-skin-error");
            attr(button, "class", "mt-2 flex gap-1 text-skin-error hover:underline");
            attr(div2, "class", "mt-1 text-skin-error");
            attr(div3, "class", "my-4 flex h-full justify-center py-2 text-center");
        },
        m(target, anchor) {
            insert(target, div3, anchor);
            append(div3, button);
            append(button, div0);
            div0.innerHTML = WarningIcon;
            append(button, t0);
            append(button, div1);
            append(div3, t2);
            append(div3, div2);
            append(div2, t3);
            if (!mounted) {
                dispose = listen(button, "click", ctx[8]);
                mounted = true;
            }
        },
        p(ctx2, dirty) {
            if (dirty & 16) set_data(t3, ctx2[4]);
        },
        d(detaching) {
            if (detaching) detach(div3);
            mounted = false;
            dispose();
        }
    };
}

function create_else_block(ctx) {
    let div1;
    let span0;
    let t1;
    let a;
    let div0;
    let t2;
    let span1;
    let mounted;
    let dispose;
    return {
        c() {
            div1 = element("div");
            span0 = element("span");
            span0.textContent = `${getMsg("noQueries")}`;
            t1 = space();
            a = element("a");
            div0 = element("div");
            t2 = space();
            span1 = element("span");
            span1.textContent = `${getMsg("openOptions")}`;
            attr(div0, "class", "mr-1 h-5 w-5");
            attr(a, "class", "mt-2 flex items-center font-medium");
            attr(a, "href", ctx[5]);
            attr(div1, "class", "mx-4 my-auto flex h-full flex-col items-center justify-center py-2 text-center");
        },
        m(target, anchor) {
            insert(target, div1, anchor);
            append(div1, span0);
            append(div1, t1);
            append(div1, a);
            append(a, div0);
            div0.innerHTML = SettingsIcon;
            append(a, t2);
            append(a, span1);
            if (!mounted) {
                dispose = listen(a, "click", ctx[6]);
                mounted = true;
            }
        },
        p: noop,
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(div1);
            mounted = false;
            dispose();
        }
    };
}

function create_if_block(ctx) {
    let watchlist;
    let current;
    watchlist = new WatchList({
        props: {
            groupsWithPosts: ctx[0],
            groupsWithoutPosts: ctx[2]
        }
    });
    return {
        c() {
            create_component(watchlist.$$.fragment);
        },
        m(target, anchor) {
            mount_component(watchlist, target, anchor);
            current = true;
        },
        p(ctx2, dirty) {
            const watchlist_changes = {};
            if (dirty & 1) watchlist_changes.groupsWithPosts = ctx2[0];
            if (dirty & 4) watchlist_changes.groupsWithoutPosts = ctx2[2];
            watchlist.$set(watchlist_changes);
        },
        i(local) {
            if (current) return;
            transition_in(watchlist.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(watchlist.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            destroy_component(watchlist, detaching);
        }
    };
}

function create_fragment(ctx) {
    let header;
    let t0;
    let main;
    let t1;
    let show_if;
    let current_block_type_index;
    let if_block1;
    let t2;
    let footer;
    let current;
    header = new Header({
        props: {
            groupsWithPosts: ctx[0]
        }
    });
    let if_block0 = !ctx[3] && create_if_block_1(ctx);
    const if_block_creators = [ create_if_block, create_else_block ];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
        if (dirty & 2) show_if = null;
        if (show_if == null) show_if = !!ctx2[7](ctx2[1]);
        if (show_if) return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    footer = new Footer({});
    return {
        c() {
            create_component(header.$$.fragment);
            t0 = space();
            main = element("main");
            if (if_block0) if_block0.c();
            t1 = space();
            if_block1.c();
            t2 = space();
            create_component(footer.$$.fragment);
            attr(main, "class", "flex max-h-[500px] min-h-[6rem] min-w-[22rem] max-w-[32rem] flex-1 flex-col overflow-y-auto overflow-x-hidden pb-2");
        },
        m(target, anchor) {
            mount_component(header, target, anchor);
            insert(target, t0, anchor);
            insert(target, main, anchor);
            if (if_block0) if_block0.m(main, null);
            append(main, t1);
            if_blocks[current_block_type_index].m(main, null);
            insert(target, t2, anchor);
            mount_component(footer, target, anchor);
            current = true;
        },
        p(ctx2, [dirty]) {
            const header_changes = {};
            if (dirty & 1) header_changes.groupsWithPosts = ctx2[0];
            header.$set(header_changes);
            if (!ctx2[3]) if (if_block0) if_block0.p(ctx2, dirty); else {
                if_block0 = create_if_block_1(ctx2);
                if_block0.c();
                if_block0.m(main, t1);
            } else if (if_block0) {
                if_block0.d(1);
                if_block0 = null;
            }
            let previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx2, dirty);
            if (current_block_type_index === previous_block_index) if_blocks[current_block_type_index].p(ctx2, dirty); else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, (() => {
                    if_blocks[previous_block_index] = null;
                }));
                check_outros();
                if_block1 = if_blocks[current_block_type_index];
                if (!if_block1) {
                    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                    if_block1.c();
                } else if_block1.p(ctx2, dirty);
                transition_in(if_block1, 1);
                if_block1.m(main, null);
            }
        },
        i(local) {
            if (current) return;
            transition_in(header.$$.fragment, local);
            transition_in(if_block1);
            transition_in(footer.$$.fragment, local);
            current = true;
        },
        o(local) {
            transition_out(header.$$.fragment, local);
            transition_out(if_block1);
            transition_out(footer.$$.fragment, local);
            current = false;
        },
        d(detaching) {
            if (detaching) {
                detach(t0);
                detach(main);
                detach(t2);
            }
            destroy_component(header, detaching);
            if (if_block0) if_block0.d();
            if_blocks[current_block_type_index].d();
            destroy_component(footer, detaching);
        }
    };
}

const redditOrigin = "https://*.reddit.com/*";

function instance($$self, $$props, $$invalidate) {
    let $storageData;
    component_subscribe($$self, storageData, ($$value => $$invalidate(1, $storageData = $$value)));
    let groupsWithPosts = [];
    let groupsWithoutPosts = [];
    onMount((() => {
        void applyTheme();
        nProgress.configure({
            showSpinner: false
        });
        openLinksOnClick();
        document.addEventListener("keydown", handleKeydownEvent);
        return () => {
            document.removeEventListener("keydown", handleKeydownEvent);
        };
    }));
    const optionsHref = browser.runtime.getURL("options.html");
    const optionsClick = async e => {
        e.preventDefault();
        e.stopPropagation();
        await browser.runtime.openOptionsPage();
        window.close();
    };
    const haveItems = s => {
        var _a, _b, _c, _d, _e, _f;
        s = $storageData;
        return Boolean(((_a = s.queriesList) === null || _a === void 0 ? void 0 : _a.length) || ((_b = s.subredditList) === null || _b === void 0 ? void 0 : _b.length) || ((_c = s.pinnedPostList) === null || _c === void 0 ? void 0 : _c.length) || ((_d = s.usersList) === null || _d === void 0 ? void 0 : _d.length) || ((_f = (_e = s.mail) === null || _e === void 0 ? void 0 : _e.messages) === null || _f === void 0 ? void 0 : _f.length) || Object.keys(s.accounts || {}).length);
    };
    let permissionsGranted = true;
    let permissionsErrMsg = "";
    async function checkPermissions() {
        var _a;
        const permissions = await browser.permissions.getAll();
        if ((_a = permissions.origins) === null || _a === void 0 ? void 0 : _a.includes(redditOrigin)) {
            $$invalidate(3, permissionsGranted = true);
            return;
        }
        $$invalidate(3, permissionsGranted = false);
    }
    async function permissionsBtnClick() {
        const response = await browser.permissions.request({
            origins: [ redditOrigin ]
        });
        if (!response) {
            $$invalidate(4, permissionsErrMsg = "Permission was refused");
            return;
        }
        $$invalidate(3, permissionsGranted = true);
    }
    $$self.$$.update = () => {
        if ($$self.$$.dirty & 2) $$invalidate(0, ({groupsWithPosts: groupsWithPosts, groupsWithoutPosts: groupsWithoutPosts} = extractPostGroups($storageData)), groupsWithPosts, ($$invalidate(2, groupsWithoutPosts), 
        $$invalidate(1, $storageData)));
        if ($$self.$$.dirty & 3) if (groupsWithPosts.length > 0 && $storageData.options.onBadgeClick === "openall") {
            const payload = {
                groups: groupsWithPosts,
                remove: true
            };
            void sendMessage("OPEN_GROUPS", payload).then((() => window.close()));
        }
    };
    void checkPermissions();
    return [ groupsWithPosts, $storageData, groupsWithoutPosts, permissionsGranted, permissionsErrMsg, optionsHref, optionsClick, haveItems, permissionsBtnClick ];
}

class Popup extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, instance, create_fragment, safe_not_equal, {});
    }
}

new Popup({
    target: document.getElementById("app")
});
